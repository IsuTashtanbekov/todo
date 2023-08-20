import cls from './Board.module.css'
import {ChangeTitle} from "./ChangeTitle";
import {Task, TaskBgColor} from "./Task";
import {Button} from "../../../shared/Button/Button";
import {AddTask} from "./AddTask";
import {useDispatch} from "react-redux";
import {addBoard, removeTodo, removeTodoAction} from "../model/slice/todosSlice";
import classNames from "classnames";


export const Board = (props) => {

    // const dispatch = useDispatch();


    const {
        tasks,
        title,
        boardId
    } = props;

    function onAddTaskHandler() {
    }



    return (
        <div
            draggable
            className={cls.Board}
        >
            <div className={classNames(cls.boardTitle, {}, [cls.title] )}>
                <ChangeTitle
                    title={title}
                    id={tasks.boardId}
                    changeTitle={props.updateListName}
                />
                <Button>Удалить</Button>
            </div>
            <ul className={cls.taskCard}>
                {
                    tasks?.map(task => {

                        const onRemoveTodo = () => {
                            // dispatch(removeTodoAction(boardId, task.id));
                            alert('hello')
                        }

                        return <Task
                            onRemoveHandler={onRemoveTodo}
                            title={task.title}
                            key={task.id}
                            id={task.id}
                            TaskColor={
                            task.completed
                                ? 'greenly'
                                : ''
                            }
                        />
                    })
                }
            </ul>
            <AddTask  addTaskHandler={onAddTaskHandler} />
        </div>
    )
}



