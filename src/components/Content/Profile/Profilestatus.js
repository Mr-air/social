import React, {useState, useEffect} from 'react'



const Profilestatus = (props) => {
    
    const [enmod,Setenmod] = useState(false)
    const [status,Setstatus] = useState(props.status)
         
    useEffect(()=>{
        Setstatus(props.status)
    },[props.status])

          let onSpanClick = () => {
              Setenmod(true)
          }

          let onInputClick = () => {
            Setenmod(false);
            props.updateStatus(status)
          }

         let onChangeInpuntStatus = (e) => {
              Setstatus(e.currentTarget.value)
          }

         

     
         return (
             <>
             {!enmod &&
             <div>
                <span onClick={onSpanClick}>{props.status||'ygygyugyug'}</span>
             </div>
             }
             {enmod &&
             <div>
                 <input onChange={onChangeInpuntStatus} onBlur={onInputClick} autoFocus={true} value={status}></input>
             </div>
                }
             </>
         )
     
}

export default Profilestatus