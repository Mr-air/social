import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getisAuthSel } from '../../redux/selector'





export const RedirectHOC = (Componentt) => {
    let Mapstateprops =(state) => {
          return {
            isAuth: getisAuthSel(state)
          }
    } 
    class hocComponent extends Component  {
        render() {
          console.log(this.props.isAuth)
            if(!this.props.isAuth) return <Redirect to="/login" />
            return  <Componentt {...this.props} />
    }}



    return connect(Mapstateprops)(hocComponent)
}