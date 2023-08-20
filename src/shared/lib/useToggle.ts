import {useCallback, useState} from "react";

export function useToggle(initialState = false, ) {
    const [visible, setVisible] = useState<boolean>(initialState);

    const onSwitchMode = useCallback(() => {
        setVisible(prevState => !prevState);
    }, [visible])

    return {visible, onSwitchMode}

}