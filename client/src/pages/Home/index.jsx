import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { getFetchProfile, setProfile } from '@pages/Admin/Profile/actions';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';
import { selectToken } from '@containers/Client/selectors';

const Home = ({ token }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchProfile());
  }, [dispatch]);

  useEffect(() => {
    const dataToken = jwtDecode(token);
    if (dataToken.isAdmin === false) {
      navigate('/user'); // Jika user adalah admin, navigasi ke halaman admin
    }
  }, [navigate]);

  return (
    <div>
      <FormattedMessage id="app_greeting" /> Admin
    </div>
  );
};

Home.prototypes = {
  token: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  token: selectToken
});

export default connect(mapStateToProps)(Home);
