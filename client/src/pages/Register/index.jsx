import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import classes from './style.module.scss';
import { useNavigate } from 'react-router-dom';

import encryptPayload from '@utils/encryptionHelper';
import toast, { Toaster } from 'react-hot-toast';

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

import { setEmployee } from './action';

const Register = ({ token }) => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [departmentId, setDepartmentId] = useState(0);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  const onSubmit = () => {
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
        departmentId: encryptPayload(departmentId)
      };
      dispatch(
        setEmployee(dataUser, () => {
          toast.success('Register success');
          setName('');
          setEmail('');
          setPassword('');
          navigate('/login');
        })
      );
    }
  };

  //   useEffect(() => {
  //     if (token) {
  //       navigate('/');
  //     }
  //   }, [token]);

  const isValidEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={classes.container}>
        {console.log(name)}
      <div className={classes.image}></div>
      <div className={classes.box}>
        <div className={classes.containerbox}>
          <div className={classes.title}>
            <FormattedMessage id="app_text_register" />
          </div>
          <div className={classes.group}>
            <p className={classes.text}>
              <FormattedMessage id="app_table_name" />
            </p>
            <input className={classes.input} type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={classes.group}>
            <p className={classes.text}>Email</p>
            <input className={classes.input} type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className={classes.group}>
            <p className={classes.text}>
              <FormattedMessage id="app_text_password" />
            </p>
            <div className={classes.containerInput}>
              <input className={classes.input} type={type} onChange={(e) => setPassword(e.target.value)} />
              <span className={classes.icon} onClick={handleToggle}>
                <Icon icon={icon} size={25} />
              </span>
            </div>
          </div>
          <div className={classes.group}>
            <p className={classes.text}>
              <FormattedMessage id="app_table_position" />
            </p>
            <input className={classes.input} type="text" onChange={(e) => setPosition(e.target.value)} />
          </div>
          <div className={classes.group}>
            <p className={classes.text}>
              Department ID
            </p>
            <input className={classes.input} type="text" onChange={(e) => setDepartmentId(e.target.value)} />
          </div>
          <div onClick={onSubmit} className={classes.button}>
            <FormattedMessage id="app_text_register" />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

Register.prototypes = {
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  token: (state) => state.client.token,
});

export default connect(mapStateToProps)(Register);
