import React from 'react';

import s from './App.module.css';

import Menu from '../Menu/Menu';
import Content from '../Content/Content';

import { Route } from 'react-router-dom';
import MessageContainer from '../Message/MessageContainer';
import Userscontainer from '../Users/Userscontainer';
import HeaderContainer from '../Header/HeaderContainer';



function App(props) {
  
  return (
    
    <div className={s.App_wrapper}>
    <HeaderContainer/>
    <Menu/>
    
    <main className={s.main}>
     <Route path="/profile/:userid?" render={()=><Content store={props.store}/>} />
    <Route path="/message" render={()=> <MessageContainer store={props.store} />}/>
     <Route path="/users" render={()=> <Userscontainer store={props.store} />}/>
    </main>
    </div>
  );
}



export default App;
