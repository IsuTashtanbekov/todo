import React from 'react'
import s from './MainHeader.module.css'
import { RiShareForwardFill } from 'react-icons/ri';
import { MyButton } from '../../UI/Button/MyButton';

export const MainHeader = () => {
  const [title, setTitle] = React.useState('Ежедневные задачи')
  const [editMode, setEditMode] = React.useState(true)
  const onSetTitle = (event) => {
    let inputValue = event.target.value
    setTitle(inputValue)
  }


  return (
    <div className={s.main}>
        <div className={s.column}>
          {editMode? 
          <span
          onClick={() => setEditMode(false)} 
          className={s.title}>
            {`Заголовок: ${title}`}</span> :
           <input 
           type='text' 
           autoFocus={true} 
           value={title} 
           onChange={onSetTitle} 
           onClick={() => setEditMode(true)}
           className={s.input}/> }  
        </div>
        <div className={s.column}>
          <MyButton>
            Поделиться
          <RiShareForwardFill/>
          </MyButton>
        </div>
    </div>
  )
}
