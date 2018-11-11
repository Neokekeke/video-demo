import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 记录switch按钮切换的状态
const state = {

}

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
});
