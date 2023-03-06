## O que é Github para times?
Descrição

Vamos descobrir como usar o GitHub de forma colaborativa, as ferramentas e funções que facilitam a vida dos desenvolvedores quando estão trabalhando em time.

## Branches
Descrição

Pense que o código está guardado em uma caixinha dentro do repositório, podemos criar uma cópia dessa caixinha e colocar outros itens nessa nova caixinha. Pensando em código podemos "ramificar" o nosso projeto, criando linhas de commits com commits separados da linha principal, por exemplo se você vai criar uma feature nova e não quer fazer isso na branch principal que está conectada ao site que está no ar, você criar uma branch trabalhar nessa feature e quando quiser junta resse novo conteúdo na branch principal e consequentemente colocando no ar.

Criar ramificações do nosso trabalho.
```
git branch

git checkout -b servicesPages => criar uma nova branch

git checkout main => volta para a branch main.

git status => para ver o estado

git add . => adicionar tudo para 

git commit -m "add services pages"

git log => para ver os últimos commits

git push origin service 
origin => "repositorio"
service => "branch"
```

## Merge
Descrição

Merge é o comando do git para juntar os commits de uma branch com os commits de outra branch sempre respeitando a ordem cronologica desses commits
```
git merge "nome da branch"

git push "nome do repositório" main
```

## Apagar uma branch
Descrição

Podemos criar quantas branchs quisermos mas as vezes isso pode acabar deixando muita branch esquecida pra trás e nós confundir no momento de trocar de uma branch para outra, então existe momentos que é necessário apagar algumas branchs, vemos nessa aula o comando para realizar essa ação
```
git branch -D "nome da branch" => apagou no computador

git push origin --delete "nome da branch" => apaga no github
```

## Atualizando as branchs
Descrição

Quando estamos trabalhando em time é comum outra pessoa criar branchs no repositório que logicamente não vão existir na sua maquina, e se em algum momento vc quiser executar um git checkout para entrar nessas branchs que não estão na sua maquina você vai precisar atualizar essas branchs com o comando git fetch, assim como quando uma branch é excluida do github você precisa atualizar as branchs na sua maquina com o comando git fetch -p para atualizar essas branchs
```
git branch -a
git fetch
git branch -a
git fetch -p => apaga a branch da minha máquina
```

## Configuração de branch padrão e proteção da main
Descrição

Imagine que o código que está no ar, o código que está funcionando perfeitamente está guardando em uma branch, precisamos aplicar algumas regras de segurança para proteger esse código e garantir que nada o afete enquanto os times trabalham em correções de bugs, features novas ou outras tarefas. Uma das principais coisas a seconfigurar é não permitir commits diretos na branch principal, obrigando quem vai trabalhar no código criar uma branch separada para isso e depois solicitar um merge

## Pull Request
Descrição

Pull Request (PR) é uma forma de você informar outras pessoas sobre as alterações das quais você commitou em uma branch, e agora é o momento de colocar essas alterações em outra branch.


LGTM :D => para fazer comentários e D aparece os emojis

Look Good To Me

## Resolvendo conflito
Descrição

Por vezes quando trabalhamos em times acontece de duas pessoas alterarem o mesmo trecho de código, o git por sua vez informa a ultima pessoa a querer juntar todo o código que tem algo diferente naquele trecho que foi alterado por ela e previamente por outra pessoa, assim o desenvolvedor pode manualmente decidir qual trecho de código deve ser mantido ou o que deve ser alterado para depois continuar com o versionamento para o github.

atualizar
1. git pull origin main => puxa todas as alterações feitas na main

## Criando um pull request
Descrição

Vamos criar um pedido de merge para a branch principal.

## Colaborando em projetos públicos
Descrição

O GitHub permite que qualquer pessoa possa colaborar em projetos públicos, criando uma grande comunidade global. Isso permite com que você possa contribuir com seus projetos favoritos ou qualquer outro projeto que queira.

## Issues
Descrição

Issue no github é onde os usuários contribuem ou usuários finais da aplicação reportam os problemas/bugs encontrados. Trata-se da ideia de deixar comentários em projetos.

## Projects
Descrição

Projeto no GitHub é uma ferramenta customizada de tabela de tarefas, com ela conseguimos fazer o gerenciamento de tarefas de um time, as tarefas podem ser issues e o assign (pessoa responsavel) é mostrada na tabela junto com a issue.




