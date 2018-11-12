import axios from 'axios'
import Const from '../Constant'

var server = "https://h4ctq2rv47.execute-api.ap-northeast-2.amazonaws.com/prod/imgs/"

export default {
    [Const.GET_IMAGES] : (store, payload) => {
        console.log(server + payload)
        axios.get(server + payload)
            .then((response) => {
                store.commit(Const.GET_IMAGES, response.data)
            })
    }
}
