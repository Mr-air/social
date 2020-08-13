import React, { useState } from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';





const Users = (props) => {
let pageCount= Math.ceil(props.countTotal/props.Pagesize)

let page = [];
for (let i=1;i<=pageCount;i++) {
    page.push(i)
}
const portionCount=Math.ceil(pageCount/props.Pagesize)
const[pagenumber ,setpagenumber] = useState(1);
let left=(pagenumber-1)*props.Pagesize+1;
let right=pagenumber*props.Pagesize;
return ( 
    <>
    <div>
        {pagenumber>1 && <button onClick={()=>{setpagenumber(pagenumber-1)}}>Prev</button>}
{page.filter(p=>p>=left && p<=right).map(p => {return (<span key={p} className={props.Pageactive===p&&s.activePage} onClick={()=>{props.onChangeActivepage(p)}}>{p}</span>)})}
       {portionCount>pagenumber && <button onClick={()=>{setpagenumber(pagenumber+1)}}>Next</button>}
    
    </div>
    
 {props.userss.map ( users => 
     
     
     <div key={users.id} className={s.Users_wrapper}>
         <NavLink to={`/profile/${users.id}`}>
         <img alt="пользователь"></img>
         </NavLink>
         <span>{users.name}</span>
         <span>{users.status}</span>
         {users.followed ? <button className={s.button_follow} disabled={props.disabledbutton.some(id => id===users.id)} onClick={() => props.FollowChange(users.id)}>Отписаться</button> 
                          :
                           <button className={s.button_follow} disabled={props.disabledbutton.some(id => id===users.id)} onClick={() => props.UNFollowChange(users.id)}>Подписаться</button>} 
                  
     </div>    
 )}
      {/* <button onClick={()=>props.onChangeActivepage()}>sdsfdsf</button> */}
      
     </>
)

}
export default Users;