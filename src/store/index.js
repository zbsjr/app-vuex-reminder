import Vue from "vue";
import Vuex from "vuex";
import Reminders from "./modules/reminders";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Reminders,
    },
});
