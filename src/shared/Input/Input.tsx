import cls from './Input.module.css'

export const Input = (props) => {

    const {
        value,
        onChange,
        ...otherProps
    } = props;

    return <input
        className={cls.Input}
        value={value}
        onChange={onChange}
        {...otherProps}
    />

};
