import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

import classes from './style.module.scss';

import toast, { Toaster } from 'react-hot-toast';

import { createStructuredSelector } from 'reselect';
import { selectProjectDetail } from './selector';
import { addNewProject, getDetailProject, setDetailProject, setUpdateProject } from './actions';
import { selectToken } from '@containers/Client/selectors';
import { jwtDecode } from 'jwt-decode';

const FormProject = ({ projectDetail, token }) => {
  const intl = useIntl();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    status: '',
    imageUrl: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const dataToken = jwtDecode(token);
    if (dataToken.isAdmin === false) {
      navigate('/user'); // Jika user adalah admin, navigasi ke halaman admin
    }
  }, [navigate]);

  useEffect(() => {
    if (id) {
      dispatch(getDetailProject(id));
    } else {
      dispatch(setDetailProject(null));
    }
  }, [id]);

  useEffect(() => {
    if (projectDetail) {
      setFormData(projectDetail);
    } else {
      setFormData({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        status: '',
        imageUrl: '',
      });
    }
  }, [projectDetail]);
  console.log(formData)
  const submitData = () => {
    const formDataSend = new FormData();
    formDataSend.append('name', formData.name);
    formDataSend.append('imageUrl', formData.imageUrl);
    formDataSend.append('description', formData.description);
    formDataSend.append('startDate', formData.startDate);
    formDataSend.append('endDate', formData.endDate);
    if (id) {
      formDataSend.append('status', formData.status);
    }
    if (!formData.name) {
      toast.error('Name cannot be empty');
    } else if (!formData.description) {
      toast.error('Description cannot be empty');
    } else if (!formData.startDate) {
      toast.error('Start Date cannot be empty');
    } else if (!formData.endDate) {
      toast.error('End Date cannot be empty');
    } else {
      if (id) {
        dispatch(
          setUpdateProject(id, formDataSend, () => {
            navigate('/admin/project');
          })
        );
      } else {
        dispatch(
          addNewProject(formDataSend, () => {
            navigate('/admin/project');
          })
        );
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {id ? <FormattedMessage id="app_text_project_update" /> : <FormattedMessage id="app_text_project_create" />}
      </div>

      <div className={classes.containercontent}>
        <div className={classes.subTitle}>
          <FormattedMessage id="app_table_name" />
        </div>
        <input
          placeholder={intl.formatMessage({ id: 'app_text_name_placeholder' })}
          type="text"
          className={classes.inputTitle}
          value={formData.name}
          onChange={(e) => setFormData((data) => ({ ...data, name: e.target.value }))}
        />
        <div className={classes.subTitle}>
          <FormattedMessage id="app_text_project_image" />
        </div>
        <input className={classes.inputTitle} name='imageUrl' type="file" onChange={(e) => setFormData((data) => ({ ...data, imageUrl: e.target.files[0] }))} />
        <div className={classes.subTitle}>
          <FormattedMessage id="app_table_description" />
        </div>
        <input
          placeholder={intl.formatMessage({ id: 'app_table_description' })}
          type="text"
          className={classes.inputTitle}
          value={formData.description}
          onChange={(e) => setFormData((data) => ({ ...data, description: e.target.value }))}
        />
        <div className={classes.subTitle}>
          <FormattedMessage id="app_table_start_date" />
        </div>
        <input
          placeholder={intl.formatMessage({ id: 'app_table_start_date' })}
          type="date"
          className={classes.inputTitle}
          value={formData.startDate}
          onChange={(e) => setFormData((data) => ({ ...data, startDate: e.target.value }))}
        />
        <div className={classes.subTitle}>
          <FormattedMessage id="app_table_end_date" />
        </div>
        <input
          placeholder={intl.formatMessage({ id: 'app_table_end_date' })}
          type="date"
          className={classes.inputTitle}
          value={formData.endDate}
          onChange={(e) => setFormData((data) => ({ ...data, endDate: e.target.value }))}
        />
        {id ? (
          <div>
            <div className={classes.subTitle}>Status</div>
            <div className={classes.inputRadio}>
              <input
                type="radio"
                id="status_proses"
                name="status"
                checked={formData.status === false}
                onChange={() => setFormData((data) => ({ ...data, status: false }))}
              />
              <label htmlFor="status_proses">Proses</label>
            </div>
            <div className={classes.inputRadio}>
              <input
                type="radio"
                id="status_done"
                name="status"
                checked={formData.status === true}
                onChange={() => setFormData((data) => ({ ...data, status: true }))}
              />
              <label htmlFor="status_done">Done</label>
            </div>
          </div>
        ) : (
          ''
        )}

        <div className={classes.post}>
          <Button onClick={submitData} variant="contained">
            {id ? <FormattedMessage id="app_button_update" /> : <FormattedMessage id="app_button_add" />}
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

FormProject.propTypes = {
  projectDetail: PropTypes.array,
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  projectDetail: selectProjectDetail,
  token: selectToken
});

export default connect(mapStateToProps)(FormProject);
