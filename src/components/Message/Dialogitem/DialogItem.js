import React from 'react';
import s from "./../Message.module.css"
import { NavLink } from 'react-router-dom';
const DialogItem = (props) => {
    return (
                 <div className={s.Dialog}>
                <NavLink activeClassName={s.activeLink} to={`/message/${props.id}`} >{props.name}</NavLink>
                </div>
    )
}

export default DialogItem
