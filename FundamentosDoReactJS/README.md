## O que é ReactJS?
Uma biblioteca JavaScript que tem o objetivo de criação de interfaces.

## Porque ReactJS é uma biblioteca e não um framework?
Porque ele não tem uma opinião forte, ele não tem uma estrutura de pastas e regras que os frameworks em si tem. Ele te dá mais liberdade para criar as interfaces da maneira que preferir.

## Criando o projeto:
Ao criar um projeto utilizando o ReactJS podemos utilizar os seguintes boilerplates:

Create React App (CRA)
Vite
Quais as vantagens de utilizar Vite ao invés do CRA?

O Vite tem todos os recursos do CRA, mas com melhores implementações e recursos adicionais que o CRA não suporta, com isso o Vite acaba sendo até 10x mais rápido em comparação ao CRA.

Criando o primeiro projeto com o Vite

npm create vite@latest reactapp --template react
Após rodar o comando acima, será exibido a tela para escolher o framework que deseja utilizar.

## Executando projeto
Existem duas maneiras de navegar até a pasta do seu projeto, pelo próprio terminal, utilizando o comando cd ou arrastando a pasta do projeto para dentro do VS Code.

Em seguida, será necessário baixar as dependências necessárias para a execução do projeto. Podemos utilizar o npm quanto o yarn como gerenciador de pacotes.

Certifique-se que está na pasta do projeto e execute o comando desejado:

yarn install
npm install
Após a instalação das dependências, execute o comando abaixo:

Utilize o mesmo gerenciador do comando anterior

npm run dev
yarn dev
Após executar o comando acima, abra o seu navegador e acesse o endereço:

http://localhost:3000/

O arquivo index.html é o principal arquivo do nosso projeto, ele importará o arquivo main.jsx e fará com que o conteúdo seja exibido em nosso navegador.

O arquivo main.jsx terá a função de renderizar o componente <App /> e inserir através da DOM do nosso HTML pelo id root.

## JSX
É uma extensão do JavaScript bem semelhante ao HTML. Basicamente ele é uma sintaxe que o ReactJS utiliza para que possamos criar as nossas interfaces de forma declarativa.

O JSX utiliza funções dentro dos arquivos e o retorno dessas funções retornam tags HTML.

Arquivo de extensão jsx tem uma função e um retorno, dentro do retorno da função vai ser um conteúdo html e esse conteúdo é o que vai ser mostrado na tela.

## Fragment
Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos (Fragment) permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.

## Componentes
Componente nada mais do que um bloco de código reutilizável e independente. 

## Propriedades
As propriedades dentro de um componente faz com que você possa passar valores diferentes para cada um deles.



