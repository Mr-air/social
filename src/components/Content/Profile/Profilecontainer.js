import React, { PureComponent } from 'react';
import Profile from './Profile';
import { SetUsersProfile, SetUsersStatus, UpdateUsersStatus } from '../../../redux/ContentPage-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getProfileSel, getisFetchingSel, getstatusSel } from '../../../redux/selector';





class ProfileAPI extends PureComponent {

    componentDidMount () {
       let userid=this.props.match.params.userid
       if(!userid) { userid=this.props.iduser}
       this.props.SetUsersProfile(userid)
       this.props.SetUsersStatus(userid)
    }

  

   


    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.UpdateUsersStatus} />
        )
    }
}


let mapTostateProps = (state) => {
    
    return {
    profile: getProfileSel(state),
    
    isFetching: getisFetchingSel(state),
    status: getstatusSel(state)
    }
}



let dispat ={
    SetUsersProfile,
    SetUsersStatus,
    UpdateUsersStatus
}





const Profilecontainer = compose(
    connect(mapTostateProps,dispat),
    withRouter)
    (ProfileAPI)
export default Profilecontainer;