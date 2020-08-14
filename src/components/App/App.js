import React, { Component } from 'react';

import s from './App.module.css';

import Menu from '../Menu/Menu';
import Content from '../Content/Content';

import { Route, withRouter } from 'react-router-dom';
import MessageContainer from '../Message/MessageContainer';
import Userscontainer from '../Users/Userscontainer';
import HeaderContainer from '../Header/HeaderContainer';
import Login from '../Login/login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {  InitianSuccses } from '../../redux/app-reducer';
import Loader from '../Loader/loader';
import { SetUserData } from '../../redux/auth-reducer';
import { getiduserSel } from '../../redux/selector';



class App extends Component { 
  componentDidMount() {
   this.props.InitianSuccses();
  }
  render() {

    if(this.props.iduser===null) return <Loader/>
    return ( 
      <div className={s.App_wrapper}>
      <HeaderContainer/>
      <Menu/>
      
      <main className={s.main}>
        
       <Route path="/profile/:userid?" render={()=><Content store={this.props.store} iduser={this.props.iduser}/>} />
       <Route path="/message" render={()=> <MessageContainer store={this.props.store} />}/>
       <Route path="/users" render={()=> <Userscontainer store={this.props.store} />}/>
       <Route path="/login" render={()=> <Login store={this.props.store} />}/>
      </main>
      </div>
    );
  }
}



let mapTostateProps = (state) => {
    
  return {
    innitian: state.Appreduscer.innitian,
    iduser: getiduserSel(state),
  }
}


export default compose(connect(mapTostateProps,{InitianSuccses,SetUserData}),withRouter)(App);
