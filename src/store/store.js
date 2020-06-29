import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
   userName : 'LOGIN/SIGNUP',
   userData : '',
   dropdownFlag :  false
   
}

export default new Vuex.Store({
   state
})