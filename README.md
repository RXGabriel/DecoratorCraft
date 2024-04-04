# DecoratorCraft

## Objetivo
Este projeto Node.js demonstra como implementar um logger de requisições HTTP usando o padrão de projeto Decorator. O logger intercepta requisições HTTP recebidas, registra logs delas e, após o processamento, registra o sucesso ou falha da requisição. Além disso, ele modifica os cabeçalhos de resposta antes de enviá-los de volta para o cliente.

## Características
- Padrão de Projeto Decorator: O projeto utiliza o padrão de projeto Decorator para estender a funcionalidade do módulo HTTP nativo no Node.js. Ele adiciona uma função que intercepta requisições recebidas, registra logs e modifica os cabeçalhos de resposta.
- Logging: Cada requisição HTTP recebida é registrada quando é recebida. Após o processamento da requisição, o logger registra se a requisição foi bem-sucedida ou resultou em um erro.
- Modificação de Cabeçalhos: O logger também modifica os cabeçalhos de resposta adicionando informações adicionais, como a origem da interceptação.

## Instalação

1. Clone o repositório:

```bash
   git clone https://github.com/RXGabriel/DecoratorCraft.git
   cd DecoratorCraft
```

2. Instale as dependências:

```bash
npm install
```

## Uso
Para iniciar o DecoratorCraft, execute os seguintes comandos:

 iniciar o servidor:
```bash
  npm run start
```
rodar os testes:
```bash
npm run test
```
gerar relatório de cobertura de teste:
```bash
npm run cov
```