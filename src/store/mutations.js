import Const from '../Constant'

export default {
    [Const.GET_IMAGES] : (state, payload) => {
        state.imageList = payload; //TODO 반환 어떻게? payload.~~
    }
}
