# ToDo API - Ignite

<p align="center">
  <img src="https://img.shields.io/static/v1?label=ToDo&message=API&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/todos-ignite?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/todos-ignite?color=blueviolet&logo=JavaScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/todos-ignite?color=blueviolet&style=for-the-badge">
</p>
<br>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#todo-api">ToDo API</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

<br>

## Sobre

Desafio proposto durante a trilha de NodeJS no bootcamp Ignite da RocketSeat. Esse desafio foi proposto no primeiro capitulo da trilha e seu objetivo foi consolidar os conhecimentos ensinados durante o modulo 1 do curso.

## ToDo API

O ToDo API tem como finalidade ser um backend de aplicação de to-do. O projeto foi proposto no desafio do primeiro modulo do bootcamp para colocar em pratica o que foi ensinado.

Deixarei abaixo detalhes da implementação de cada uma das rotas da API e seus respectivos propósitos:

<details>
  <summary>POST <code>/users</code></summary>
  <br>
  
  Rota para criação de usuários. A rota recebe <code>name</code>, e <code>username</code> dentro do corpo da requisição. Ao cadastrar um novo usuário, ele é armazenado dentro de um objeto no seguinte formato:

  <pre>
    <code>
      { 
        id: 'uuid', // precisa ser um uuid
        name: 'John Doe',
        username: 'johnDoe',
        todos: []
      }  
    </code>
  </pre>

O objeto do usuário é retornado na resposta da requisição.

</details>

<details>
  <summary>GET <code>/todos</code></summary>
  <br>
  
  Rota para retornar as tarefas de um usuário. A rota recebe, pelo header da requisição, uma propriedade <code>username</code> contendo o username do usuário e retornar uma lista com todas as tarefas desse usuário.
</details>

<details>
  <summary>POST <code>/todos</code></summary>
  <br>
  
  Rota para criação de uma tarefa para um usuário. A rota recebe <code>title</code> e <code>deadline</code> dentro do corpo da requisição e, uma propriedade <code>username</code> contendo o username do usuário dentro do header da requisição. Ao criar um novo _todo_, ele é armazenado dentro da lista <code>todos</code> do usuário que está criando essa tarefa. Cada tarefa estará no seguinte formato:

  <pre>
    <code>
      {
        id: 'uuid', // precisa ser um uuid
        title: 'Nome da tarefa',
        done: false,
        deadline: '2021-02-27T00:00:00.000Z',
        created_at: '2021-02-22T00:00:00.000Z'
      }   
    </code>
  </pre>

O objeto do <code>todo</code> será retornado na resposta da requisição.

</details>

<details>
  <summary>PUT <code>/todos/:id</code></summary>
  <br>
  
  Rota para alteração de uma tarefa. A rota recebe, pelo header da requisição, uma propriedade <code>username</code> contendo o username do usuário e receber as propriedades <code>title</code> e <code>deadline</code> dentro do corpo.
</details>

<details>
  <summary>PATCH <code>/todos/:id/done</code></summary>
  <br>
  
  Rota para tornar uma tarefa concluída. A rota recebe, pelo header da requisição, uma propriedade <code>username</code> contendo o username do usuário e altera a propriedade <code>done</code> para <code>true</code> no _todo_ que possuir um <code>id</code> igual ao <code>id</code> presente nos parâmetros da rota.
</details>

<details>
  <summary>DELETE <code>/todos/:id</code></summary>
  <br>
  
  Rota para deletar uma tarefa. A rota recebe, pelo header da requisição, uma propriedade <code>username</code> contendo o username do usuário e exclui o _todo_ que possuir um <code>id</code> igual ao <code>id</code> presente nos parâmetros da rota.
</details>

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/todos-ignite.git

# Acesse a pasta do projeto no terminal/cmd
$ cd todos-ignite

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# Executar os testes
$ npm run test
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn test

# O servidor inciará na porta 3333 - acesse <http://localhost:3333>
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="75"/>

<img align="left" src="https://images.velog.io/images/euneun/post/e030edaf-3157-480c-9b86-fc4e7846f9c5/jest.png" alt="Jest" height="75"/>

<br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
