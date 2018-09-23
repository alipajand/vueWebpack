import Vue from 'vue';
import Router from 'vue-router';
import Private from './_private';
import Public from './_sahred';

const routes = [];

/**
 * Add router to vue global
 */
Vue.use(Router);

/**
 * Add Public routes
 */
for (let i in Public.routes()) {
    if (Public.routes().hasOwnProperty(i)) {
        routes.push(Public.routes()[i]);
    }
}

/**
 * Add Private routes
 */
for (let i in Private.routes()) {
    if (Private.routes().hasOwnProperty(i)) {
        routes.push(Private.routes()[i]);
    }
}

/**
 * Export routes
 */
export default new Router({
    routes: routes,

    /**
     * Scroll to top after router changed
     */
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});
