import Vue from 'vue';
import VueI18n from 'vue-i18n';
import './_fa-IR';

Vue.use(VueI18n);

/**
 * Create VueI18n instance with options
 */
export default new VueI18n({
    locale: 'fa-IR',
    messages: window.messages
});
