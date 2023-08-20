import cls from './Button.module.css'

export const Button = (props) => {

    const {onClick, children, ...otherProps} = props;

    return <button
        onClick={onClick}
        className={cls.Button}
        {...otherProps}
    >
        {children}
    </button>
};

