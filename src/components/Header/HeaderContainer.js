import React, { Component } from 'react';
import Header from './Header';
//import Axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SetUserData } from '../../redux/auth-reducer';
import { SocialApi } from '../API/api';


class HeaderAPI extends Component {
    
    componentDidMount() {
    
        SocialApi.getMeProfile().then(data => {
           if(data.resultCode===0) {
               let {id,login,email}=data.data
                this.props.SetUserData(id,login,email)
                return null;
            }
            this.props.SetUserData(1079,'free','fly@mail.ru')
        })
               
    }
    render () {
        return (
         <Header {...this.props}/>
        )
    }
}


let mapTostateProps = (state) => {
  
    return {
     userid: state.Authreducer.userid,
     email: state.Authreducer.email,
     login: state.Authreducer.login,
     isAuth: state.Authreducer.isAuth
    }
}




let dispat =  {
    SetUserData
}

const WithRouterHeader = withRouter(HeaderAPI)
const HeaderContainer=connect(mapTostateProps,dispat)(WithRouterHeader);
export default HeaderContainer