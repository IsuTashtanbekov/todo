import React from 'react'
import { MyButton } from '../Button/MyButton';
import s from './ModalContent.module.css'
import { AiOutlineClose } from 'react-icons/ai';
import { compose } from 'redux';
import { connect } from 'react-redux';


const ModalContent = ({title, cardTitle, description, onCLoseClick}) => {
  return (
    <div className={s.modal}>
      <header className={s.header}>
          <h1>
            <div className={s.modalHeader}>
              <div>{cardTitle}</div>
              <div><MyButton title={'Закрыть карточку'} url={<AiOutlineClose/> } onHandleClick={() => onCLoseClick()}/></div>
            </div>
          </h1>
      </header>
      <div className={s.mainContent}>
        <main className={s.main}>
          <div>
            <h1>
              Описание
            </h1>
            <div className={s.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae dignissimos iste quod incidunt ratione quis nostrum, impedit cum tenetur autem veniam quidem sunt at expedita accusamus, quaerat, molestiae architecto?
              <span>
                {description}
              </span>
            </div>
          <input type="text" placeholder='Описание'/>
          <MyButton title={'Добавить описание'}/>
          </div>
          <div >
            <p>Действие</p>
            <input type="text"  placeholder='Напишите сообщение'/>
            <button>Сохранить</button>
            <div>      
              props.comment
            </div>
          </div>
        </main>
        <aside className={s.aside}>
              {/* <MyButton title={'Чек лист'} />
              <MyButton title={'Обложка'} />
              <MyButton title={'Удалить'} /> */}
        </aside>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    title: state.Card.cardTitle
  }
}

export default compose(
  connect(mapStateToProps)
)(ModalContent);