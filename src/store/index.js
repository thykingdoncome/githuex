import Vuex from 'vuex'
import Vue from 'vue'
import users from './modules/users'
// import repos from './modules/repos'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users,
        // repos
    }
})