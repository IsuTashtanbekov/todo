import cls from './AddTask.module.css'
import {ChangeEvent, FC, KeyboardEventHandler, useState} from "react";
import {Button} from '../../../shared/Button/Button'
import {useDispatch} from "react-redux";
import {Input} from "../../../shared/Input/Input";

interface AddTaskProps {
    className?: string;
    value?: boolean,
    onChangeTaskTitle?: () => void;
    addTaskHandler?: () => void;

};
export const AddTask: FC<AddTaskProps> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(true);
    const [title, setTitle] = useState('Заголовок');

    const onAddTaskHandler = (event: any) => {
        if (event.key == 'Enter') {
            props.addTaskHandler()
        }
    }

    const {} = props;

    function onSwitchEditMode() {
        setEditMode(prev => !prev)
    }


    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.currentTarget.value);
    }

    return (
        <div className={cls.AddTask}>
            {
                editMode
                    ?
                    <Button
                        onClick={onSwitchEditMode}
                    >
                        Добавить карточку +
                    </Button>
                    :
                    <>
                        <Input
                            type="text"
                            value={title}
                            onChange={onChangeTitle}
                            onBlur={onSwitchEditMode}
                            autoFocus
                            onKeyPress={onAddTaskHandler}
                        />
                    </>
            }
        </div>
    );
};
