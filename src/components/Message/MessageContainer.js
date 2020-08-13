//import React from 'react';


import {addMessage, onChangeMessage } from '../../redux/MessagePage-reducer';
import Message from './Message';
import { connect } from 'react-redux';
import { RedirectHOC } from '../HOC/hoc';
import { compose } from 'redux';
import { getDialogDAtaSel, getmessageDAtaSel, getvalueSel, getisAuthSel } from '../../redux/selector';


  
let mapTostateProps = (state) => {
  
    return {
        DialogDAta: getDialogDAtaSel(state) ,
        messageDAta: getmessageDAtaSel(state) ,
        value: getvalueSel(state),
        isAuth: getisAuthSel(state)
    }
}



const dispat = {
    addMessage,
    onChangeMessage
}


const MessageContainer = compose(
    RedirectHOC,
    connect(mapTostateProps,dispat),
    
)(Message)

export default MessageContainer