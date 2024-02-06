import classes from './style.module.scss';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setToken } from '@pages/Login/actions';

const Dropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
  };
  return (
    <div>
      <ul className={classes.dropdownProfile}>
        <li className={classes.baris} onClick={() => navigate('/profile')}>
          <p>Profile</p>
        </li>
        <li className={classes.baris} onClick={() => navigate('/create')}>
          {' '}
          <p>New Journey</p>
        </li>
        <li className={classes.baris} onClick={() => navigate('/bookmark')}>
          {' '}
          <p>Bookmark</p>
        </li>
        <li style={{ border: '1px solid #A8A8A8', width: '100%' }}></li>
        <li className={classes.baris} onClick={logout}>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
