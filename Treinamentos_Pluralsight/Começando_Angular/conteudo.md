## **Conteudo Começando Angular**

#### **Introdução**

> Angular é uma estrutura JavaScript para construir aplicativos doo lado cliente usando HTML,CSS e TypeScript, que é um superconjunto tipado de JavaScript.
>
> Por que Angular e não algum framework JavaScript?
>
> E existem muitas estruturas JavaScript por aí.
>
> **EXPRESSIVE HTML**
>
> Angular torna nosso HTML , mais expressivo, Ele capacitou nosso HTML como condições se, loops para e variáveis locais.
>
> **POWERFUL DATA BINDING**
>
> Angular tem uma vinculação de dados poderosos, e podemos exibir facilmente campos de nosso modelo de dados, rastreou alterações e processar atualizações do usuário.
>
> **MODULAR BY DESIGN**
>
> Angular promove modularidade por design.
>
> Nossos aplicativos se tornam um conjunto de blocos de construção, tornando mais fácil e reutilizar conteúdo.
>
> **BUILT-IN BACK-END INTEGRATION**
>
> E o angular tem suporte integrado para comunicação com um serviço da back-end , Isso torna-se mais fácil para nossos aplicativos se integrarem a um serviço de back-end e postar dados ou executar a lógica de negócios do lado do servidor.
>
> Não é de admirar que o Angular seja tão popular entre milhões de desenvolvedores da web.
>
> Com tantos desenvolvedores já usando o AngularJS.
>
> Por que precisamos de um novo Angular?
>
> O Angular foi desenvolvido para ser rápido.
>
> Possui carregamentos iniciais mais rápidos.
>
> Detecção de alterações mais rápidas e tempos de renderização aprimorados.
>
> Angular é Moderno ele aproveita os recursos fornecidos nos padrões JavaScript mais recentes e além , como classes.
>
> Módulos e decoradores, mas suporte oferece a navegadores novos e legados.
>
> O Angular tem uma API simplificada. Ele tem menos diretivas integradas para aprender.
>
> ligações mais simples e uma contagem geral de conceitos mais baixos, e o angular aumenta nossa produtividade para melhorar nosso fluxo de trabalho diário.
>
> **Anatomy of an Angular Application**
>
> Um aplicativo é composto por um conjunto decomponentes e serviços que fornecem esses componentes.
>
> **Então , o que é um componente angular ?**
>
> **COMPONENT = TEMPLATE + CLASS + Metadata**
>
> ​												**Properties**
>
> ​											     **Methods**
>
> Cada componente é composto por um modelo, que é o HTML do fragmento da interface do usuário que defini uma visualização para o aplicativo.
>
> Adicione a isso uma classe para o código associado à exibição.
>
> Uma classe contém como propriedades ou elementos de dados, disponível para uso na exibição e métodos que executam ações para a exibição, como responder a um clique no botão.
>
> Um componente também possui metadados, que informações fornecem sobre o componente ao Angular.
>
> São esses metadados que identificam a classe como um componente Angular.
>
> **Portanto, um componente é uma visualização definida como um modelo.**
>
> É um código associado definido como uma classe e informações adicionais definidas com metadados.
>
> **GitHub Repository**
>
> Deborahk / Angular- GettingStarted.
>
> **Sample Application Architecture**
>
> Vamos dividir o aplicativo de amostra em componentes e serviços.
>
> Para a página de boas -vindas , construiremos m componente de boas-vindas.
>
> Para o Produto página de lista , vamos construir um componente de lista de produtos.
>
> lembre-se que teve uma bela exibição visual de estrelas para nossas classificações.
>
> Queremos reutilizar esse recurso então vamos construir um componente estrela separado.
>
> Clicar em um produto na página Lista de produtos exibiu os detalhes do produto.
>
> Vamos construir um componente para isso também e reutilizar o componente estrela.
>
> Então precisamos de que um componente de aplicativo que amarre como peças de nossa aplicação.
>
> E nosso obtém dados, então queremos um serviço de dados do produto.
>
> Por último precisamos de um arquivo index.html.
>
> **First Things First**
>
> Primeiras coisas primeiro.
>
> Antes de começarmos a codificar com Angular, existem algumas etapas preparatórias.
>
> Configuramos o que precisa trabalhar com o Angular.
>
> Um pouco de preparação ajuda muito pra aventura de sucesso.
>
> TypeScript é a linguagem que usamos ao trabalhar com Angular.
>
> Vamos dar uma olhada no que é o TypeScript, Vamos falar sobre JavaScript.
>
> JavaScript - é a linguagem da web e é executado por todos os navegadores.
>
> O padrão de especificação da linguagem JavaScript é oficialmente denominado ECMAScript ou ES.Até recentemente, como versões ES eram definidas por um número sequencial.
>
> ES3 - é compatível com navegadores mais antigos.
>
> ES5 - é compatível com a maioria dos navegadores modernos.
>
> A especificação ES6 , foi renomeada para ES2015 e introduziu muito novos recursos importantes, como classes a funções de seta.
>
>  ES 2015 (Formerly Known as ES 6)
>
> - Classes
> - Arrow Functions
>
> Desde então , uma nova versão da especificação é lançada a cada ano,qualquer recurso JavaScript mais recente que usarmos.
>
> Mas um navegador não é navegador compatível deve primeiro ser transpilado. O que isso significa ?
>
> Os recursos JavaScript mais recentes em nosso código deve ser compilados por uma ferramenta que converte o sintaxe JavaScript mais recente em uma sintaxe TypeScript é uma linguagem de código aberto desenvolvido pela Microsoft, é um superconjunto de JavaScript.
>
> O que significa que todo JavaScript e TypeScript é válido.
>
> O código TypeScript transpila para JavaScript simples.
>
> O que isso significa ?
>
> O código desenvolvida com o TypeScript deve ser compilado e converter para uma sintaxe JavaScript comparável antes de o navegador , dessa forma , nós como desenvolvedores. Obtemos os benefícios dos recursos do TypeScript durante o desenvolvimento.
>
> E o navegador ainda obtém o código que eles entendem , Um dos  principais benefícios do TypeScript é uma tipagem forte, o que significa que tudo tem um tipo de dados.
>
> Por causa da forte tipagem , o TypeScript tem ótimas ferramentas.
>
> Incluindo documentação embutida, verificação de sintaxe,navegação de código e refatoções avançadas. Portanto o TypeScript nos ajuda a raciocinar melhor sobre nosso código.
>
> E o TypeScript implementa a orientação a objetos baseados na classe ES2015,e muito mais.
>
> Ele implementa aulas, Interfaces e heranças, portanto se você tiver experiência com uma linguagem de programação orientada a objetos, como C# ou usar TypeScript pode parecer muito natural para você.
>
> **TypeScript Playground**
>
> https://www.typesriptlang.org/play
>
> Este site permite que você faça codificação ao vivo com TypeScript, consultar o JavaScript transpilado e executar o resultado tudo sem instalar nada.
>
> **Installing What We need** 
>
> 