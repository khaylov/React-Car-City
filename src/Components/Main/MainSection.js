import React from 'react';
// import './MainSection.css'

function MainSection() {
  return (
    <section className='main-section'>
      <div className="main-title">
        <h1>Car City – честные автомобили для Вас</h1>
      </div>

      <h2>О нас</h2>

      <div className="main-inner">
        <div className="main-picture">
          <img src="./img/koleos.png" alt="main-picture-koleos"/>
        </div>

        <div className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias asperiores aspernatur assumenda blanditiis dolores eveniet ex expedita explicabo, fuga iste itaque odit pariatur placeat praesentium quaerat quam recusandae saepe similique suscipit vel veniam vero!</div>
      </div>
    </section>
  );
}

export default MainSection;