import classNames from "classnames";
import cls from './Login.module.css'
import {ChangeEvent, FC, useCallback} from "react";
import {Input} from "../../../shared/Input/Input";
import {Button} from "../../../shared/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getLogin} from "../model/selectors/getLogin/getLogin";
import {setPassword, setUsername} from "../model/slice/LoginSlice";

interface LoginProps {
    className?: string;
};
export const Login: FC<LoginProps> = ({className}) => {

    const {username, password} = useSelector(getLogin);
    const dispatch = useDispatch();

    console.log(username, password);

    const onChangeUsername = useCallback((value: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUsername(value.currentTarget.value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(value.currentTarget.value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.Login, {}, [className])}>
            <Input
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                value={password}
                onChange={onChangePassword}
            />
            <Button>
                Войти
            </Button>
        </div>
    );
};