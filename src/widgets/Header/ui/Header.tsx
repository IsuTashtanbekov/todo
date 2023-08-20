import cls from './Header.module.css';
import {useState} from "react";
import {Button} from "../../../shared/Button/Button";
import {useDispatch} from "react-redux";
import {addBoard} from "../../../entities/Board/model/slice/todosSlice";
import {Link} from "react-router-dom";
import {Dropdown} from "../../../shared/Dropdown/Dropdown";
import {AppLink} from "../../../shared/AppLink/AppLink";
import {useToggle} from "../../../shared/lib/useToggle";
import {Modal} from "../../../shared/Modal/Modal";
import {Login} from "../../../features/LoginByUsername/ui/Login";

export const Header = () => {


    const onCopyHandler = () => {
        navigator.clipboard.writeText('instagram.com');
        alert('Текст скопирован')
    }


    const { visible, onSwitchMode } = useToggle(false);



    return (
        <header className={cls.Header}>
            <Button>
                <AppLink to={'/'}>
                    Boards
                </AppLink>
            </Button>
            <Button onClick={onCopyHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10 1.25C5.16797 1.25 1.25 5.16797 1.25 10C1.25 14.832 5.16797 18.75 10 18.75C14.832 18.75 18.75 14.832 18.75 10C18.75 5.16797 14.832 1.25 10 1.25ZM10 17.2656C5.98828 17.2656 2.73438 14.0117 2.73438 10C2.73438 5.98828 5.98828 2.73438 10 2.73438C14.0117 2.73438 17.2656 5.98828 17.2656 10C17.2656 14.0117 14.0117 17.2656 10 17.2656Z"
                        fill="white"/>
                    <path
                        d="M9.0625 6.5625C9.0625 6.81114 9.16127 7.0496 9.33709 7.22541C9.5129 7.40123 9.75136 7.5 10 7.5C10.2486 7.5 10.4871 7.40123 10.6629 7.22541C10.8387 7.0496 10.9375 6.81114 10.9375 6.5625C10.9375 6.31386 10.8387 6.0754 10.6629 5.89959C10.4871 5.72377 10.2486 5.625 10 5.625C9.75136 5.625 9.5129 5.72377 9.33709 5.89959C9.16127 6.0754 9.0625 6.31386 9.0625 6.5625ZM10.4688 8.75H9.53125C9.44531 8.75 9.375 8.82031 9.375 8.90625V14.2188C9.375 14.3047 9.44531 14.375 9.53125 14.375H10.4688C10.5547 14.375 10.625 14.3047 10.625 14.2188V8.90625C10.625 8.82031 10.5547 8.75 10.4688 8.75Z"
                        fill="white"/>
                </svg>
            </Button>
            {/*<Modal*/}
            {/*    active={visible}*/}
            {/*    onSwitchMode={onSwitchMode}*/}
            {/*>*/}
            {/*    <Login/>*/}
            {/*</Modal>*/}
            <Dropdown
                items={[
                    {
                        content: 'Dropdown',
                        onClick: () => {
                            alert('Hello')
                        }
                    },
                    {
                        content: 'Войти',
                        onClick: () => {
                            onSwitchMode()
                        }
                    }
                ]}
                trigger={'Нажми на меня!'}
            />
        </header>
    )
}