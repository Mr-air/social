import React from 'react';
import Logo from '../img/organization.svg'
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';



const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to="./profile">
               <img alt="" src={Logo}></img>
            </NavLink> 
            {props.isAuth ? props.login:<NavLink to="./login"></NavLink>}
        </header>
    );
}

export default Header