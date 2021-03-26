### **GITHUB FOLHA DE DICAS DE GIT**

Git é um sistema de controle de versão distribuído open source que facilita ações com o GitHub em seu notebook ou  desktop. Esta folha de dicas resume instruções comumente usadas via linha de comando do Git para referência  rápida.

##### **INSTALE O GIT** 

GitHub fornece clientes desktop que incluem uma interface gráfica  para as ações mais comuns em um repositório e atualiza automaticamente para a linha de comando do Git para cenários avançados.

**GitHub para Windows** 

https://windows.github.com

**CONFIGURE A FERRAMENTA**

Configure informações de usuário para todos os repositórios locais.

**$ git config --global user.name "[nome]"**

Configura o nome que você quer ligado as suas transações de  commit 

 $ **git config --global user.email "[endereco-de-email]"**

Configura o email que você quer ligado as suas transações de commit

**$ git config --global color.ui auto**

Configura o email que você quer ligado as suas transações de commit

 **CRIE REPOSITÓRIOS**

Inicie um novo repositório ou obtenha de uma URL existente

**$ git init [nome-do-projeto]**

Cria um novo repositório local com um nome específico

**$ git clone [url]**

Baixa um projeto e seu histórico de versão inteiro

**FAÇA MUDANÇAS**

Revise edições e crie uma transação de commit

**$ git status**

Lista todos os arquivos novos ou modificados para serem commitados.

**$ git diff**

Mostra diferenças no arquivo que não foram realizadas

**$ git add [arquivo]**

Faz o snapshot de um arquivo na preparação para versionamento.

**$ git diff --staged**

Mostra a diferença entre arquivos selecionados e a suas últimas  versões

**$ git reset [arquivo]**

Deseleciona o arquivo, mas preserva seu conteúdo.

**$ git commit -m "[mensagem descritiva]"**

Grava o snapshot permanentemente do arquivo no histórico de versão.

**MUDANÇAS EM GRUPO**

Nomeie uma série de commits e combine os esforços completos.

**$ git branch**

Lista todos os branches locais no repositório atua.

**$ git branch [nome-do-branch]**

Cria um novo branch

**$ git branch -b  [nome-do-branch]**

Cria um novo branch e entrar direto na branch.

**$ git checkout [nome-do-branch]**

Muda para o branch específico e atualiza o diretório de trabalho

**$ git merge [branch]**

Combina o histórico do branch específico com o branch atual

**$ git branch -d [nome-do-branch]**

Exclui o branch específico

**REVISE HISTÓRICO**

Navegue e inspecione a evolução dos arquivos do projeto

**$ git log**

Lista o histórico de versões para o branch atual.

**$ git log --follow [arquivo]**

Lista o histórico de versões para um arquivo, incluindo mudanças de  nome.

**$ git diff [primerio-branch]...[segundo-branch]**

Mostra a diferença de conteúdo entre dois branches.































