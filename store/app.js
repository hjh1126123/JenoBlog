export const state = () => {
  return {
    auth: null
  }
}
export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  }
}
export const actions = {
  login({
    commit
  }, userInfo) {
    //... 登录验证
    commit('setAuth', '6ebe76c9fb411be97b3b0d48b791a7c9');
  }
}
