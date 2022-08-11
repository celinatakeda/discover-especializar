## O que é o TypeScript?
O TypeScript foi criado pela Microsoft para trazer um superset de tipagens para o JavaScript.

A diferença entre o JavaScript e TypeScript é a sua tipagem que no JS não é obrigatório, já no TS é obrigatório, mas nem pra todos os casos. Algumas vantagens de utilizar o TS é que a sua adoção pode ocorrer de forma gradual em um projeto JavaScript.

## Porquê utilizar TypeScript?
A maior vantagem de usar o TypeScript além de aumentar a nossa produtividade no dia a dia é ele reconhecer os erros durante o desenvolvimento, diferente do JavaScript que reconhecerá apenas quando o projeto é executado.

Utilizamos o TypeScript Playground, ferramenta não necessita de nenhuma instalação e pode ser executada diretamente pelo seu navegador.

## Compilação
O TypeScript é sempre compilado para JavaScript, mas normalmente não estamos vendo isso. Observe os exemplos:

O TypeScript nos ajuda a identificar cada tipo de variável ao invocá-las.

## Tipagem explícita
Na tipagem explícita nós especificamos o qual será o tipo de cada variável.

Any

Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.

Inferência de tipos

O TypeScript reconhece automaticamente o tipo da variável ao passar algum valor para ela.

Tipos primitivos

Esses são os tipos primitivos que podemos utilizar no TypeScript: boolean, number, string.

## Matrizes
Existem duas maneiras de tipar arrays no TypeScript, confira os exemplos:

let numbers: number[];
numbers = [1,2,3,4,5,6];

let users: Array<string>;
users = ['Rodrigo', 'João'];

## Funções
Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void


## Links Úteis
https://www.typescriptlang.org/
