import { SocialApi } from "../components/API/api";

const Addpostactiontype = "AddPost";
const Onchangeactiontype = "OnchangeText";
const setusersprofile = 'setusersprofile';
const setusersstatus = 'setusersstatus';
const loaderPage = "LoaderPage";
//const updatestatus = ' updatestatus';

export const AddPost = () => ({
    type: Addpostactiontype
})

export const OnChangeText = (text) => ({
    type: Onchangeactiontype,
    text: text,
  }) 

  export const SetUsersProfileAC = (profileid) => ({
    type: setusersprofile,
    profile: profileid,
  })

  export const SetUsersStatuseAC = (status) => ({
    type: setusersstatus,
    status,
  })


  export const LoaderPageProfile = (loader) => ({
    type:loaderPage,
    loader
  })

  const initian = {
 
        Post: [
          {id:1, text:"post1"},
          {id:2, text:"post2"}
        ],
        ChangeText: '',
        profile: null,
        isFetching: false,
        status: ''
  
  }

  const ContentPagereducer = (state=initian,action) => {
      switch(action.type) {
          
      
    case Addpostactiontype: 
        let newObject= {
            id: state.Post.length+1,
            text:  state.ChangeText
          };
         
          return {
            ...state,
            Post: [...state.Post,newObject],
            ChangeText: ''
          }

    case Onchangeactiontype: 
     return {
    ...state,
     ChangeText: action.text
     } 
     case setusersprofile: 
     return {
       ...state,
       profile: action.profile
     }
     case setusersstatus: 
     return {
       ...state,
       status: action.status
     }
     case loaderPage:
      return {
        ...state,
        isFetching:action.loader
      
      }
      default: return state;
    }
  }


  export const SetUsersProfile = (usersid) => {
    return async(dispatch) => {
      dispatch(LoaderPageProfile(true));
      SocialApi.MeProfile(usersid).then(data=>{
        dispatch(LoaderPageProfile(false));
        dispatch(SetUsersProfileAC(data.data));
      })
    }
  }

  export const SetUsersStatus = (usersid) => {
    return async(dispatch) => {
     
      dispatch(LoaderPageProfile(true));
      SocialApi.getStatus(usersid).then(data=>{
        dispatch(LoaderPageProfile(false));
        dispatch(SetUsersStatuseAC(data.data));
      })
    }
  }


  export const UpdateUsersStatus = (status) => {
  
    return async(dispatch) => {   
      dispatch(LoaderPageProfile(true));
      SocialApi.MeStatus(status).then(data=>{
       
        if(data.data.resultCode===0) {
        dispatch(LoaderPageProfile(false));
        dispatch(SetUsersStatuseAC(status))
        };
      })
    }
  }

  export default ContentPagereducer;