import React, {Component} from 'react';

export default class extends Component{
  render(){
    return(
      <div>
        <div>Register</div>
        <button onClick={() => {alert("Register")}}>click</button>
      </div>
    )
  }
}