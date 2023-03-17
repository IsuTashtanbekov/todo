import React from 'react'
import s from './MyButton.module.css'

export const MyButton = (props) => {
  return (
    <button onClick={props.onHandleClick? props.onHandleClick : null} style={{backgroundColor:props.background}}>
        {props.title? 
        <span>{props.title}</span>
        :null}
        {props.url} 
        {props.children}
    </button>
  )
}
