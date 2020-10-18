import React, {useState} from 'react'
import "../css/default.css"
import '../css/Login.css';
import Signup from './Signup';

const getTarget = (elem, className) =>{
  while(!elem.classList.contains(className)){
    elem = elem.parentNode;
    if(elem.nodeName == 'BODY') {
      elem = null;
      return
    }
  }
  return elem;
}

const Login = (props) => {
  const {children, id, password} = props;
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <h1 className="login-header">{children}</h1>
      <div className="web-container">
        <form className="login-container">
          <label for="id">{id}</label>
          <input type="text" id="id" />
          <label for="password">{password}</label>
          <input type="password" id="password" />
          <a href="main.html" className="submit">로그인</a>
          <input onClick={()=>{
            setVisible(true);
          }} type="button" className="signup" value ="회원가입" />
        </form>
      </div>
      
      {visible && <div className="modal-container" onClick = {e=>{
        if(e.target.className == 'modal-container') setVisible(false);
      }}><Signup></Signup></div> }
      {visible && <div className="X-button" onClick ={()=>{
        setVisible(false);
      }}>✖</div>}
    </div>
  )
}
export default Login;