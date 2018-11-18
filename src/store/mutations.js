import Const from '../Constant'

export default {
  [Const.GET_IMAGES]: (state, payload) => {
    state.imageList = payload;
  },
  [Const.CLEAR_IMAGES]: (state) => {
    state.imageList = []
  },
  [Const.LOADING_TRUE]: (state) => {
    state.isLoading = true;
  },
  [Const.LOADING_FALSE]: (state) => {
    state.isLoading = false;
  }
}
