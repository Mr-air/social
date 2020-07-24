import React from 'react';
import s from './Post.module.css';


const Postother = (props) => {
    return (
      
                <div className={s.Postother_wrapper} > 
                    <span>{props.message}</span>
                </div>
    );
}

export default Postother