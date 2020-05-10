import React, {Component} from 'react';

export default class extends Component{
  render(){
    return(
      <div>
        <div>Login</div>
        <button onClick={() => {alert("Login")}}>click</button>
      </div>
    )
  }
}