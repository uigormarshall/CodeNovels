import pesquisaBinaria from "./pesquisa-binaria-recursiva";

console.log('[Pesquisa Binaria] aplicação iniciada com sucesso!');
const lista = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100]
const valorBuscado = 38;
const indiceEncontrado = pesquisaBinaria(lista, valorBuscado);
console.log('[Pesquisa Binaria] indice do item igual a '+indiceEncontrado);
if(lista[indiceEncontrado] == valorBuscado){
    console.log('[Pesquisa Binaria] pesquisa concluida com sucesso, indice igual a '+indiceEncontrado+ ', valor igual a '+lista[indiceEncontrado]);
}
