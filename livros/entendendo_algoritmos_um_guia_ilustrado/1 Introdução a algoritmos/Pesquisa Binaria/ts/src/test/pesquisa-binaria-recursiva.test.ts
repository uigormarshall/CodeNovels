import pesquisaBinaria from "../pesquisa-binaria-recursiva";


// lista vazia
// lista com 1 ites
// lista com 2 itens

var expect = require("chai").expect;
describe("Pesquisa Binaria", function () {
  describe("Buscar", function () {
    it("Deve retornar null quando a lista estiver vazia", function () {
      const lista: any[] = [];
      const resultado = pesquisaBinaria(lista, 39);
      expect(resultado).to.equal(null);
    });
    it("Deve retornar null quando o item procurado não for encontrado", function () {
      const lista: number[] = [1];
      const resultado = pesquisaBinaria(lista, 2);
      expect(resultado).to.equal(null);
    });
    it("Deve retornar o indice 7 para o valor de busca igual a 39 dado o conjunto  [0,1,3,14,15,16,22,39,55]", function () {
      const lista = [0, 1, 3, 14, 15, 16, 22, 39, 55]
      const resultado = pesquisaBinaria(lista, 39);
      const resultadoEsperado = 39;
      expect(lista[resultado]).to.equal(resultadoEsperado);
    });
    it("Deve retornar o indice 4 dado o conjunto   [0,1,3,9,14,15,16,18, 22,39,55, 56, 58,59, 60]", function () {
      const lista = [0, 1, 3, 9, 14, 15, 16, 18, 22, 39, 55, 56, 58, 59, 60]
      const resultado = pesquisaBinaria(lista, 14);
      const resultadoEsperado = 14;
      expect(lista[resultado]).to.equal(resultadoEsperado);
    });
  });
});