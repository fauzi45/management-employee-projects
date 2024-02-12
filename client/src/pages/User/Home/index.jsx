import Card from '@components/Card';

import PropTypes from 'prop-types';

import classes from './style.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { selectToken } from '@containers/Client/selectors';
import { selectMyTeam } from './selector';
import { useNavigate } from 'react-router-dom';
import { getFetchMyTeam, setMyTeam } from './actions';
import { jwtDecode } from 'jwt-decode';
import { getFetchProfile } from '@pages/Admin/Profile/actions';
import { SelectProfile } from '@pages/Admin/Profile/selector';
const HomeUser = ({ myTeam,token }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(setMyTeam(null));
    dispatch(getFetchMyTeam());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFetchProfile());
  }, [dispatch]);

  useEffect(() => {
    setData(myTeam);
  }, [myTeam]);

  useEffect(() => {
  const dataToken = jwtDecode(token);
    if (dataToken.isAdmin === true) {
      navigate('/admin'); // Jika user adalah admin, navigasi ke halaman admin
    }
  }, [navigate]);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <FormattedMessage id="app_text_project" /> Anda
      </div>
      {!data?.length > 0 ? (
        <div className={classes.noContent}>No data</div>
      ) : (
        <div className={classes.content}>
          {data.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

HomeUser.prototypes = {
  token: PropTypes.string,
  myTeam: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  myTeam: selectMyTeam,
});

export default connect(mapStateToProps)(HomeUser);
