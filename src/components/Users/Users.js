import React from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';





const Users = (props) => {
    console.log(props.userss)
let pageCount= Math.ceil(props.countTotal/props.Pagesize)

let page = [];
for (let i=1;i<=pageCount;i++) {
    page.push(i)
}
return ( 
    <>
    {/* <div>
{page.map(p => {return (<span key={p} className={props.Pageactive===p&&s.activePage} onClick={()=>{props.onChangeActivepage(p)}}>{p}</span>)})}
    </div> */}
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
      <button onClick={()=>props.onChangeActivepage()}>sdsfdsf</button>
      
     </>
)

}
export default Users;