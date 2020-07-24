import ContentPagereducer from "./ContentPage-reducer";
import MessagePagereducer from "./MessagePage-reducer";



let store = {

RenderPage() {},

_state: {
  MessagePage: {
    DialogDAta: [
          {id:1, name: "Vity"},
          {id:2, name: "Andrey"}
        ],
      
    messageDAta: [
      {id:1, message: "dfgfdgd"},
      {id:2, message: "Aretretretmh453,"}
    ],
    MesssageText:""
  },
  ContentPage:{
    Post: [
      {id:1, text:"post1"},
      {id:2, text:"post2"}
    ],
    ChangeText: ''
  }
},

getState () {
  return this._state
},

 subcribess(observe) {
  this.RenderPage=observe;
},

dispatch(action) {
 
  ContentPagereducer( this._state.ContentPage,action);
  MessagePagereducer( this._state.MessagePage,action)
  this.RenderPage()

}

}
export default store