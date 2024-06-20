import React, {useState} from 'react';

function HeaderModalCallMe(props) {
  const [isDisabledBtnEnter, setIsDisabledBtnEnter] = useState(true)

  const onWrapperClicked = (e) => {
    if (e.target.classList.contains('modal-wrapper')) props.hideModalCallMe()
  }

  const changeStateBtnEnter = (e) => {
    if (e.target.checked === true) {
      setIsDisabledBtnEnter(false)
    }
    else if (e.target.checked === false) {
      setIsDisabledBtnEnter(true)
    }
  }

  return (
    <div className='modal'>
      <div className="modal-wrapper" onClick={onWrapperClicked}>
        <div className="modal-content">
          <p className='modal-title'>Мы позвоним сами</p>

          <button
            className="modal-btn-close"
            onClick={props.hideModalCallMe}
          >
            X
          </button>

          <div className="modal-input-block">
            <form action="" className="modal-callMe-form">
              <div className="modal-callMe-input-block">
                <label>Имя</label>
                <input type="text" className='modal-callMe-input' placeholder='Иван'/>
              </div>

              <div className="modal-callMe-input-block">
                <label>Фамилия</label>
                <input type="text" className='modal-callMe-input' placeholder='Иванов'/>
              </div>

              <div className="modal-callMe-input-block">
                <label>email</label>
                <input type="text" className='modal-callMe-input' placeholder='ivan@mail.ru'/>
              </div>

              <div className="modal-callMe-checkbox-block">
                <input className='modal-checkbox' type="checkbox" onChange={changeStateBtnEnter}/>
                <label>даю согласие на обработку персональных данных</label>
              </div>
            </form>
          </div>

          <div className="modal-btn-block">
            <button className='modal-btn modal-btn-enter' disabled={isDisabledBtnEnter} >Отправить</button>
            <button className='modal-btn modal-btn-cancel' onClick={props.hideModalCallMe}>Отмена</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeaderModalCallMe;