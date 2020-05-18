<h1 align="center">
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">Rocketshoes - Frontend</h3>

<p align="center">Código do desafio do 7º módulo do Bootcamp GoStack 🎓</p>

## 💻 Projeto

RocketShoes é uma aplicação de compras online. A aplicação Web e a aplicação mobile podem ser usadas pelos usuários que querem efetuarem compras de maneira simples e fácil.

### <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" width="30px" /> Redux
  
####  O que é Redux? 
  1. Biblioteca que implementa Arquitetura Flux; 
  2. Controle de estados globais; 
  3. Quando utilizar o Redux?;
  4. Meu estado tem mais de um “dono”;
  5. Meu estado é manipulado por mais componentes;
  6. As ações do usuário causam efeitos colaterais nos dados
  7.Exemplos: Carrinho de compras, dados do usuário, player de música, etc

#### Princípios 
1.Toda action deve possuir um “type”; 
2. O estado do Redux é o único ponto de verdade; 
3. Não podemos mutar o estado do Redux sem uma action; 
4. As actions e reducers são funções puras, ou seja, não lidam com side-effects assíncronos; 
5. Qualquer lógica síncrona para regras de negócio deve ﬁcar no reducer e nunca na action; 
6. Nem toda aplicação precisa Redux, inicie sem ele e sinta a necessidade depois;

#### A store
"store" é o nome dado pelo Facebook para o conjunto de estados da sua aplicação. Vamos pensar na store como um grande centro de informações, que possui disponibilidade para receber e entregar exatamente o que o seu componente requisita (seja uma função, ou uma informação propriamente dita). Tecnicamente, a store é um objeto JavaScript que possui todos os estados dos seus componentes.

#### Os reducers
Cada dado da store deve ter o seu próprio reducer, por exemplo: o dado "user" teria o seu reducer, chamado "userReducer". Um reducer é encarregado de lidar com todas as ações, como algum componente pedindo para alterar algum dado da store.


#### As actions
Actions são responsáveis por requisitar algo para um reducer. Elas devem ser sempre funções puras, o que, dizendo de uma forma leiga, quer dizer que elas devem APENAS enviar os dados ao reducer, nada além disso.

##### Exemplo

```

//reducer inicial

[]

// Action Add to cart
{   
  type: "ADD_TO_CART",   
    product: {     
      id: 1,     
      title: "Novo produto",     
      price: 129.9   
    } 
 }

//reducer após

  
[   
  {     
    id: 1,     
    title: "Novo produto",     
    price: 129.9,     
    amount: 1,     
    priceFormatted: "R$129,90"   
  }
]


//action update ammount

{   
  type: “UPDATE_AMOUNT”,   
  product: 1,   
  amount: 5, 
}

//reducer final

[   
  {    
    id: 1,     
    title: "Novo produto",     
    price: 129.9,     
    amount: 5,    
    priceFormatted: "R$129,90"   
  } 
]
 
```

## 🚀 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd RocketShoes`;
3. Rode `yarn` para instalar as dependências;
4. Rode `yarn start` para iniciar a aplicação.
