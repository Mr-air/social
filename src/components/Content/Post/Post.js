import React from 'react';
//import s from './Post.module.css';
import Postother from './Postother';



const Post = (props) => {


    let onChangeText = (e) => {
          
        props.onChangeText(e.target.value)
    }
    
   let Postmap= props.Postmap.map(el=><Postother message={el.text} key={el.id}/>)
    return (
            <section>
                <div>
                    <input onChange={onChangeText}  value={props.value} type="text"/>
                    <button onClick={props.addPost}>ADD</button>
                </div>
              {Postmap}
              
            </section>         
    );
}

export default Post