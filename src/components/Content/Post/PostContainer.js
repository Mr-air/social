//import React from 'react';
//import s from './Post.module.css';

import { AddPost, OnChangeText } from '../../../redux/ContentPage-reducer';
import Post from './Post';
import { connect } from 'react-redux';
import { getPostmapSel, getvaluePostSel } from '../../../redux/selector';



let mapTostateProps = (state) => {
  
    return {
        Postmap: getPostmapSel(state),
        value: getvaluePostSel(state)
    }
}

let mapTodispatchProps =  {
    
        AddPost,
        OnChangeText
   
}



const PostContainer = connect(mapTostateProps,mapTodispatchProps)(Post)

export default PostContainer