import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
   userName : 'LOGIN/SIGNUP',
   userData : ''
   
}

export default new Vuex.Store({
   state
})