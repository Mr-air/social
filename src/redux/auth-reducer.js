const set_user_data = "set_user_data";
//const Onchangeactiontype = "OnchangeText";




export const SetUserData = (userid,login,email) => ({
    type: set_user_data,
    data: { 
      userid,
      login,
      email}
  }) 

//   export const SetUsersProfile = (profileid) => ({
//     type: setusersprofile,
//     profile: profileid,
//   })


  const initian = {
         userid: null,
         login: null,
         email: null,
         isAuth: false
  }

  const Authreducer = (state=initian,action) => {
      switch(action.type) {
    case set_user_data: 
          return {
            ...state,
           ...action.data,
           isAuth: true
          }
      default: return state;
    }
  }

  export default Authreducer;