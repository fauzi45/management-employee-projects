import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import classes from './style.module.scss';
import { getMyDetail } from './actions';
import { selectMyDetail } from './selector';
import { selectToken } from '@containers/Client/selectors';

const Detail = ({ myDetail, token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMyDetail(id, () => {
      navigate("/notfound/error");
    }));
  }, [dispatch]);

  useEffect(() => {
    const dataToken = jwtDecode(token);
    if (dataToken.isAdmin === true) {
      navigate('/admin'); // Jika user adalah admin, navigasi ke halaman admin
    }
  }, [navigate]);


  useEffect(() => {
    if (myDetail) {
      setData(myDetail);
    }
  }, [myDetail]);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.title}>
          <p className={classes.titlePost}>{data?.name}</p>
          <p className={classes.userPost}>{data.user?.fullname}</p>
        </div>
        <p className={classes.date}>{data?.project?.startDate.substring(0, 10)} to {data?.project?.endDate.substring(0, 10)}</p>
        <img src={data?.project?.imageUrl} className={classes.image} />
        <div className={classes.desc}>
          {data?.project?.description}
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  myDetail: PropTypes.object,
  token: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  myDetail: selectMyDetail,
  token: selectToken
});

export default connect(mapStateToProps)(Detail);