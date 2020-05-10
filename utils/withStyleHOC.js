import React, { Component } from 'react';

export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component{
    componentWillMount(){
      if(this.props.staticContext){
        // Todo
      }
    }
    render(){
      return <DecoratedComponent {...this.props}/>
    }
  }
}