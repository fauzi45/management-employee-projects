import { useEffect, useState } from 'react';

import classes from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { createStructuredSelector } from 'reselect';

const Card = ({ data  }) => {
  const navigate = useNavigate();
  const gotToDetail = () => {
    navigate(`/${data?.id}`);
  };

  return (
    <div className={classes.container}>
      <img src={data?.project?.imageUrl} className={classes.image} />
      <div className={classes.content}>
        <p className={classes.title}>{data?.name}</p>
        <p className={classes.date}>{data?.project?.startDate.substring(0,10)} - {data?.project?.endDate.substring(0,10)}</p>
        <p className={classes.shortdesc}>{data?.project.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(Card);
