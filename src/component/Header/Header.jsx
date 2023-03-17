import React from 'react'
import s from './Header.module.css'
import { MainHeader } from './MainHeader/MainHeader'

const Header = () => {
  return (
    <div className={s.main}>
        <MainHeader/>
    </div>
  )
}

export default Header;