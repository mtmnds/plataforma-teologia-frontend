# 1. Estrutura do projeto final

## 1.1. Contexto:
Desenvolver uma aplicação de acordo com o contexto de Business Agility e de acordo com os seguintes corpos de conhecimento:
* Agile.
* DevOps.
* Lean product development.

Objetivo:
* Entregar sistemas de valor considerando o lead-time mais sustentável com o menor prazo.


## 1.2. Entregas:
* Código fonte: Link do repositório.
* Readme: Documentação e diretrizes para rodar o projeto.
* Arquitetura CI/CD: Vídeo não listado no Youtube explicando as configurações.
* Apresentação dos slides 8 ao 13: Vídeo não listado com a apresentação.


## 1.3. Especificação do desenvolvimento:
* OKR estratégico e OKR de equipe (de produto).
* Desenvolvimento de uma infraestrutura com DevOps para automatizar os serviços de CI/CD, visando aligidade para colocar o produto em produção com cobertura de testes que garanta a qualidade e satisfação do cliente.
* Trabalhar com containers (ou caso não utilize, explicar os aspectos que garantam a qualidade e utilização das pipelines).
* Planejar o projeto seguindo o Scrum e, Monitorar e controlar o projeto segundo o Lean e Kanban.
* Implementar o software segundo: User Story, BDD, TDD e Agile Testing.
* Desenvolver a aplicação baseada em padrões arquiteturais (Clean Architecture) e padrões de projeto (DDD e SOLID).


## 1.4. Conteúdo da apresentação:
* Slide 1: Logo, título do projeto e os nomes dos integrantes da equipe.
* Slide 2: OKRs estratégicos e OKRs da equipe.
* Slide 3: Visão do produto.
* Slide 4: Roadmap do produto.
* Slide 5: Backlog e priorização.
* Slide 6: Arquitetura e design de software.
* Slide 7: Padrões de projeto e reúso de código.
* Slide 8: Visão de Business Agility - Portfolio, Programas e Projetos.
* Slide 9: Estrutura para inovação e business agility.
* Slide 10: Modelo de negócios e estudo de viabilidade.
* Slide 11: Dashboard de métricas - Business Agility.
* Slide 12: Análise SWOT, Lições aprendidas - Business Agility.
* Slide 13: Considerações finais.


# 2. Build e execução

## 2.1. Requisitos:
* Node 18.16.1, ou superior com retrocompatibilidade.
* Angular CLI 16.0.6, ou superior com retrocompatibilidade.
* Docker 24.0.2, ou superior com retrocompatibilidade.

> Obs.: Para instalar o angular CLI basta utilizar o comando: "npm install -g @angular/cli".

## 2.2. Build do projeto:
Executar o comando abaixo na pasta raiz do projeto:
```
ng build --configuration=production
```

## 2.3. Criação da imagem:
Executar o comando abaixo na pasta raiz do projeto:
```
docker build --tag=plataforma-teologia-frontend:latest .
```

## 2.4. Rodar a aplicação:
Executar o comando abaixo na pasta raiz do projeto:
```
docker run -p8886:80 plataforma-teologia-frontend:latest
```

> Obs.: O comando "-p8886:80" mapeia a porta local 8886 para a porta 80 dentro do container, ou seja, para consumir a aplicação será necessário abrir o navegador na porta 8886 e o container se encarregará de fazer o redirecionamento para a porta 80.
> Exemplo de URL: http://localhost:8886