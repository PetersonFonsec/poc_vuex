import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    produtos: [],
    quantidade: 0,
    preco:0
  },
  getters:{
    valorTotal(state) {
      return state.produtos.map(({quantidade, preco}) => quantidade * preco)
      .reduce((total, atual) => total + atual, 0)
    },
  },
  mutations: {
    adicionarProduto(state, produto){
      state.produtos.push(produto);
    },
    setQuantidade(state, quantidade){
      state.quantidade = quantidade;
    },
    setPreco(state, preco){
      state.preco = preco;
    }
  },
  actions: {
      
  }
})