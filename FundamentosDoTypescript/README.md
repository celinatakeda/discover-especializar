## O que é o TypeScript?
```
O TypeScript foi criado pela Microsoft para trazer um superset de tipagens para o JavaScript.

A diferença entre o JavaScript e TypeScript é a sua tipagem que no JS não é obrigatório, já no TS é obrigatório, mas nem pra todos os casos. Algumas vantagens de utilizar o TS é que a sua adoção pode ocorrer de forma gradual em um projeto JavaScript.

```
## Porquê utilizar TypeScript?
```
A maior vantagem de usar o TypeScript além de aumentar a nossa produtividade no dia a dia é ele reconhecer os erros durante o desenvolvimento, diferente do JavaScript que reconhecerá apenas quando o projeto é executado.

Utilizamos o TypeScript Playground, ferramenta não necessita de nenhuma instalação e pode ser executada diretamente pelo seu navegador.

```
## Compilação
```
O TypeScript é sempre compilado para JavaScript, mas normalmente não estamos vendo isso. Observe os exemplos:

O TypeScript nos ajuda a identificar cada tipo de variável ao invocá-las.

```

## Tipagem explícita
```
Na tipagem explícita nós especificamos o qual será o tipo de cada variável.

Any
Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.

Inferência de tipos
O TypeScript reconhece automaticamente o tipo da variável ao passar algum valor para ela.

Tipos primitivos
Esses são os tipos primitivos que podemos utilizar no TypeScript: boolean, number, string.

```
## Matrizes
```
Existem duas maneiras de tipar arrays no TypeScript, confira os exemplos:

let numbers: number[];
numbers = [1,2,3,4,5,6];

let users: Array<string>;
users = ['Rodrigo', 'João'];

```

## Funções
```
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

```

## Union
```
O Operador Union, representado pelo pipe | nos permite adicionar mais de um tipo na variável. Vamos ao exemplo:

function printUserId(id: number | string) {
    console.log(`O ID do usuário é: ${id}`);
}

printUserId(101);
printUserId("101");

// Dessa forma, podemos passar tanto number quanto string

```

---
## Generics
```markdown

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

```
---
## Type Assertions
```
Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.

Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.

type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;

```

## Objetos
```
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

```

## Intersecção de tipos
```
A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar as suas propriedades dentro de um objeto.

Segue o exemplo abaixo:

type User = {
    id: number,
    name: string,
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = User & Char;

let info: PlayerInfo = {
    id: 1,
    name: 'João Inácio',
    nickname: 'birobirobiro',
    level: 50
}

```
## Interface
```
Outra maneira de criar tipagens no TypeScript é utilizando a interface .

Segue o exemplo:

interface User {
    id: number
    name: string,
}

let newUser: User = {
    id: 1,
    name: "João"
}

function registerNewUser(newUser: User){
    newUser.id
    newUser.name
}

```
## Type e Interface
```
O objetivo de ambos serve para definir tipagens no TypeScript. O type é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já as interfaces são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.

O exemplo abaixo mostra a diferença na sintaxe e união entre type e inteface:

type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

// Fazendo união com Type
type TAccount = TUser & TPayment

interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}

```
## tsconfig
```
É um arquivo de configuração do TypeScript, ele pode ser escrito tanto em formato de JavaScript quanto no formato JSON.

Exemplo de um arquivo tsconfig.json :

{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
}

```

## Links Úteis
https://www.typescriptlang.org/
