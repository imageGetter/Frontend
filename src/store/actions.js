import axios from 'axios'
import Const from '../Constant'

var server = (process.env.NODE_ENV === 'development') ?
  "https://yqj6ua44w2.execute-api.ap-northeast-2.amazonaws.com/dev/imgs/" :
  "https://h4ctq2rv47.execute-api.ap-northeast-2.amazonaws.com/prod/imgs/"

export default {
  [Const.GET_IMAGES]: (store, payload) => {
    store.commit(Const.CLEAR_IMAGES)
    store.commit(Const.LOADING_TRUE)

    payload = encodeURI(payload)
    payload = encodeURIComponent(payload)

    axios.get(server + payload)
      .then((response) => {
        store.commit(Const.GET_IMAGES, response.data)
        store.commit(Const.LOADING_FALSE)
      })
      .catch((error) => {
        store.commit(Const.LOADING_FALSE)
        alert("이미지를 불러올 수 없습니다.");
      });
  }
}
