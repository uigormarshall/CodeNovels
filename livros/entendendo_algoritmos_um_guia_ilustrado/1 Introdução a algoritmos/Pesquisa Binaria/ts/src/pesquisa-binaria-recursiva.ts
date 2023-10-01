function pesquisaBinaria(lista: number[], item: number, inicio: number = 0, fim:any = null, count = 0): any{
    if(fim == null) fim = lista.length-1;
    const meio = Math.round((inicio+fim)/2)
    if(lista[meio] == item) return meio
    if(inicio < fim){
        if(item < lista[meio]){
            return pesquisaBinaria(lista, item, inicio, meio-1)
        }
        return pesquisaBinaria(lista, item, meio+1, fim)
    }
    return null
}
export default pesquisaBinaria