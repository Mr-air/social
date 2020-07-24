const OnchangeMessageactiontype = "OnchangeMessageText";
const Sendmessageactiontype="Addmessage"

export const AddMessageCreatAction = () => ({
    type: Sendmessageactiontype
  })

  export const OnChangeMessageTextAction = (text) => ({
    type: OnchangeMessageactiontype,
    text: text,
  })


  const initionstate = {
   
        DialogDAta: [
              {id:1, name: "Vity"},
              {id:2, name: "Andrey"}
            ],
          
        messageDAta: [
          {id:1, message: "dfgfdgd"},
          {id:2, message: "Aretretretmh453,"}
        ],
        MesssageText:""
   
  }

  const MessagePagereducer = (state=initionstate,action) => {
      switch(action.type) {
    case Sendmessageactiontype: 
        let newObject= {
            id: state.messageDAta.length+1,
            message:  state.MesssageText
          };
          return {
          ...state,
          messageDAta: [...state.messageDAta,newObject],
          MesssageText:''
        }
          
      case OnchangeMessageactiontype: 
      return {
        ...state,
        MesssageText: action.text
      }
    
      default: return state
    }
  }

export default MessagePagereducer