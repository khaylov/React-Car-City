import React from 'react';
import {services} from '../../Services'
import Service from "./Service";
// import './Services.css'

function Services() {
  const getServicesBlock = () => {
    return (
      <>
        {services.map(i => (
          <Service key={i.name} service={i}/>
        ))}
      </>
    )
  }

  return (
    <section className='section-services'>
      <h2>Наши услуги</h2>

      {getServicesBlock()}
    </section>
  );
}

export default Services;