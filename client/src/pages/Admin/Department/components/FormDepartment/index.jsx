import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';

import Button from '@mui/material/Button';

import classes from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { addNewDepartment } from './actions';

const CreateDepartment = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
  });
  const dispatch = useDispatch();

  const submitData = () => {
    const formDataSend = new FormData();
    formDataSend.append('name', formData.name);
    {console.log([...formDataSend])}

    dispatch(
      addNewDepartment(formDataSend, () => {
        navigate('/admin/department');
      })
    );
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
    </div>
  );
};

export default CreateDepartment;
