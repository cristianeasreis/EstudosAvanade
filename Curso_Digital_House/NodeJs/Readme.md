### Node Js

**Um pouco de História**

Node.Js nasceu da cabeça do Ryan Dahl em 2009 que pegou JavaScript, para usar uma linguagem dentro do ambiente que executa JavaScript.

**O que o Node.js veio resolver ?**

Ao observar a barra de progresso do flickr, tinha que fazer várias requisições para o back-end.E verificou que as tecnologias da época não dava um bom suporte aos processos de I/O.

Então o que é o Node.js ?

- Plataforma open-source que permite a execução da linguagem JavaScript do lado do servidor.
- Composto da v8 que é um interpretador JavaScript desenvolvido pelo Google para utilizar no Google Chrome, para ser interpretado no Browser de uma forma mais rápida.
- Libuv é uma biblioteca multiplataforma com foco assíncrono, que foi criada inicialmente para utilizar no Node, porém já é utilizada em outras linguagens também.
- Motor v8 + libuv permite que o Node processe requisições mais rápidas.

Características do Node.js

- Arquitetura Event Loop - Call Stack

- Single - Thread

- Non-blocking I/O, diferente  das linguagens C#, JAVA, PHP E OUTRAS

- Módulos próprios

   HTTP , DNS , FS, BUFFER

  





O Node.Js é uma linguagem single thread, em segundo plano, usa vários threads para executar código assíncrono. O Node.Js é non-blocking (Sem bloqueio), o que significa que todas as funções (Retornos de chamada) são delegadas ao loop de eventos e são (ou podem ser)executadas por diferentes segmentos.











