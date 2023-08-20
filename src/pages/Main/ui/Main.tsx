import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Board} from "../../../entities/Board/ui/Board";

import s from './Main.module.css';
import {AddTask} from "../../../entities/Board/ui/AddTask";
import {Input} from "../../../shared/Input/Input";
import {addBoard} from "../../../entities/Board/model/slice/todosSlice";
import {Login} from "../../../features/LoginByUsername/ui/Login";
import {getLogin} from "../../../features/LoginByUsername/model/selectors/getLogin/getLogin";

export const Main = () => {

    const dispatch = useDispatch()
    // @ts-ignore
    const todos = useSelector(state => state.todos);



    const [columnName, setColumnName] = useState('');
    const [editMode, setEditMode] = useState(false);

    const onHandleSwitchMode = () => {
        setEditMode(prevState => !prevState);
    }

    const onSetColumnNameHandle = (event) => {
        setColumnName(event.currentTarget.value);
    }

    function onAddBoardHandler() {
        dispatch(addBoard({name: "New Board"}));
    }

    return (
        <div className={s.main}>
            {
                Object.entries(todos.boards)
                    .map(([boardId, board]) => (
                        <Board
                            // @ts-ignore
                            key={board.boardId}
                            // @ts-ignore
                            boardId={board.boardId}
                            // @ts-ignore
                            tasks={board.tasks}
                            // @ts-ignore
                            title={board.name}
                        />
                    ))
            }
            <AddTask addTaskHandler={onAddBoardHandler}/>
            <Login/>
        </div>
    );
};



