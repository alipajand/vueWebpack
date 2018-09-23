import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import i18n from './locales/cultures';

/**
 * Global components
 */
import Croppa from 'vue-croppa'; // https://github.com/zhanziyang/vue-croppa
import Vuelidate from 'vuelidate'; // https://github.com/monterail/vuelidate
import BootstrapVue from 'bootstrap-vue'; // https://github.com/bootstrap-vue/bootstrap-vue
import Multiselect from 'vue-multiselect'; // https://github.com/shentao/vue-multiselect
import Notifications from 'vue-notification'; // https://github.com/euvl/vue-notification

/**
 * Custom Components
 */
import Loading from './app/shared/loading';
import Calendar from './app/shared/calendar';

Vue.config.performance = true;
Vue.config.productionTip = true;

Vue.use(Croppa);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(Notifications);

Vue.component('multiselect', Multiselect);
Vue.component('loadingComponent', Loading);
Vue.component('calendarComponent', Calendar);

window.vueApp = new Vue({
    el: '#app',
    i18n,
    router,
    store,
    components: { App },
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
