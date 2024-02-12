import Card from '@components/Card';
import classes from './style.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { selectToken } from '@containers/Client/selectors';
import { selectMyTeam } from './selector';
import { useNavigate } from 'react-router-dom';
import { getFetchMyTeam } from './actions';

const HomeUser = ({ myTeam }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getFetchMyTeam());
  }, [dispatch]);

  useEffect(() => {
    setData(myTeam);
  }, [myTeam]);

  return (
    <div className={classes.container}>
        {console.log(data)}
      <div className={classes.title}>
        <FormattedMessage id="app_text_project" /> Anda
      </div>
      {!data?.length > 0 ? (
        <div className={classes.noContent}>
            No data
        </div>
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

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  myTeam: selectMyTeam,
});

export default connect(mapStateToProps)(HomeUser);
