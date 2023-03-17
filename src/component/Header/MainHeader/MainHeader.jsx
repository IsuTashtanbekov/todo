import React, { useState } from 'react';
import s from './MainHeader.module.css';
import { RiShareForwardFill } from 'react-icons/ri';
import { MyButton } from '../../UI/Button/Button';

const MainHeader = () => {
  const [title, setTitle] = useState('Ежедневные задачи');
  const [editMode, setEditMode] = useState(true);

  const onSetTitle = (event) => {
    const inputValue = event.target.value;
    setTitle(inputValue);
  };

  return (
    <div className={s.main}>
      <div className={s.column}>
        {editMode ? (
          <span onClick={() => setEditMode(false)} className={s.title}>
            Заголовок: {title}
          </span>
        ) : (
          <input
            type="text"
            autoFocus={true}
            value={title}
            onChange={onSetTitle}
            onClick={() => setEditMode(true)}
            className={s.input}
          />
        )}
      </div>
      <div className={s.column}>
        <button>
          Поделиться
          <RiShareForwardFill />
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
