import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';

import classes from './style.module.scss';

import { addNewDepartment, getDetailDepartment } from './actions';
import { selectDepartment } from '../../selector';

import toast, { Toaster } from 'react-hot-toast';

import { createStructuredSelector } from 'reselect';
import { selectDepartmentDetail } from './selector';

const FormDepartment = ({ departmentDetail }) => {
  const intl = useIntl();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
  });
  console.log(formData);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getDetailDepartment(id));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      setFormData(departmentDetail);
    }
  }, [departmentDetail]);

  const submitData = () => {
    const formDataSend = new FormData();
    formDataSend.append('name', formData.name);
    if (!formData.name) {
      toast.error('Name cannot be empty');
    } else {
      toast.success('Department Successfully Created');
      dispatch(
        addNewDepartment(formDataSend, () => {
          navigate('/admin/department');
        })
      );
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {id ? <FormattedMessage id="app_text_department_update" /> : <FormattedMessage id="app_text_department_create" />}
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

const mapStateToProps = createStructuredSelector({
  departmentDetail: selectDepartmentDetail
});

export default connect(mapStateToProps)(FormDepartment);
