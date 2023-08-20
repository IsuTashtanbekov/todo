import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {TodosSchema} from "../types/todosSliceShema";

type Board = {
    name: string;
    boardId: number;
    tasks: TodosSchema[];
};

const REMOVE_TODO = 'todo/removeTodo'

export function removeTodoAction(boardId: number, taskId: number ) {
    return {
        type: REMOVE_TODO,
        payload: {
            boardId,
            taskId
        },
    }
}


export interface BoardType {
    boards: Record<string, Board>;
}

const initialState: BoardType = {
    boards: {
        board1: {
            name: "Board 1",
            boardId: 1,
            tasks: [
                {
                    userId: 1,
                    id: 1,
                    title: "Task 1",
                    completed: true,
                },
            ],
        },
        board2: {
            name: "Board 2",
            boardId: 2,
            tasks: [
                {
                    userId: 1,
                    id: 2,
                    title: "Task 2",
                    completed: false,
                },
            ],
        },
    },
};


export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addBoard: (state, action) => {
            const newBoardId = `board${Object.keys(state.boards).length + 1}`;
            state.boards[newBoardId] = {
                name: action.payload.name,
                boardId: Object.keys(state.boards).length + 1,
                tasks: [],
            };
        },
        removeTodo: (state, action) => {
            const {boardId, taskId} = action.payload;
            const board = state.boards[boardId];
            if (board) {
                board.tasks = board.tasks.filter(task => task.id !== taskId);
            }
        },
        removeBoard: (state, action) => {
            const {boardId} = action.payload;
            const board = state.boards[boardId];
            if (board) {
                // board = board.filter(board => boardId !== boardId)
            }
        },
    },
})

export const {addBoard, removeTodo} = todosSlice.actions;

export default todosSlice.reducer