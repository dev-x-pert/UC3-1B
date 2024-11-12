# Caderno virtual - Lógica da Programação e Algoritmos
Boas vindas! Este é seu caderno virtual. Aqui você deverá guardar todos os conceitos aprendidos e atiuvidades dessa unidade curricular. 


## Conteúdo Técnico

- variáveis e seus tipos primitivos (string, number, boolean)
- arrays


## Atividades desenvolvidas
Escreva aqui as atividades desenvolvidas em sala e para casa. Você pode detelhar a atividade e usar links das atividades do codepen e vídeos desenvolvidos em sala. 



https://pastebin.com/UKWsDjDA



## função

```js
// toda a linha de código a partir do '//' é ignorado sendo útil para fazer comentários sobre o código

/*
também é possível fazer
comentários
maiores
*/

function nomedafuncao(parametro1, parametro2) {
  let algumvalor = parametro1 + parametro2; //essa variável não fica disponível fora da função
  return algumvalor;
}

let testedafuncao = nomedafuncao(1, 2);
console.log(testedafuncao); //3
```


```js
let umaarray = ['texto', 2, 3, 'quatro', '5'];

console.log(umaarray[0]); // pega o primeiro elemento da array (no caso o 'texto')

console.log(umaarray[1]); // pega o segundo elemento da array (no caso o 2)

console.log(umaarray[2]); // pega o terceiro elemento da array (no caso o 3)

console.log(umaarray[3]); // pega o quarto elemento da array (no caso o 'quatro')

console.log(umaarray[3]); // pega o quinto elemento da array (no caso '5')

console.log(umaarray.length); //pega o tamanho da array (no caso o 5)

console.log(umaarray[umaarray.length - 1]); //pega o útimo elemento de uma array (no caso o '5')
```



```js
const objeto = {
  propriedade1: 1
  propriedade2: "texto"  
}
```
