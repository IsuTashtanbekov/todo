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
import {GrClose} from 'react-icons/gr'




const Article = (props) => {
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

    const onHandleSwitchMode = (argument, setArgument) => {
        if(argument === true) {
            setArgument(false) 
        } else if (argument === false) {
            setArgument(true)
        }
    }

    const onUpdateListHandle = (event) => {
        props.updateListName(props.list.id, event.currentTarget.value)
    }

    const onSetTaskTitleHandler = event => {
        setTasksTitle(event.currentTarget.value)
    }

    const onKeyUpHandler = event => {
        if(event.charCode === 13 ){
            props.addTask(props.tasks.id, props.list.id, newTask)
            onHandleSwitchMode(editMode, setEditMode)
        }
    }

    const onAddTaskHandler = () => { 
        props.addTask(props.tasks.id, props.list.id, newTask)
        onHandleSwitchMode(editMode, setEditMode)
        setTasksTitle('')}
        

    const newTask = {
        id: v1(),
        name:  tasksTitle,
        description: description,
        dueDate: Date.now(),
        priority: 'high',
        comments: [],
      };

  return (
    <div className={s.article} draggable={true}>
        <div className={s.cardTitle}>
                {activeTitle? 
                (<input
                type='text'
                value={props.title}
                onChange={onUpdateListHandle}
                onDoubleClick={ () => onHandleSwitchMode(activeTitle, setActiveTitle)}
                className={s.input}/>
                ):(
                <span onClick={() => onHandleSwitchMode(activeTitle, setActiveTitle)}>
                    {props.title}
                </span>)}
        </div>
        <ul className={s.taskCard}> 
            {props.tasks.map( cards => {
                const onUpdateTaskName = event => props.updateTaskName(props.list.id, cards.id, event.currentTarget.value)

                const onDeleteTaskHandle = event => props.deleteTasks(props.list.id, cards.id)

                return <li 
                key={cards.id} 
                className={s.cards}
                draggable={true}>
                    {editCard? 
                    (<span
                    onClick={() => onHandleSwitchMode(editCard, setEditCard)}>
                        {cards.name}
                    </span>
                    ):(
                    <input 
                        autoFocus={true}
                        onClick={() => onHandleSwitchMode(editCard, setEditCard)}
                        className={s.input}
                        type='text'
                        value={cards.name}
                        onChange={onUpdateTaskName}/>)}
                    <button 
                    className={s.trelloBtn}
                    onClick={onDeleteTaskHandle}><MdOutlineDeleteSweep/></button>
                    <Modal
                    active={modalActive} 
                    setActive={setModalActive}>
                        <div className={s.modal} 
                        key={cards.id}>
                            <h3>{cards.name}</h3>
                            <div>
                            <div>
                                {`Description ${newTask.description}`}
                            </div>
                            <div>Date:{cards.dueData}</div>
                            </div>
                        </div>
                </Modal>
                <button 
                onClick={() => onHandleSwitchMode(modalActive, setModalActive)}
                style={{background:"#aaa",margin:'2px'}}
                className={s.trelloBtn}>Открыть карточку</button>
                </li>
            })}
        </ul>
        <div className={s.addBtn}>
            {editMode?
            (<button 
             className={s.trelloBtn}
             onClick={() => onHandleSwitchMode(editMode, setEditMode)}>
             Добавить карточку<AiOutlinePlus/></button>
             ) : (
            <div className={s.addBlock}>
            <input
            className={s.input}
            type='text'
            value={tasksTitle}
            onChange={onSetTaskTitleHandler}
            onKeyPress={onKeyUpHandler}/>    
             <button 
             onClick={onAddTaskHandler}
             className={s.trelloBtn}>Добавить карточкy<AiOutlinePlus/>
             </button>
             <button 
             className={s.closeBtn}
             onClick={() => onHandleSwitchMode(editMode, setEditMode)}>
             <GrClose/>
             </button>
         </div>)}  
        </div> 
    </div>
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



