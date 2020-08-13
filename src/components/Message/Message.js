import React from 'react';
import s from './Message.module.css';
import MessageItem from './MessageItem/MessageItem';
import DialogItem from './Dialogitem/DialogItem';






const Message = (props) => {


console.log(props)
   
    let onChangeText = (e) => {
        props.onChangeMessage(e.target.value);
    }

    let dialogsmaps =props.DialogDAta.map( diialog => <DialogItem id={diialog.id} name={diialog.name} key={diialog.id}/> );
    let messagemaps =props.messageDAta.map( diialog => <MessageItem id={diialog.id} message={diialog.message} key={diialog.id} /> );
      

    return (
        
    <div className={s.Dialog_Wrapper}>
        <div className={s.Dialogs}>
            {dialogsmaps}
        </div>
        <div className={s.Messages}>
        <div>{messagemaps}</div>
        <input type="text"  onChange={onChangeText} value={props.value}></input>
        <button onClick={props.addMessage}>Send</button>
        </div>
    </div>
    );
}




export default Message