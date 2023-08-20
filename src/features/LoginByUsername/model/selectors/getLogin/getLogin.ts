import {StateSchema} from "../../../../../entities/Board/model/slice/store";

export function getLogin(state: StateSchema) {
    return state.login;
}
