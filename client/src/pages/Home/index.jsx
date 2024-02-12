import { useEffect } from 'react';
import { useDispatch,connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { getFetchProfile } from '@pages/Admin/Profile/actions';
import { SelectProfile } from '@pages/Admin/Profile/selector';
import { selectToken } from '@containers/Client/selectors';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Home = ({ profile, token }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const decoded = jwtDecode(token);

  useEffect(() => {
    dispatch(getFetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (!decoded.isAdmin) {
      navigate("/user");
    }
  });

  return (
    <div>
      <FormattedMessage id="app_greeting" /> Admin {profile.name}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    profile: SelectProfile,
    token: selectToken
});

export default connect(mapStateToProps)(Home);
