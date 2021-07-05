export default {
  state: {
    quantidade: 1,
    preco: 10
  },
  mutations: {
    setQuantidade(state, quantidade) {
      state.quantidade = quantidade;
    },
    setPreco(state, preco) {
      state.preco = preco;
    }
  },
  actions: {
    // example({commit, state, rootState}){
    // commit usado para disparar uma mutation
    // state para ter acesso a o state local
    // rootState é o state global do vuex
    // }
  }
};
