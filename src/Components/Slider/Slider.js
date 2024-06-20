import React, {useState} from 'react';
import './Slider.css'
import {cars} from '../../Cars'
import SliderItem from "./SliderItem";

const getRandomCarsArray = () => {
  let randomCarsArray = []

  while (randomCarsArray.length < 10) {
    const randNum = Math.floor(Math.random() * cars.length)

    if (!randomCarsArray.includes(randNum))
    {
      randomCarsArray.push(randNum)
    }
  }

  return randomCarsArray.map(item => cars[item])
}

const carsArray = getRandomCarsArray()

function Slider() {
  const [slides, setSlides] = useState([4, 5, 6])

  const getNumberSlide = (num) => {
    if (num < 0) {
      return carsArray.length - 1
    } else if (num === carsArray.length) {
      return 0
    } else return num
  }

  const changeCurrentSliders = (e) => {
    if (e.target.id === 'slider-arrow-left' || e.target.className === 'slider-arrow-left') {
      setSlides(prev => {
        return prev.map(el => getNumberSlide(el - 1))
      })
    } else if (e.target.id === 'slider-arrow-right' || e.target.className === 'slider-arrow-right') {
      setSlides(prev => {
        return prev.map(el => getNumberSlide(el + 1))
      })
    }
  }

  return (
    <div className='slider'>
      <div className='slider-arrow-left' onClick={changeCurrentSliders}>
        <img
          id='slider-arrow-left'
          src="./img/arrow-left.svg"
          alt=""
        />
      </div>

      <div className='slider-inner'>
        {slides.map(el => (
          <SliderItem car={carsArray[el]} key={carsArray[el].id}/>
        ))}
      </div>

      <div className='slider-arrow-right' onClick={changeCurrentSliders}>
        <img
          id='slider-arrow-right'
          src="./img/arrow-right.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Slider;