import React, {Component} from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { Routes } from '../router';
import { connect } from 'react-redux';
import { getTopicList } from '../store/home/action';
import styles from './index.css';

class Index extends Component {
  componentWillMount(){
    if(this.props.staticContext){
      this.props.staticContext.css.push(styles._getCss())
    }
  }
  render(){
    return(
      <React.Fragment>
        <div className={styles.test}>标题</div>
        <Link to="/login">登录</Link>
        <Link to="/register">注册</Link>
        {
          this.props.list.map(item => {
            return <div key={item.id}>{item.content}</div>
          })
        }
      </React.Fragment>
    )
  }
  componentDidMount(){
    if(!this.props.list.length){
      this.props.getTopicList();
    }
  }
}
Index.loadData = (store) => {
  // 服务端渲染之前将数据加载好
  return store.dispatch(getTopicList())
}


const mapStateToProps = state => {
  return{
    list: state.homeReducer.topicList
  }
};
const mapDispatchToProps = dispatch => {
  return{
    getTopicList() {
      dispatch(getTopicList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);