import axios from 'axios'
import Const from '../Constant'

var server = (process.env.NODE_ENV === 'development') ?
    "https://yqj6ua44w2.execute-api.ap-northeast-2.amazonaws.com/dev/imgs/" :
    "https://h4ctq2rv47.execute-api.ap-northeast-2.amazonaws.com/prod/imgs/"

export default {
    [Const.GET_IMAGES]: (store, payload) => {
        console.log(server + encodeURIComponent(payload))
        // TODO :: progress bar(or circle)
        axios.get(server + encodeURIComponent(payload))
            .then((response) => {
                store.commit(Const.GET_IMAGES, response.data)
            })
            .catch((error) => {
              alert("이미지를 불러올 수 없습니다.");
            });
    }
}
