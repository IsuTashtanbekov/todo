import {combineReducers, configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import todosReducer from './todosSlice'
import {LoginSchema} from "../../../../features/LoginByUsername/model/types/LoginSchema";
import loginReducer from "../../../../features/LoginByUsername/model/slice/LoginSlice";
import {TodosSchema} from "../types/todosSliceShema";


export interface StateSchema {
    todos?: TodosSchema;
    login?: LoginSchema;
}

const rootReducers = combineReducers<ReducersMapObject>({
    todos: todosReducer,
    login: loginReducer,
});

export const store = configureStore<StateSchema>({
// @ts-ignore

    reducer: rootReducers,
})


