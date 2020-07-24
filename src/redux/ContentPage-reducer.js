const Addpostactiontype = "AddPost";
const Onchangeactiontype = "OnchangeText";
const setusersprofile = 'setusersprofile';

export const AddPostCreatAction = () => ({
    type: Addpostactiontype
})

export const OnChangeTextAction = (text) => ({
    type: Onchangeactiontype,
    text: text,
  }) 

  export const SetUsersProfile = (profileid) => ({
    type: setusersprofile,
    profile: profileid,
  })


  const initian = {
 
        Post: [
          {id:1, text:"post1"},
          {id:2, text:"post2"}
        ],
        ChangeText: '',
        profile: null
  
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
      default: return state;
    }
  }

  export default ContentPagereducer;