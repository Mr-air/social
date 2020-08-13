import React from 'react'
import { connect } from 'react-redux'
import { LoginIN } from '../../redux/auth-reducer'

const Login = (props) => {
    console.log(props)
    return (
        <>
        <h1>Login</h1>
        <LoginForm formdata={props} />
        </>
        
    )
}


const LoginForm = (props) => {
    console.log(props.formdata.LoginIN)
    return (
        <>
      <form>
            <div><input type="text" placeholder="login"></input> </div>
            <div><input type="password" placeholder="password" autoComplete></input> </div>
            <div><input type="checkbox" placeholder="RemembeMe"></input> 
            <span>RemembeMe</span></div>
            
        </form>
        
        <div><button onClick={()=>props.formdata.LoginIN("yzycyete@10mail.org",'1234',true)}>Submit</button></div>
    </>
    )
}




let dispat = {
    LoginIN}

const LoginContainer = connect(null,dispat)(Login)

export default LoginContainer