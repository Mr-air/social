import React, { Component } from 'react';

import { UnFollow, Follow, SetUsers, CountUsers, ActivePage, LoaderPage, ButtonClickUsers }  from "../../redux/UsersPage-reducer";
import Users from './Users';
import Loader from '../Loader/loader';
import { SocialApi } from '../API/api';

const { connect } = require("react-redux");




class UsersAPI extends Component {
    
  
    componentDidMount () {
        
        this.props.LoaderPage(true)
        this.props.ActivePage()
        SocialApi.getUsers(this.props.Pageactive,this.props.Pagesize).then(data => {
        this.props.LoaderPage(false)
        this.props.SetUsers(data.items);
        this.props.CountUsers(data.totalCount); })
        console.log(this.props.userss)
    }

    onChangeActivepage = () => {
        
        this.props.LoaderPage(true)
        this.props.ActivePage()
        SocialApi.getUsers(this.props.Pageactive,this.props.Pagesize).then(data => {
        this.props.LoaderPage(false)
        this.props.SetUsers(data.items);
        })
    }

    FollowChange = (id) => {
        this.props.ButtonClickUsers(true,id)
        SocialApi.UsersUNfollow(id).then(data =>       {
            if(data.resultCode===0) {
              this.props.UnFollow(id)}
              this.props.ButtonClickUsers(false,id)
           }
              
              )
    }


    UNFollowChange = (id) => {
        this.props.ButtonClickUsers(true,id)
        SocialApi.Usersfollow(id).then(data =>       {
            if(data.resultCode===0) {
              this.props.Follow(id) }

              this.props.ButtonClickUsers(false,id)
           }
              
              )
    }

    render() {
        return ( 
            <>
            {this.props.isFetching ? <Loader/> : null}
            <Users disabledbutton={this.props.isButtonClick} countTotal={this.props.countTotal} Pagesize={this.props.Pagesize} Pageactive={this.props.Pageactive}  userss={this.props.userss} onChangeActivepage={this.onChangeActivepage} FollowChange={this.FollowChange} UNFollowChange={this.UNFollowChange}/>
             </>
        )
    }
}


let mapTostateProps = (state) => {
  
    return {
      userss: state.userspagereducer.users,
      Pagesize: state.userspagereducer.PageSize,
      countTotal: state.userspagereducer.countTotal,
      Pageactive: state.userspagereducer.Pageactive,
      isFetching: state.userspagereducer.isFetching,
      isButtonClick: state.userspagereducer.isButtonClick
    }
}




let dispat = {
    Follow,
    UnFollow,
    SetUsers,
    ActivePage,
    CountUsers,
    LoaderPage,
    ButtonClickUsers,
}


const Userscontainer = connect(mapTostateProps,dispat)(UsersAPI)
export default Userscontainer;