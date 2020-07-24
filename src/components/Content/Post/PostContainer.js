//import React from 'react';
//import s from './Post.module.css';

import { AddPostCreatAction, OnChangeTextAction } from '../../../redux/ContentPage-reducer';
import Post from './Post';
import { connect } from 'react-redux';



let mapTostateProps = (state) => {
  
    return {
        Postmap: state.contentpagereducer.Post ,
        value: state.contentpagereducer.ChangeText
    }
}

let mapTodispatchProps = (dispatch) => {
    return {
        addPost: () => { dispatch(AddPostCreatAction())},
        onChangeText: (e) => { dispatch(OnChangeTextAction(e))}
    }
}



const PostContainer = connect(mapTostateProps,mapTodispatchProps)(Post)

export default PostContainer