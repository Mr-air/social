import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SetUserData } from '../../redux/auth-reducer';
import { getisAuthSel, getiduserSel,getemailAuthmapSel,getloginAuthSel } from '../../redux/selector';



class HeaderAPI extends Component {
    
   
    render () {
        return (
         <Header {...this.props}/>
        )
    }
}


let mapTostateProps = (state) => {
  
    return {
     userid: getiduserSel(state),
     email: getemailAuthmapSel(state),
     login: getloginAuthSel(state),
     isAuth: getisAuthSel(state)
    }
}


let dispat =  {
    SetUserData
}

const WithRouterHeader = withRouter(HeaderAPI)
const HeaderContainer=connect(mapTostateProps,dispat)(WithRouterHeader);
export default HeaderContainer