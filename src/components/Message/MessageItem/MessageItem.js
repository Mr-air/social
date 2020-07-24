import React from 'react';
import s from './../Message.module.css'; 

const MessageItem = (props) => {
    return (
        <div className={s.Message}>
        {props.message}
      </div>
    )
}

export default MessageItem