import React from 'react';
import './SliderItem.css'

function SliderItem(props) {
  const generateStarlist = (name, num) => {
    let fileName = ''
    let starList = []

    if (name === 'fill') {
      fileName = 'fillStar'
    }
    else if (name === 'empty') {
      fileName = 'emptyStar'
    }

    for (let i = 0; i < num; i++) {
      starList.push(
        <img
          key={i}
          className='slider-item-star'
          src={"./img/" + fileName + '.svg'}
          alt={fileName}
        />
      )
    }

    return starList
  }

  return (
    <div className='slider-item'>
      <div className="slider-item-img">
        <img src={'./img/cars/' + props.car.fileName} alt="car-img"/>
      </div>

      <div className="slider-item-text-block">
      <h4>{props.car.name}</h4>

        <ul className='slider-item-props-list'>
          <li className='slider-item-state'>{'Состояние: '}
            <div className="slider-item-stars-block">
              {generateStarlist('fill', props.car.state)}
              {generateStarlist('empty', 5 - props.car.state)}
            </div>
          </li>
          <li>{'Год выпуска: ' + props.car.year}</li>
          <li>{'Пробег, км: ' + props.car.mileage}</li>
          <li>{'Владельцев: ' + props.car.owners}</li>
          <li className='slider-item-text-price'>{new Intl.NumberFormat().format(props.car.price) + ' ₽'}</li>
        </ul>
      </div>
    </div>
  );
}

export default SliderItem;