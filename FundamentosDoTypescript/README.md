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

Dessa maneira, tipamos dessa forma no TypeScript:

function showMessages(message: string):void {
    console.log(message)
}
Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.

function showMessages(message: string) {
   return message;
}

console.log(showMessages("Oi, João"))

## Union
O Operador Union, representado pelo pipe | nos permite adicionar mais de um tipo na variável. Vamos ao exemplo:

function printUserId(id: number | string) {
    console.log(`O ID do usuário é: ${id}`);
}

printUserId(101);
printUserId("101");

// Dessa forma, podemos passar tanto number quanto string

## Generics
O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma <T> (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:

<S> → Representando State <T> → Representando Type <K> → Representando Key <V> → Representando Value <E> → Representando Element

Exemplo de um trecho de código utilizando generics:

function useState<T>() {
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

let newState = useState();
newState.get();
newState.set("João");
newState.set(123);

## Type Assertions
Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.

Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.

type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;

## Objetos
Nessa aula vamos aprendemos como criar tipagens utilizando objetos no TypeScript.

Segue o exemplo:

type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})
Resultado do log:

[LOG]: "O eixo x é: 101"
------------------------
[LOG]: "O eixo y é: 50"


## Links Úteis
https://www.typescriptlang.org/
