import React from 'react';
//import LogoUsers from '../img/user.svg'
//import s from './Content.module.css';
//import Profile from './Profile/Profile';

import PostContainer from './Post/PostContainer';
import Profilecontainer from './Profile/Profilecontainer';

const Content = (props) => {

    
  
    return (
            <div>
            <img alt="" className="main-img" width="100%" height="200px" src="https://pharmvestnik.ru/apps/fv/assets/files/content/news/678/67807/front.jpg"></img>
            <Profilecontainer/>
            <PostContainer/>
            </div>
         
      
    );
}

export default Content