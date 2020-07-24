import React from 'react';
//import LogoUsers from '../../img/user.svg';
import s from './Profile.module.css';
import Loader from '../../Loader/loader';


const Profile = (props) => {
  
    if(!props.profile){
       return <Loader/>
    } 
    return (
            <section className={s.profile_wrapper}>
                <img alt="" src={props.profile.photos.large} width="32px" height="32px"></img>
                <div>
                <h4>{props.profile.fullName}</h4>
                <p>{props.profile.lookingForAJobDescription}</p> 
                </div>
            </section>         
    );
}

export default Profile