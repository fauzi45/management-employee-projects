import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

import classes from './style.module.scss';

import encryptPayload from '@utils/encryptionHelper';

import toast, { Toaster } from 'react-hot-toast';

import { createStructuredSelector } from 'reselect';
import { selectEmployeeDetail } from './selector';
import { selectDepartment } from '@pages/Admin/Department/selector';
import { addNewEmployee } from './actions';
import { getFetchDepartment } from '@pages/Admin/Department/actions';

const FormEmployee = ({ employeeDetail, department }) => {
  const intl = useIntl();
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchDepartment());
  }, [dispatch]);

  // useEffect(() => {
  //   if (id) {
  //     dispatch(getDetailDepartment(id));
  //   } else {
  //     dispatch(setDetailDepartment(null));

  //   }
  // }, [id]);


  // useEffect(() => {
  //   if (departmentDetail) {
  //     setFormData(departmentDetail);
  //   } else {
  //     setFormData({
  //       name: '',
  //     });
  //   }
  // }, [departmentDetail]);

  const submitData = () => {
    if (!name) {
      toast.error('Name cannot be empty');
    } else if (!email) {
      toast.error('Email cannot be empty');
    } else if (!password) {
      toast.error('Password cannot be empty');
    } else if (!position) {
      toast.error('Position cannot be empty');
    } else if (password.length < 6) {
      toast.error('Password minimal 6 character');
    } else if (!isValidEmail(email)) {
      toast.error('Invalid email');
    } else {
      const dataUser = {
        name: encryptPayload(name),
        email: encryptPayload(email),
        password: encryptPayload(password),
        position: encryptPayload(position),
        departmentId: encryptPayload(selectedOption)
      };
      if (id) {
        dispatch(
          setUpdateDepartment(id,
            dataUser, () => {
              navigate('/admin/employee');
            }
          )
        )
      } else {
        dispatch(
          addNewEmployee(dataUser, () => {
            navigate('/admin/employee');
          })
        );
      }
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {id ? <FormattedMessage id="app_text_employee_update" /> : <FormattedMessage id="app_text_employee_create" />}
      </div>

      <div className={classes.containercontent}>
        <div className={classes.subTitle}>
          <FormattedMessage id="app_table_name" />
        </div>
        <input
          placeholder={intl.formatMessage({ id: 'app_text_name_placeholder' })}
          type="text"
          className={classes.inputTitle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={classes.subTitle}>
          Email
        </div>
        <input
          placeholder="Email"
          type="text"
          className={classes.inputTitle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={classes.subTitle}>
          Password
        </div>
        <input
          placeholder="Password"
          type="password"
          className={classes.inputTitle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={classes.subTitle}>
          Position
        </div>
        <input
          placeholder="Position"
          type="text"
          className={classes.inputTitle}
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <div className={classes.subTitle}>
          Department Name
        </div>
        <select className={classes.inputTitle} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          {department.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>

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

FormEmployee.prototypes = {
  employeeDetail: PropTypes.array,
  department: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  employeeDetail: selectEmployeeDetail,
  department: selectDepartment
});

export default connect(mapStateToProps)(FormEmployee);
