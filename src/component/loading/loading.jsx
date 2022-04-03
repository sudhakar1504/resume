import React from 'react';
import './loading.css';
import Banner from '../../assest/cartoon3.gif';


const loading = () => {
  return (
    <div className='load'>
        <img src={Banner} alt="loading" />
    </div>
  )
}

export default loading