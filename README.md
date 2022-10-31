

CRUD desenvolvido com Docker, Express, Jest e MongoDB.



<details>
    <summary><strong>Como funciona?</strong></summary>
    
    Uma requisição para o endpoint http://universities.hipolabs.com, retornando todas as universidades 
    dos países listados em um array. Os dados retornados dessa requisição são armazenados em uma 
    Coleção no MongoDB que posteriormente poderá ser manipulada através de uma api que utiliza o framework Express. 
  
</details>

<details>
    <summary><strong>Folder structure</strong></summary>
    
  ![node-mongo-crud-structure](https://user-images.githubusercontent.com/61982010/198934868-caa416f7-db1c-4e98-89d0-f3849ebbafd5.png)
  
</details>

Instruções para executar o projeto:

- Para testar localmente, é necessário ter instalado Docker e docker-compose.

- Instalar as dependencias do projeto: <code>npm install</code> 

- Na pasta raiz do projeto, execute:

  <code>npm run compose:up</code>


Logo em seguida, <code>npm run resetdb</code> para popular a collection.

[populatedb-showcase.webm](https://user-images.githubusercontent.com/61982010/192667578-27a57dd1-bef3-485e-88e4-bfbb4d8074b4.webm)


_____________________________________________________________________________________________________
<h2>Crud e tests</h2>


[crud-showcase.webm](https://user-images.githubusercontent.com/61982010/192667788-f60a44dd-cf92-4324-9f5e-1b33700e213c.webm)


Para rodar os testes:

- Na pasta raiz do projeto, execute: <code>npm run test</code>










