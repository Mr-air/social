import React, { Component } from 'react';

import {  getUsers, FollowUsers, UnFollowUsers }  from "../../redux/UsersPage-reducer";
import Users from './Users';
import Loader from '../Loader/loader';
import { getuserssSel, getPagesizeSel, getcountTotalSel, getPageactiveSel, getisFetchinusegSel, getisButtonClickSel } from '../../redux/selector';
const { connect } = require("react-redux");




class UsersAPI extends Component {
  
    componentDidMount () {
        this.props.getUsers(this.props.Pageactive,this.props.Pagesize)
    }

    onChangeActivepage = (p) => {
        this.props.getUsers(p,this.props.Pagesize)
    }

    FollowChange = (id) => {
        this.props.FollowUsers(id);
    }


    UNFollowChange = (id) => {
        this.props.UnFollowUsers(id);
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
      userss: getuserssSel(state),
      Pagesize: getPagesizeSel(state),
      countTotal: getcountTotalSel(state),
      Pageactive: getPageactiveSel(state),
      isFetching: getisFetchinusegSel(state),
      isButtonClick: getisButtonClickSel(state)
    }
}



let dispat = {
    getUsers,
    FollowUsers,
    UnFollowUsers
}


const Userscontainer = connect(mapTostateProps,dispat)(UsersAPI)
export default Userscontainer;