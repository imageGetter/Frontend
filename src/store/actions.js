import axios from 'axios'
import Const from '../Constant'

var server = (process.env.NODE_ENV === 'development') ?
    "https://yqj6ua44w2.execute-api.ap-northeast-2.amazonaws.com/dev/imgs/" :
    "https://h4ctq2rv47.execute-api.ap-northeast-2.amazonaws.com/prod/imgs/"

export default {
    [Const.GET_IMAGES]: (store, payload) => {
        console.log(server + encodeURIComponent(payload))
        // fix me
        // progress bar(or circle)
        axios.get(server + encodeURIComponent(payload))
            .then((response) => {
                store.commit(Const.GET_IMAGES, response.data)
            })
            .catch((error) => {
                // fix me
                // 에러일 때 alert 창이 뜨면 좋을거같은뎅
                if (error.response) {
                    const { data } = error.response;
                    // fix me
                    // data 분기 처리
                    // response 예
                    // "response": {
                    //     "data": {
                    //         "status": 403,
                    //         "statusText": "Forbidden",
                    //         "data": "..."
                    //     },
                    //     "status": 500,
                    //     "statusText": "",
                    //     "headers": {
                    //         "content-type": "application/json"
                    //     },
                    //     "config": {
                    //         "transformRequest": {},
                    //         "transformResponse": {},
                    //         "timeout": 0,
                    //         "xsrfCookieName": "XSRF-TOKEN",
                    //         "xsrfHeaderName": "X-XSRF-TOKEN",
                    //         "maxContentLength": -1,
                    //         "headers": {
                    //             "Accept": "application/json, text/plain, */*"
                    //         },
                    //         "method": "get",
                    //         "url": "https://yqj6ua44w2.execute-api.ap-northeast-2.amazonaws.com/dev/imgs/https%3A%2F%2Fsearch.naver.com%2Fsearch.naver%3Fie%3DUTF-8%26query%3Da%26sm%3Dchr_hty"
                    //     },
                    //     "request": {}
                    // }
                }
            });
    }
}
