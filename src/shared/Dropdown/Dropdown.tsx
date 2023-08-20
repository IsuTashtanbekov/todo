import React, {useState, FC, PropsWithChildren, ReactNode, Fragment} from "react";
import {Menu} from "@headlessui/react";
import cls from './Dropdown.module.css'
import classNames from "classnames";


interface DropdownItems {
    content: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    href?: string;

}

interface DropdownProps {
    trigger?: ReactNode;
    items: DropdownItems[];

}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = (props) => {

    const {
        children,
        trigger,
        items,
    } = props;


    const [dropdownState, setDropdownState] = useState({open: false});

    const handleDropdownClick = () => setDropdownState({open: !dropdownState.open});


    const onCloseDropdownHandle = (event) => {
        setTimeout(handleDropdownClick, 100)
    };

    return (
        <Menu as='div' className={cls.Dropdown}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={cls.menu}>
                {
                    items?.map(item => {
                        return <Menu.Item as={Fragment}>
                            {({active}) => (
                                <button
                                    type={'button'}
                                    className={classNames(cls.item, {[cls.active]: active}, [])}
                                    disabled={item.disabled}
                                    onClick={item.onClick}
                                >
                                    {item.content}
                                </button>
                            )}
                        </Menu.Item>
                    })
                }
            </Menu.Items>
        </Menu>
    );
}