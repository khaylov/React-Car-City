import React, {useContext} from 'react';
import Slider from "../Slider/Slider";
import {ActivePageContext} from "../../App";
// import './BuyNowSection.css'

function BuyNowSection() {
  const {setActivePage} = useContext(ActivePageContext)

  const showCatalogPage = () => setActivePage('catalog')

  return (
    <section className='buy-now-section'>
      <h2>Купи авто прямо сейчас!</h2>

      <div className="buy-now-text">
        <p>Ищешь автомобиль в хорошем состоянии и по адекватной цене? Нужен автомобиль для работы? А может, для
          путешествий? Неважно! У нас ты точно найдешь автомобиль, который закроет любую твою потребность! Выбирай из наличия или закажи свою любимую модель прямо сейчас!</p>
      </div>

      <Slider />

      <button
        className='boy-now-section-button'
        onClick={showCatalogPage}
      >Смотреть все</button>
    </section>
  );
}

export default BuyNowSection;