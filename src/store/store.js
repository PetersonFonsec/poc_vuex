import Vue from "vue";
import Vuex from "vuex";

import carrinho from "./modules/carrinho";
import paramentros from "./modules/paramentros";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { carrinho, paramentros }
});
