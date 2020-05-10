import * as HOME from './action-type';

const defaultState = {
  topicList: []
}

export default (state = defaultState, action = {}) => {
  switch(action.type){
    case HOME.GET_TOPIC_LIST:
      return{...state, topicList: action.list}

    default:
      return state
  }
}