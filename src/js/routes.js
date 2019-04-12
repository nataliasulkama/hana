import HomePage from '../pages/home.vue';
import NotFoundPage from '../pages/404.vue';
import BestPage from '../pages/best.vue';
import SpecialPage from '../pages/special.vue';
import FairPage from '../pages/fair.vue';

var routes = [{
    path: '/',
    component: HomePage,
  },
  {
    path: '/best/',
    component: BestPage
  },
  {
    path: '/special/',
    component: SpecialPage
  },
  {
    path: '/fair/',
    component: FairPage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;