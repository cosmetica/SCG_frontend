// routes.js

import SCG from './components/SCG.vue';
import FindXYZ from './components/FindXYZ.vue';
import ShowResume from './components/ShowResume.vue';
import Errors from './components/404.vue';

const routes = [
    { path: '/', name:'SCG', component: SCG },
    { path: '/findXYZ', name:'findXYZ', component: FindXYZ },
    { path: '/showResume', name:'showResume', component: ShowResume },
    { path: '/404', name: '404', component: Errors },
];

export default routes;