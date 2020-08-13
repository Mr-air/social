import { SocialApi } from "../components/API/api";

const follow = "Follow";
const unFollow = "UnFollow";
const setUsers = "Setusers";
const userscountTotal = "countTotal"
const activePage = "ActivePage";
const loaderPage = "LoaderPage";
const buttonClick = "buttonClick"
export const SetUsers = (users) => ({
  type: setUsers,
  users: users
})


export const Follow = (userid) => ({
   type: follow,
    userid
})

export const UnFollow = (userid) => ({
    type: unFollow ,
    userid
  })



  export const CountUsers = (countTotal) => ({
    type: userscountTotal ,
    countTotal
  })

  export const ActivePage = (active) => ({
    type: activePage,
    active
  })

  export const LoaderPage = (loader) => ({
    type:loaderPage,
    loader
  })


  export const ButtonClickUsers = (click,usersid) => ({
    type:buttonClick,
    click,
    usersid
  })

  const initian = {
 
         users: [],
         countTotal: 0,
         PageSize:10,
         Pageactive:1,
         isFetching: false,
         isButtonClick: []
     
  
  };

  const UsersPagereducer = (state=initian,action) => {
      switch(action.type) {
            
    case unFollow: 
      return {
        ...state,
        users: state.users.map (u => {
          if(u.id===action.userid) 
          {
            
            return {...u, followed:false}
          }
           return u
        })
      }
    case follow: 
    return {
      
      ...state,
      users: state.users.map (u => {
        if(u.id===action.userid) 
        {
          return {...u, followed:true}
        }
         return u
      })
    }
    case setUsers: 
    return {
      ...state,
      users:action.users
    }
    case activePage:
      return {
        ...state,
        Pageactive:action.active
      
      }
      case userscountTotal:
      return {
        ...state,
        countTotal:action.countTotal
      
      }
      case loaderPage:
        return {
          ...state,
          isFetching:action.loader
        
        }
        case buttonClick:
          return {
            ...state,
            isButtonClick: action.click ? 
            [...state.isButtonClick, action.usersid] :
            state.isButtonClick.filter(id=> id!== action.usersid)
          
          }
    default: return state;
    
  }
  }

/////////// thunk функция  //////////////////////////
  export const getUsers = (Pageactive,Pagesize) => {
    return async(dispatch) => {
      dispatch(LoaderPage(true))
      dispatch(ActivePage(Pageactive))
      SocialApi.getUsers(Pageactive,Pagesize).then(data => {
      dispatch(LoaderPage(false))
      dispatch(SetUsers(data.items));
      dispatch(CountUsers(data.totalCount)); })
    }
  }

  export const FollowUsers = (id) => {
    return async(dispatch) => {
     dispatch(ButtonClickUsers(true,id))
        SocialApi.UsersUNfollow(id).then(data =>       {
            if(data.resultCode===0) {
              dispatch(UnFollow(id))}
              dispatch(ButtonClickUsers(false,id))
           }
              
              )

    }
  }

  export const UnFollowUsers = (id) => {
    return async(dispatch) => {
      dispatch(ButtonClickUsers(true,id))
      SocialApi.Usersfollow(id).then(data =>       {
          if(data.resultCode===0) {
            dispatch(Follow(id)) }
            dispatch(ButtonClickUsers(false,id))
         }
            
            )
    }
  }

  export default UsersPagereducer;