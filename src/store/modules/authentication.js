import globalMethods from '../../methods';

/**
 * initial state
 */
const state = {
    login: false
};

/**
 * getters
 */
const getters = {
    isLogin() {
        return state.login;
    }
};

/**
 * actions
 */
const actions = {
    checkToken({ commit }) {
        // if (true) {
            /**
             * Change state of logout
             */
            // commit('logout');
            // return;
        // }
        /**
         * Change state of login
         */
        commit('login');
    },
    resetToken({ commit }) {
        /**
         * Change state of logout
         */
        commit('logout');

        /**
         * remove token from local storage
         */
        globalMethods.resetToken();
    }
};

/**
 * mutations
 */
const mutations = {
    login(state) {
        state.login = true;
    },
    logout(state) {
        state.login = false;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
