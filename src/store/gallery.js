
import axios from 'axios'

export default {
   state: {
      categories: {},
      loader: true,
   },
   mutations: {
      updateСategories(state, array) {
         state.categories = array;
      },
      updateLoader(state, loader) {
         state.loader = loader
      },
   },
   actions: {
      getСategories(ctx) {
         setTimeout(() => {
            axios
               .get("https://jsonplaceholder.typicode.com/photos")
               .then((response) => {
                  ctx.commit('updateСategories', response.data.slice(0, 24))
                  ctx.commit('updateLoader', false)
               });
         }, 5000)
      },
   },
   getters: {
      getLoader(state) {
         return state.loader
      },
      getСategories(state) {
         return state.categories
      },
   }
}