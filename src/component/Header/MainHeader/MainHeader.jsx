import React, { useState } from 'react';
import s from './MainHeader.module.css';
import { RiShareForwardFill } from 'react-icons/ri';
import { ShareButton } from '../../UI/ShareButton/ShareButton';

const MainHeader = () => {
  const [title, setTitle] = useState('Ежедневные задачи');
  const [editMode, setEditMode] = useState(true);
 
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
            onChange={setTitle}
            onClick={() => setEditMode(true)}
            className={s.input}
          />
        )}
      </div>
      <div className={s.column}>
        <ShareButton>

        </ShareButton>
      </div>
    </div>
  );
};

export default MainHeader;
