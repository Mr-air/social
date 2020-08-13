import { SocialApi } from "../components/API/api";

const set_user_data = "set_user_data";
//const Onchangeactiontype = "OnchangeText";




export const SetUserDataAC = (userid,login,email,isAuth) => ({
    type: set_user_data,
    data: { 
      userid,
      login,
      email,
      isAuth
      }
  }) 

//   export const SetUsersProfile = (profileid) => ({
//     type: setusersprofile,
//     profile: profileid,
//   })


  const initian = {
         userid: null,
         login: null,
         email: null,
         isAuth: false,
  }

  const Authreducer = (state=initian,action) => {
      switch(action.type) {
    case set_user_data: 
          return {
            
            ...state,
           ...action.data,
          }
         
      default: return state;
    }
  }
 

  export const SetUserData = () =>async(dispatch) => {
      SocialApi.getMeProfile().then(data => {
        if(data.resultCode===0) {
            let {id,login,email}=data.data
             dispatch(SetUserDataAC(id,login,email,true))
             return null; }
     })       
    }
  

  export const LoginIN = (email,password,rememberMe) => async(dispatch) => {
      SocialApi.Login(email,password,rememberMe).then(data => {
        if(data.resultCode===0) {
           dispatch(SetUserData())
           return null; }
      })
    }

    export const LoginOUT = () => async(dispatch) => {
      SocialApi.OutLogin().then(data => {
        if(data.resultCode===0) {
           dispatch(SetUserDataAC(null,null,null,false))
           return null; }
      })
    }
  

  export default Authreducer;