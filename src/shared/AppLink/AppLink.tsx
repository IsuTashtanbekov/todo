import classNames from "classnames";
import cls from './AppLink.module.css'
import {FC, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

interface AppLinkProps {
    className?: string;
    to: string;
};
export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {

    const {className, to, children} = props;

    return (
        <NavLink
            className={classNames(cls.AppLink, {}, [className])}
            to={to}
        >
            {children}
        </NavLink>
    );
};

