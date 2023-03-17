import React from 'react'
import s from './Article.module.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Modal from '../../UI/Modal/Modal'
import { v1 } from 'uuid'
import { deleteTasks } from '../../../Data/newCardReducer'
import { updateTaskName } from '../../../Data/newCardReducer'
import {MdOutlineDeleteSweep} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import { updateListName } from '../../../Data/newCardReducer'
import { addTask } from '../../../Data/newCardReducer'




const Article = (props) => {
    const [editCardMode, setEditCardMode] = React.useState(true)
    const [editMode, setEditMode] = React.useState(true)
    const [activeTitle, setActiveTitle] = React.useState(false)
    const [modalActive, setModalActive] = React.useState(false)
    const [description, setDescription] = React.useState()
    const [tasksTitle, setTasksTitle] = React.useState('')
    const [editCard, setEditCard] = React.useState(true)


    const onSwitchMode = () => {
        if(editMode === true) {
            setEditMode(false)
        } else if (editMode === false) {
            setEditMode(true)
        }
    }
    const newTask = {
        id: v1(),
        name:  tasksTitle,
        description: description,
        dueDate: Date.now(),
        priority: 'high',
        comments: [],
      };

  return (
    <>
    <div 
    className={s.article}
    draggable={true}>
        <div 
        className={s.cardTitle}>
                {activeTitle? 
                <input
                type='text'
                value={props.title}
                onChange={(event) => props.updateListName(props.list.id, event.currentTarget.value)}
                onDoubleClick={ () => setActiveTitle(false)}
                className={s.input}/>
                :<span
                onChange={(event) => props.updateTaskName(event.currentTarget.value)}
                onClick={() => setActiveTitle(true)}
                onBlur={() => setActiveTitle(true)}>
                    {props.title}
                </span>
                }
        </div>
        <ul className={s.taskCard}> 
            {props.tasks.map( cards => {
                return <li 
                key={cards.id} 
                className={s.cards}
                draggable={true}>
                    {editCard? 
                    <span
                    onClick={() => setEditCard(false)}>
                        {cards.name}
                    </span>
                    :<input 
                        autoFocus={true}
                        onClick={() => setEditCard(true)}
                        className={s.input}
                        type='text'
                        value={cards.name}
                        onChange={(event) => props.updateTaskName(props.list.id, cards.id, event.currentTarget.value)}/>}
                <button 
                className={s.trelloBtn}
                style={{padding:'5px'}}
                onClick={() => props.deleteTasks(props.list.id, cards.id)}><MdOutlineDeleteSweep/></button>
                <Modal
                active={modalActive} 
                setActive={setModalActive}>
                        <div className={s.modal} 
                        key={cards.id}>
                            <div>

                            </div>
                            <h3>{cards.name}</h3>
                            <div>
                            <div>
                                Desdcription: {cards.description}
                            </div>
                            <div>Date:{cards.dueData}</div>
                            </div>
                        </div>
                </Modal>
                <button 
                onClick={() => setModalActive(true)}
                style={{background:"#aaa",margin:'2px'}}
                className={s.trelloBtn}>Открыть карточку</button>
                </li>
            })}
        </ul>
        <div className={s.addBtn}>
            {editMode?
            <button 
             className={s.trelloBtn}
             onClick={() => setEditMode(false)}>
             Добавить карточку<AiOutlinePlus/></button>
             : 
             <div 
             className={s.addBlock}>
            <input
            className={s.input}
            type='text'
            value={tasksTitle}
            onChange={(event) => setTasksTitle(event.currentTarget.value)}
            />    
             <button 
             onClick={() => props.addTask(props.tasks.id, props.list.id, newTask)}
             className={s.trelloBtn}>
             Добавить карточкy<AiOutlinePlus/>
             </button>
             <button
             className={s.trelloBtn}
             onClick={() => onSwitchMode()}>
                Закрыть
             </button>
         </div>}  
        </div> 
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        Boards: state.Board.lists
    }
}

export default compose(
    connect(mapStateToProps, {
        addTask,
        deleteTasks,
        updateTaskName,
        updateListName})
)(Article)



