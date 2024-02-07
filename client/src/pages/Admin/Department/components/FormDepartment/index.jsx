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

const FormDepartment = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    name: '',
  });

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getDetailDepartment(id));
    }
  }, [id]);

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
        <FormattedMessage id="app_text_department_create" />
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
            <FormattedMessage id="app_button_add" />
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps)(FormDepartment);
