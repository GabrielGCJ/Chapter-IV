# Chapter IV - Rocketseat
Esta é a resolução de exercicios feitos em aula referente ao chapter IV da Rocketseat, um programa de capacitação intensiva em desenvolvimento de software.

![image](https://user-images.githubusercontent.com/91347602/232902040-1eb12147-f163-4dd8-bf03-0d2cd96cefb7.png)

### Objetivos :

#### Neste desafio, o objetivo é aplicar todos os conhecimentos adquiridos nos capítulos anteriores e expandi-los com o uso do Docker, adicionando mais tabelas por meio de migrations para enriquecer e ampliar o número de funcionalidades da API de aluguel de carros, além de incluir testes para assegurar a qualidade e confiabilidade da API.

### A aplicação deve ter as seguintes capacidades :

- Instalação fácil e sem complicações.

- Testes unitarios e de integração que possam ser executados para garantir a funcionalidade adequada da aplicação.

- Possibilidade de criar uma imagem do banco de dados para facilitar a replicação e a migração para diferentes ambientes.

- Migrations que possam ser executados para garantir que o esquema do banco de dados esteja atualizado.

- Ser gerenciada facilmente por meio de uma aplicação de gerenciamento de banco de dados, como o Beekeeper.

---

#### Observação: 
##### Esta API foi desenvolvida para ser utilizada dentro de um container Docker. Para testar suas funções corretamente dentro de um container, é necessário instalar o aplicativo e configurá-lo adequadamente para utilização dentro de um container. Caso não tenha ele instalado em sua maquina:

![image](https://user-images.githubusercontent.com/91347602/236373804-f4ab7ad5-e103-4109-9bbe-611d37949dbf.png)


https://www.docker.com/

---

### Para executar o projeto:

Clone este repositório em sua máquina:

`git clone https://github.com/GabrielGCJ/Chapter-IV.git`

Entre na pasta do projeto:

`cd Chapter-IV`

Instale o projeto:

`yarn install`

Iniciar testes:

`yarn test`

Crie uma imagem e faça o upload para o Docker utilizando os parâmetros especificados no arquivo docker-compose.yml:

`docker-compose up -d`

Execute as migrações no banco de dados:

`yarn typeorm migration:run`

---

### Para testar as funcionalidades da API e realizar requisições com sucesso, é recomendável o uso de uma aplicação de Cliente de API, como o Postman ou Insomnia.

![image](https://user-images.githubusercontent.com/91347602/232907354-81bfa735-8b77-45b0-a624-9964122a11bc.png)

### https://www.postman.com/downloads/

### https://insomnia.rest/download

### Para melhorar a visualização e o gerenciamento do banco de dados, é recomendado o uso do Beekeeper como aplicativo de gerenciamento de banco de dados.

![image](https://user-images.githubusercontent.com/91347602/236375566-de63d8af-1a10-4b52-aeba-30ea183f6e3e.png)

### https://www.beekeeperstudio.io/get
