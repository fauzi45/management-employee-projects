import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { getFetchProfile, setProfile } from '@pages/Admin/Profile/actions';
import { SelectProfile } from '@pages/Admin/Profile/selector';
import { selectToken } from '@containers/Client/selectors';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const Home = ({ profile, token }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchProfile());
  }, [dispatch]);
 
  useEffect(() => {
    if (profile.isAdmin === false) {
      navigate('/user'); // Jika user adalah admin, navigasi ke halaman admin
    }
  }, [profile, navigate]);

  return (
    <div>
      <FormattedMessage id="app_greeting" /> Admin {profile.name}
    </div>
  );
};

Home.prototypes = {
  token: PropTypes.string,
  profile: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  profile: SelectProfile,
  token: selectToken,
});

export default connect(mapStateToProps)(Home);
