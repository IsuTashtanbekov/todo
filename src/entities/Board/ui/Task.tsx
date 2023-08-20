import cls from './Task.module.css'
import classNames from "classnames";
import {ChangeTitle} from "./ChangeTitle";
import {Button} from "../../../shared/Button/Button";

export type TaskBgColor = 'greenly' | ''


interface TaskProps {
    TaskColor?: TaskBgColor,
    title: string;
    id: number;
    onRemoveHandler: () => void;
}


export const Task = (props: TaskProps) => {

    const {
        // id,
        title,
        TaskColor,
        id,
        onRemoveHandler
    } = props;


    return (
        <li
            draggable
            className={classNames(cls.Task, TaskColor)}
        >
            <ChangeTitle
                title={title}
                id={2}
                changeTitle={() => alert}
            />
            <Button onClick={onRemoveHandler}>
                Delete
            </Button>
        </li>
    );
};
