import React from 'react';
import s from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className={s.nav}>
        <ul  className={s.nav_ul}>
            <li><NavLink  activeClassName={s.activeLink} to='/profile'>Home</NavLink></li>
            <li><NavLink  activeClassName={s.activeLink} to='/Message'>Messages</NavLink></li>
            <li><NavLink  to='#'>Feed</NavLink></li>
        </ul>
        <ul className={s.nav_ul}>
            <li><NavLink  activeClassName={s.activeLink} to='/users'>Friends</NavLink></li>
        </ul>
        <ul  className={s.nav_ul}>
            <li><NavLink  to='#'>Setting</NavLink></li>
        </ul>
        </nav>
    );
}


export default Menu