import cls from './EditableText.module.css'
export const EditableText = (props) => {

    const {editMode, setEditMode, title, setTitle} = props;

    const onSwitchEditMode = () => {
        setEditMode(prev => !prev);
    }

    return (
        <aside className={cls.EditableText}>
            {
                editMode
                    ? <span onClick={onSwitchEditMode}>{title}</span>
                    : <input
                        type='text'
                        autoFocus
                        onBlur={onSwitchEditMode}
                        onChange={setTitle}
                    />
            }
        </aside>
    )
}