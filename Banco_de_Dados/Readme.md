# O que é banco de Dados ?

Segundo Korth, um banco de dados "é coleção de dados inter-relacionados, representando informações sobre um domínio especifico", ou seja , sempre que for possível agrupar informações que se relacionam e tratam de um mesmo assunto, posso dizer que tenho um banco de dados.

Já um sistema de gerenciamento de **banco de dados (SGBD)** é um software que possui recursos capazes de manipular as informações do banco de dados e interagir com o usuário. Exemplos de SGBDs são: Oracle, SQL , DB2, PostgreSQL,MySQL o próprio Access ou Paradox, entre outros.

Os objetivos de um **sistema de banco de dados** são o de isolar o usuário dos detalhes internos do banco de dados (promover a abstração de dados) e promover a independência dos dados em relação às aplicações, ou seja, tornar independente da aplicação, a estratégia de acesso e a forma de armazenamento.

### Abstração de dados

O sistema de banco de dados deve garantir uma visão totalmente abstrata do banco de dados para o usuário, ou seja, para o usuário do banco de dados pouco importa qual unidade de armazenamento está sendo usada para guardar seus dados, contanto que os mesmos estejam disponíveis no momento necessário.

Esta abstração se dá em três níveis

- Nível de visão do usuário: as *partes do banco de dados* que o usuário tem acesso de acordo com a necessidade individual de cada usuário ou grupo de usuários;
- Nível conceitual: define quais os dados que estão armazenados e qual o relacionamento entre eles;
- Nível físico: é o nível mais baixo de abstração, em que define efetivamente de que maneira os dados estão armazenados.

### Projeto de banco de dados

Todo bom sistema de banco de dados deve apresentar um projeto, que visa a organização das informações e utilização de técnicas para que o futuro sistema obtenha boa performance e também facilite infinitamente as manutenções que venham a acontecer.

O projeto de banco de dados se dá em duas fases:

- Modelagem conceitual;
- Projeto lógico.

Estas duas etapas se referem a um sistema de banco de dados ainda não implementado, ou seja, que ainda não exista, um novo projeto. Para os casos em que o banco de dados já exista, mas é um sistema legado, por exemplo, ou um sistema muito antigo sem documentação, o processo de projeto de banco de dados se dará através da utilização de uma técnica chamada de Engenharia Reversa, que será visto em outra oportunidade.

### Modelo conceitual

É a descrição do BD de maneira independente ao SGBD, ou seja, define quais os dados que aparecerão no BD, mas sem se importar com a implementação que se dará ao BD. Desta forma, há uma abstração em nível de SGBD.

Uma das técnicas mais utilizadas dentre os profissionais da área é a abordagem entidade-relacionamento (ER), onde o modelo é representado graficamente através do diagrama entidade-relacionamento (DER)

### Modelo lógico

Descreve o BD no nível do SGBD, ou seja, depende do tipo particular de SGBD que será usado. Não podemos confundir com o Software que será usado. O tipo de SGBD que o modelo lógico trata é se o mesmo é relacional, orientado a objetos, hierárquico, etc.

#### Saiba mais sobre SQL

- Guias Banco de Dados
  Aqui você encontra o Guia de estudo ideal para aprimorar seus conhecimentos nos principais Banco de Dados do mercado. Escolha o seu e bons estudos!
- Banco de Dados para Programadores
  Neste guia você encontrará os principais conteúdos que você precisa estudar, como programador, para trabalhar com bancos de dados.
- Guia de Linguagem SQL:
  Neste Guia de Referência você encontrará todo o conteúdo que precisa para aprender sobre a SQL, linguagem de consulta estruturada utilizada por programadores e DBAs para a execução de consultas e comandos nos principais SGBDs do mercado.
- Canal Banco de Dados
  Além dos últimos posts da revista SQL Magazine, listamos os últimos artigos, vídeos e cursos sobre os principais banco de dados existentes hoje no mercado.
- Revista SQL Magazine 149
  Edição que tem como destaque o aprimoramento da sua auditoria: conheça o Oracle Audit Vault Server.

