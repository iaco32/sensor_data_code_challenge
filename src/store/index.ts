import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex)

const store: StoreOptions<any> = {
    state: {
        radius : "",
    },
    mutations: {

    },
    actions: {

    }
}

export default new Vuex.Store(store);