import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Gallery from '@/pages/Gallery.vue';
import About from '@/pages/About.vue';
import Details from '@/pages/Details.vue';


export default new Router({
   routes: [
      {
         path: '/',
         name: "gallery",
         component: Gallery
      },
      {
         path: '/about',
         name: "about",
         component: About
      },
      {
         path: '/details/:id',
         name: "details",
         component: Details
      },
   ]
})