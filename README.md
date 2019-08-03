# Design Patterns

Cada Padrão descreve uma problema comum bem como a solução para o mesmo.

A ideia nao é mostrar como construir software e sim solucionar problemas comuns na sua construção.

## CAP 1

### Padrões de Criação (Creational):

- Padrões ligados à criação de objetos bem como o gerenciamento do seu ciclo de vida

### Padrões Comportamentais (Behavioral):

- Descreve como os objetos interagem um com os outros

### Padrões Estruturais (Structural):

- Estes padrões descrevem uma variedade de meios para adicionar funcionalidades a um objeto existente

Além da apresentação dos padões, devemos nos lembra que existem AntiPatter, ou seja, soluções que hajem exatamente de forma oposta, colocando mais complexidade à aplicação, como overengenering, código macarrônico, Lava Flow(Legado que nao se sabe se está em uso, nem se se pode deletar pois pode estar em uso) e tambem o USO EXCESSIVO e translocado de Design Patterns

## CAP 2

- No Javascript,todo objeto faz parte do escopo global da aplicação, no browser podemos ver isso no objeto 'window'.
- Como toda variável pode ser global,alterar seu comportamento pode ser fácil e perigoso, daí a necessidade de Padrões que encapsulem variáveis por exemplo.

## CAP 3 - Creational Patterns

Padrões ligados à criação de objetos bem como o gerenciamento do seu ciclo de vida

- Abstract Factory
- Builder
- Factory Method
- Singleton
- Prototype

### Abstract Factory
Responsável por criar kits de objetos sem saber os tipos concretos dos objeto;

### Builder
Algumas classes contém diferentes interfaces de implementação dependendo de como devem ser construidas. Em order para simplificar esse processo e encapsular o conhecimento de como tais classes sao construidas podemos utilizar de um Builder.