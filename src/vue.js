import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import i18n from './locales/cultures';

Vue.config.productionTip = false;

window.vueApp = new Vue({
    el: '#app',
    i18n,
    router,
    store,
    components: {App},
    template: '<App/>',
    beforeCreate() {
    }
});

/**
 * change fallback locale
 */
// i18n.fallbackLocale = 'en-UK';

/**
 * check routes
 */
router.beforeEach((to, from, next) => {
});
