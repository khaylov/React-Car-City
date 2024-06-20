import React from 'react';
// import './Service.css'

function Service(props) {
  return (
    <div className='service-block'>
      <div className="service-block-item">
        <img
          className='service-block-img'
          src={'./img/services/' + props.service.fileName + '.jpg'}
          alt=""
        />
      </div>

      <div className="service-block-item">
        <h3>{props.service.title}</h3>
        <p className='service-block-text'>{props.service.text}</p>
      </div>
    </div>
  );
}

export default Service;