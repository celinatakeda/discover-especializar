# Transition e Animation
Transition e animation, duas propriedades CSS que podemos usar para animações levando nosso CSS ao próximo nível.


## O que é CSS transition?
Quando temos alguma propriedade css que muda de valor em um hover, focus ou outro tipo de interação, podemos usar o transition para suavizar a mudança do ponto A ate o ponto B

## Transition property e duration
```
transistion-property - é a propriedade css que queremos aplicar a transição

transition-duration - é o tempo de duração da transição

Somente valores quantificáveis podem ser animados. Isso quer dizer que não é possível fazer uma animação de display indo de none para block, mas sim de opacity de 0 para 1;

```

## Transition timing functions
```
ease - Início lento, rápido e final lento (este é o padrão)
linear - Mesma velocidade do início ao fim
easy-in - Início lento
easy-out - Final lento
easy-in-out - Início e fim lentos
cubic-bezier(n,n,n,n) - Permite definir seus próprios valores em uma função cubic-bezier

```
## Transition delay
```
transition-delay é uma propriedade CSS que permite atrasar o inicio de uma transição em uma escala de segundos

```
## Transition property all
```
transition-property: all, é usado para aplicar transição em todos os elementos quantificáveis disponíveis e que estejam sofrendo alteração

```

## O que é CSS animation?
CSS Animations é uma ferramenta do CSS que permite criar animações sem a interação do usuário, onde elas podem acontecer de forma autônoma.

## Animation name e duration
```
animation-name - é o nome da animação criada com @keyframes

animation-duration - é o tempo de duração da animação em uma escala de segundos

```
## Keyframes com porcentagens
Essa é uma forma útil quando queremos ter uma animação que execute vários comportamentos em sua duração, então podemos colocar o inicio da animação como 0% e o fim da animação como 100%, usando qualquer outro valor de porcentagem nos referimos ao momento da duração daquela animação em porcentagem e definimos seu comportamento.

### Animation delay
```
animation-delay é uma propriedade CSS que permite atrasar o inicio de uma animação em uma escala de segundos

```
### Animation iteration count
```
A propriedade animation-iteration-count defini quantas vezes a animação será repetida, podendo ser colocada como um numero, exemplo 3, fará a animação se repetir 3 vezes. Podemos colocar o valor como "infinite” o que vai fazer a animação se repetir sem fim.

```

### Animation direction
```
A propriedade animation-direction define a direção que a animação vai funcionar, podendo ser: normal | reverse | alternate | alternate-reverse.

normal: começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será também da primeira chave do @keyframes ate a ultima
reverse: começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será também da última chave do @keyframes ate a primeira.
alternate: começa pela primeira chave do @keyframes e vai ate a última, se o iteration count estiver setado, no momento de repetir, será da última chave do @keyframes ate a primeira, e na próxima repetição volta a ser da primeira chave para a última e assim por diante alternando.
alternate-reverse.: começa pela última chave do @keyframes e vai ate a primeira, se o iteration count estiver setado, no momento de repetir, será da primeira chave do @keyframes ate a última, e na próxima repetição volta a ser da última chave para a primeira e assim por diante alternando.

```

### Animation timing function
```
ease - Início lento, rápido e final lento (este é o padrão)
linear - Mesma velocidade do início ao fim
easy-in - Início lento
easy-out - Final lento
easy-in-out - Início e fim lentos

```
## Animation fill mode
```
Animation fill mode: forwards, backwards, both, none
```