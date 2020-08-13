import { SetUserData } from "./auth-reducer";


const initianusers = "initianusers";



export const InitianSuccsesAC = () => ({
    type: initianusers}) 




  const initian = {
       innitian: false
  }

  const Appreducer = (state=initian,action) => {
      switch(action.type) {
    case initianusers: 
          return {
            ...state,
           innitian: true,
          }
      default: return state;
    }
  }
 

  export const InitianSuccses = () =>(dispatch) => {
       let promice = dispatch(SetUserData())
        Promise.all([promice]).then(()=>{dispatch(InitianSuccsesAC())})  
           
    }
  

  
  

  export default Appreducer;