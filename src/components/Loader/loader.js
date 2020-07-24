import React from 'react';
import loader from '../img/loader.gif'

const Loader = (props) => {
    return (
        <div style= {{backgroundColor: 'white'}}>
            <img src={loader} alt="загрузка"></img>
        </div>
    )
}

export default Loader;