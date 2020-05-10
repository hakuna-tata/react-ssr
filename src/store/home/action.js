import * as HOME from './action-type';
import axios from 'axios';

const changeTopicList = (list) => {
  return{
    type: HOME.GET_TOPIC_LIST,
    list
  }
}

export const getTopicList = () => {
  return (dispatch) => {
    return axios.get('https://cnodejs.org/api/v1/topics')
      .then(res => {
        const list = res.data.data;
        dispatch(changeTopicList(list))
      })
  }
}