import { useEffect } from 'react';
import { useDispatch,connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { getFetchProfile } from '@pages/Admin/Profile/actions';
import { SelectProfile } from '@pages/Admin/Profile/selector';

const Home = ({ profile }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchProfile());
  }, [dispatch]);

  return (
    <div>
      <FormattedMessage id="app_greeting" />{profile.name}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    profile: SelectProfile
    
});

export default connect(mapStateToProps)(Home);
