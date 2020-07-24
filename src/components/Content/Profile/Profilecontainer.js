import React, { Component } from 'react';
import Profile from './Profile';
import { SetUsersProfile } from '../../../redux/ContentPage-reducer';
import Axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LoaderPage } from '../../../redux/UsersPage-reducer';




class ProfileAPI extends Component {

    componentDidMount () {
        
       let userid=this.props.match.params.userid
       if(!userid) { userid=9478}


        Axios.get(`https://social-network.samuraijs.com/api/1.0///profile/`+userid).then(Response => {
        this.props.LoaderPage(false)
        this.props.SetUsersProfile(Response.data);
         }
      
        )
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapTostateProps = (state) => {
    
    return {
    profile: state.contentpagereducer.profile,
    iduser: state.Authreducer.userid,
    isFetching: state.userspagereducer.isFetching
    }
}



let dispat ={
    SetUsersProfile,
    LoaderPage
}

const WithRouterContainer = withRouter(ProfileAPI);

const Profilecontainer = connect(mapTostateProps,dispat)(WithRouterContainer)
export default Profilecontainer;