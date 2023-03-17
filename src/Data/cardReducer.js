import { v1 } from "uuid"

const SET_BACKGROUND = "SET_BACKGROUND"
const ADD_CART = "ADD_CART"
const CHANGE_TITLE = "CHANGE_TITLE"
const ADD_COLUMN_CARD = "ADD_COLUMN_CARD"
const REMOVE_TASK = "REMOVE_TASK"
const ADD_COLUMN = "ADD_COLUMN"

const defaultState = {
    authDatum: {
        resultCode:0
    },
    cardTest: [
        {id:v1(), title:'Первая колонка', card:[{id:v1(), title:'Карточка1', isDone:true}]},
        {id:v1(), title:'Вторая Колонка', card:[{id:v1(), title:'Карточки1', isDone:true}]},
        {id:v1(), title:'Третья колонка', card:[{id:v1(), title:'Карточки2', isDone:true}]},
        {id:v1(), title:'Четвертая колонка', card:[{id:v1(), title:'Карточки4',isDone:false}]},
        {id:v1(), title:'Пятая колонка', card:[{id:v1(), title:'Карточки5', isDone:true}]},
    ],
    boards: [{
    cards1: [{id:v1(), title:"Колонки", tasks: [{id:v1(), title:'Run', isDone:false}]}],
    cards2: [{id:v1(), title:"Колонки", tasks: [{id:v1(), title:'Run', isDone:false}]}],
    cards3: [{id:v1(), title:"Колонки", tasks: [{id:v1(), title:'Run', isDone:false}]}],
    cards4: [{id:v1(), title:"Колонки", tasks: [{id:v1(), title:'Run', isDone:false}]}],}],
    boards: {
        card1:[{}],
        card2:[{}], 
        card3:[{}], 
        card4:[{}],
    }
}

export const cardReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_BACKGROUND : {
            return {
                ...state, background: action.payload
            }
        }
        case ADD_COLUMN : {
            return {
                ...state, cardTest :[...state.cardTest, {id:v1(), title: action.title, card:[{id:v1(), title: '',}]} ]
            }
        }
        case CHANGE_TITLE : {
            return {
                ...state, cardTitle: action.payload
            }
        }
        case ADD_COLUMN_CARD : {
            return {
                ...state, cardColumn : [...state.cardColumn, action.card] 
            }
        }
        case REMOVE_TASK : {
            return {
                ...state, cardTest: [...state.cardTest.card.filter( task => {
                    return task.id !== action.id;
                })]
            }
        }
        default:
            return state 
    }
}

export const addCartAction = (text, isCheck) => ({type:ADD_CART, text, isCheck})
export const filterItemsAction = (id) => ({type:REMOVE_TASK, id})
export const addColumnAction = (card) => ({type:ADD_COLUMN_CARD})
export const changeTitleAction = (payload) => ({type:CHANGE_TITLE, payload})
export const addColumn = (title) => ({type:ADD_COLUMN, title})