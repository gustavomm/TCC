import Vue from 'vue';
import Vuex from 'vuex';
import patients from './modules/patients';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        patients,
    },
    strict: debug,
});
