import React, {useState} from 'react'
import '../css/default.css'
import '../css/Signup.css';
const getTarget = (elem, className) => {
  while(!elem.classList.contains(className)){
    elem = elem.parentNode;
    if(elem.nodeName == 'BODY') {
      elem = null;
      return;
    }
  }
  return elem
}
const Signup = (props) => {
    return(
        <div className="signup-container">
          <span>회원가입</span>
          <label for="signup-id">아이디</label>
          <input type="text" id="signup-id" />
          <label for="signup-password">비밀번호</label>
          <input type="password" id="signup-password" />
          <input type="button" className="signup-submit" value ="가입" />
        </div>
    )
}

export default Signup