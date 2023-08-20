import cls from './Modal.module.css'
import classNames from "classnames";

export const Modal = (props) => {

    const {active, onSwitchMode, children} = props;


return (
    <div
        className={classNames(active ? cls.active : cls.Modal, {}, [])}
        onClick={onSwitchMode}
    >
        <div
            className={classNames(
                active
                    ? [cls.modalContent, cls.active ].join(' ')
                    : cls.modalContent)}
            onClick={(event) => event.stopPropagation()}
        >
            {children}
        </div>
    </div>
)
};

