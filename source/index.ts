import { Fila } from "./fila"; 

const fila = new Fila(10);

fila.push(1, "muitoalta");
fila.push(2, "alta");
fila.push(3, "normal");
fila.push(4, "baixa");
fila.push(5, "muitobaixa");
fila.push(6, "muitoalta");

console.log("Quantidade:", fila.elemento()); 
console.log("Próximo elemento:", fila.proximoElemento()); 



console.log("Removido:", fila.pop()); 
console.log("Removido:", fila.pop()); 
console.log("Próximo elemento:", fila.proximoElemento()); 
console.log("Quantidade:", fila.elemento());  


fila.push(7, "alta");
fila.push(8, "normal");
fila.push(9, "baixa");
fila.push(10, "muitobaixa");
console.log("Fila está cheia?", fila.cheia());
console.log("Fila está vazia?", fila.vazia()); 


fila.limpar();
console.log("Fila vazia agora?", fila.vazia()); 
console.log("Próximo elemento após limpar:", fila.proximoElemento()); 
console.log("Pop após limpar:", fila.pop()); 
