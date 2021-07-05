export default {
  state: {
    produtos: []
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map(({ quantidade, preco }) => quantidade * preco)
        .reduce((total, atual) => total + atual, 0);
    }
  },
  mutations: {
    adicionarProduto(state, produto) {
      state.produtos.push(produto);
    }
  }
};
