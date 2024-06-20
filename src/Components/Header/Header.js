import React, {useContext, useState} from 'react';
import './Header.css'
import {ActivePageContext} from "../../App";
import HeaderModalCallMe from "./HeaderModalCallMe";

function Header(props) {
  const {activePage, setActivePage} = useContext(ActivePageContext)
  const [modalCallMeVisible, setModalCallMeVisible] = useState(false)

  const showModalCallMe = () => {
    setModalCallMeVisible(true)
  }

  const hideModalCallMe = () => {
    setModalCallMeVisible(false)
  }

  return (
    <header>
      <img src="./img/logo.jpg" alt=""/>

      <nav>
        <ul>
          <li
            id='main'
            className={activePage === 'main' ? 'header-nav-item active' : 'header-nav-item'}
            onClick={(e) => setActivePage(e.target.id)}
          >Главная
          </li>

          <li
            id='catalog'
            className={activePage === 'catalog' ? 'header-nav-item active' : 'header-nav-item'}
            onClick={(e) => setActivePage(e.target.id)}
          >Каталог
          </li>

          <li
            id='services'
            className={activePage === 'services' ? 'header-nav-item active' : 'header-nav-item'}
            onClick={(e) => setActivePage(e.target.id)}
          >Услуги
          </li>

          <li
            id='feedback'
            className={activePage === 'feedback' ? 'header-nav-item active' : 'header-nav-item'}
            onClick={(e) => setActivePage(e.target.id)}
          >Отзывы
          </li>

          <li
            id='contacts'
            className={activePage === 'contacts' ? 'header-nav-item active' : 'header-nav-item'}
            onClick={(e) => setActivePage(e.target.id)}
          >Контакты
          </li>
        </ul>
      </nav>

      <div className='header-phone'>
        <div className="header-phone-call">
          <img src="./img/phone.png" alt="phone"/>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        </div>

        <button onClick={showModalCallMe}>Заказать звонок</button>
      </div>

      {modalCallMeVisible && <HeaderModalCallMe hideModalCallMe={hideModalCallMe}/>}
    </header>
  );
}

export default Header;