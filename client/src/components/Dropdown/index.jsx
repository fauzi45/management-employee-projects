import classes from './style.module.scss';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { useDispatch,connect } from 'react-redux';

import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { SelectProfile } from '@pages/Admin/Profile/selector';
import { setLogin, setToken } from '@containers/Client/actions';

const Dropdown = ({ profile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
  };

  return (
    <div>
      
      <ul className={classes.dropdownProfile}>
        <li className={classes.baris}>
          <p>Halo, {profile.name}</p>
        </li>
        <li className={classes.baris} onClick={() => navigate('/admin/department')}>
          <p><FormattedMessage id="app_text_department" /></p>
        </li>
        <li className={classes.baris} onClick={() => navigate('/admin/employee')}>
        <p><FormattedMessage id="app_text_employee" /></p>
        </li>
        <li className={classes.baris} onClick={() => navigate('/admin/project')}>
        <p><FormattedMessage id="app_text_project" /></p>
        </li>
        <li className={classes.baris} onClick={() => navigate('/admin/team-project')}>
        <p><FormattedMessage id="app_text_team_project" /></p>
        </li>
        <li style={{ border: '1px solid #A8A8A8', width: '100%' }}></li>
        <li className={classes.baris} onClick={logout}>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  profile: SelectProfile,
});

export default connect(mapStateToProps)(Dropdown);
