import Vue from 'vue';
import Vuex from 'vuex';
import userInfo from './modules/userInfo';
import dataStorage from './modules/dataStorage';
import authentication from './modules/authentication';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        userInfo,
        dataStorage,
        authentication
    },
    strict: debug
});
