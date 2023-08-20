import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit';
import {LoginSchema} from "../types/LoginSchema";




const initialState: LoginSchema = {
    password: '',
    username:'',
    isLoading: false,
};


export const LoginSlice = createSlice({
        name: 'todos',
        initialState,
        reducers: {
            setUsername: (state, action: PayloadAction<string>) => {
                state.username = action.payload;
            },
            setPassword: (state, action: PayloadAction<string>) => {
                state.password = action.payload;
            },

        },
    }
)

export const { setUsername, setPassword } = LoginSlice.actions;

export default LoginSlice.reducer