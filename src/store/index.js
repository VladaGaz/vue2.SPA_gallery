import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import gallery from "./gallery"
export default new Vuex.Store({
   modules: {
      gallery
   }
})