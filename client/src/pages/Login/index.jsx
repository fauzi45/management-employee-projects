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
import { doLoginAction } from './actions';
import { selectToken } from '@containers/Client/selectors';

const Login = ({ token }) => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

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
    if (!email || !password) {
      toast.error('Email and Password cannot be empty');
    } else if (!isValidEmail(email)) {
      toast.error('Invalid email');
    } else {
      const dataUser = {
        email: encryptPayload(email),
        password: encryptPayload(password),
      };
      dispatch(doLoginAction(dataUser));
    }
  };

    useEffect(() => {
      if (token) {
        navigate('/admin');
      }
    }, [token]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={classes.container}>
      <div className={classes.image}></div>
      <div className={classes.box}>
        <div className={classes.containerbox}>
          <div className={classes.title}>
            <FormattedMessage id="app_text_login" />
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
          <div onClick={onSubmit} className={classes.button}>
            <FormattedMessage id="app_text_login" />
          </div>
          <div onClick={() => navigate('/register')} className={classes.noacc}>
            <FormattedMessage id="app_text_noacc" />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};  

Login.prototypes = {
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  token: selectToken
});

export default connect(mapStateToProps)(Login);
