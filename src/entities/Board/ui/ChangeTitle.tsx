import {ChangeEvent, useState} from "react";
import cls from './ChangeTitle.module.css'

export const ChangeTitle = (props) => {

    const {
        title,
        changeTitle,
        id
    } = props;

    const [changeMode, setChangeMode] = useState<boolean>(false);

    const changeTitleTask = (event: ChangeEvent<HTMLInputElement>) => {
        changeTitle(event.currentTarget.value, id);
    }

    const onSwitchMode = () => {
        setChangeMode(prevState => !prevState)
    }

    return (
        <div className={cls.ChangeTitle}>
            {
                changeMode
                    ? <input
                        type="text"
                        value={title}
                        autoFocus
                        onChange={changeTitleTask}
                        onBlur={onSwitchMode}
                    />
                    : <span
                        className={cls.title}
                        onClick={onSwitchMode}
                    >
                        {title}
                      </span>

            }
        </div>
    );
};
