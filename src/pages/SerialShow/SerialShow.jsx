import React from 'react';
import {useParams} from 'react-router-dom'
import Display from '../../layouts/Display/Display';

const SerialShow = () => {
  let {slug} = useParams();
  return (
    <Display>
      <h1 className="title-lg">{slug}</h1>
    </Display>
  );
}

export default SerialShow;
