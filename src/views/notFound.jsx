import React, {Component} from 'react';

export default class extends Component {
  render(){
    this.props.staticContext && (this.props.staticContext.notFound = true);
    return  <div>404, sorry, NOT FOUND</div>
  }
}
