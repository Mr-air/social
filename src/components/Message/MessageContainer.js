//import React from 'react';


import { AddMessageCreatAction, OnChangeMessageTextAction } from '../../redux/MessagePage-reducer';
import Message from './Message';
import { connect } from 'react-redux';


  
let mapTostateProps = (state) => {
  
    return {
        DialogDAta: state.messagepagereducer.DialogDAta ,
        messageDAta: state.messagepagereducer.messageDAta ,
        value: state.messagepagereducer.MesssageText
    }
}

let mapTodispatchProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(AddMessageCreatAction())},
        onChangeText: (e) => { dispatch(OnChangeMessageTextAction(e))}
    }
}


const MessageContainer = connect(mapTostateProps,mapTodispatchProps)(Message);

export default MessageContainer