import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addColumn } from '../../Data/newCardReducer';
import Article from './Article/Article';
import s from './Main.module.css';

const Main = ({ Boards, addColumn }) => {
  const [columnName, setColumnName] = useState('');
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={s.main}>
      {Boards.map((board) => (
        <Article key={board.id} title={board.name} tasks={board.tasks} list={board} />
      ))}
      <div>
        {editMode ? (
          <div className={s.editColumn}>
            <div>
              <input type="text" value={columnName} onChange={(event) => setColumnName(event.currentTarget.value)} />
            </div>
            <div className={s.buttonBlock}>
              <button onClick={() => addColumn(columnName)}>Создать доску</button>
              <button style={{ background: 'green' }} onClick={() => setEditMode(false)}>
                Закрыть
              </button>
            </div>
          </div>
        ) : (
          <div className={s.buttonBlock}>
            <button onClick={() => setEditMode(true)}>Добавить доску</button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Boards: state.Board.lists,
  };
};

export default compose(connect(mapStateToProps, { addColumn }))(Main);
