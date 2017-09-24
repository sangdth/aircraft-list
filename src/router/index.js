import Vue from 'vue';
import Router from 'vue-router';
import AircraftHome from '@/components/AircraftHome';
import AircraftList from '@/components/AircraftList';

Vue.use(Router);

export default new Router({
  mode: 'history', // hash for hashtag
  routes: [
    {
      path: '/',
      name: 'AircraftHome',
      component: AircraftHome,
    },
    {
      path: '/list',
      name: 'AircraftList',
      component: AircraftList,
    },
  ],
});
