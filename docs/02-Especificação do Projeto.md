# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

O Quitay é uma aplicação Web que ajuda as pessoas a gerenciar suas finanças e lidar com os seus boletos pendentes. Através de uma interface intuitiva é possível que o usuário insira suas informações financeiras e receba sugestões personalizadas com o seu problema, por exemplo: como evitar multas e juros por atrasos de pagamento, como ecomizar seu dinheiro e qual conta priorizar. 

## Personas

José tem 31 anos, é motorista de aplicativo. Pensa em montar um pequeno negócio e está trabalhando em jornada dupla para juntar dinheiro. Precisa de auxílio para investir melhor seus rendimentos. 

Júlia tem 22 anos, é nutricionista recém-formada, desempregada e mora com os pais. Está pensando em mudar de cidade para iniciar em um novo trabalho, mas tem receio de não conseguir administrar o dinheiro. 

João, 35 anos, gerente de vendas em uma empresa de tecnologia. Ele ganha um bom salário e tem uma família para sustentar. Ele está procurando maneiras de economizar dinheiro e investir em sua aposentadoria.

Luciana, 40 anos, dona de casa e mãe de dois filhos. Ela é responsável por pagar as contas da casa e está sempre procurando maneiras de economizar dinheiro.

Ricardo, 30 anos, freelancer em tempo integral. Ele tem uma renda variável e precisa gerenciar suas finanças com cuidado para garantir que possa pagar suas contas todos os meses.

Mariana, 28 anos, recém-formada em direito e trabalhando em um escritório de advocacia. Ela está procurando maneiras de economizar dinheiro para pagar seus empréstimos estudantis.

Carlos, 50 anos, aposentado e vivendo com uma renda fixa limitada. Ele precisa gerenciar suas finanças com cuidado para garantir que possa pagar suas contas todos os meses.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Motorista de aplicativo  | Dicas de investimento           | Melhoras os rendimentos               |
|Nutricionista, mora com os pais     | Saber quando e como usar o dinheiro    | Mudar de cidade, morar sozinha |
|Gerente de vendas | Dicas de economia | Investir em sua aposentadoria |
|Dona de casa, mãe de 2 filhos | Formas de pagar as contas| Economizar dinheiro |
|Free lancer em tempo integral | Gerenciar investimentos | Pagar as contas |
| Recém formada em direito | Maneiras de economizar dinheiro | Pagar empréstimos estudantis |
| Aposentado com renda fixa limitada | Gerenciar finanças | Pagar as contas|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
RF-001 | Permitir que o usuário cadastre seu usuário | ALTA
RF-002 | Permitir que o usuário altere sua senha | ALTA
RF-003 | Permitir que o usuário altere seus dados de cadastro | ALTA
RF-004 | Permitir que o usuário cadastre suas despesas | ALTA
RF-005 | Permitir que o usuário cadastre seus rendimnetos | ALTA
RF-006 | Permitir que o usuário crie categorias de despesas, como alimentação, transporte, moradia, lazer, entre outras. | MEDIA
RF-007 | permitir que o usuário estabeleça limites para cada categoria de despesa e receber alertas quando o limite for atingido ou ultrapassado | MEDIA
RF-008 | Permitir acesso a sugestões de como economizar dinheiro em cada categoria de despesa. | MEDIA
RF-009 | permitir que o usuário crie metas de economia para cada categoria de despesa | MEDIA
RF-010 | Emitir um relatório de gastos e despesas | MEDIA
RF-011 | Permitir que o usuário defina prioridades para suas despesas, indicando quais são as mais importantes | MEDIA


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|--------------------------------|----|
|RNF-001 | Usabilidade: a aplicação deve ser fácil de usar e ter uma interface intuitiva para que os usuários possam gerenciar suas finanças com facilidade | MEDIA|
|RNF-002 | Segurança: a aplicação deve ser segura e proteger os dados pessoais dos usuários, incluindo senhas e informações financeiras | ALTA|
|RNF-003 | Escalabilidade: a aplicação deve ser escalável, permitindo que suporte um grande número de usuários e cresça com o tempo | MEDIA|
|RNF-004 | Confiabilidade: a aplicação deve ser confiável e estável, evitando erros e falhas que possam levar à perda de dados | ALTA|
|RNF-005 | Documentação: a aplicação deve ter uma documentação clara e detalhada, para que os usuários possam entender como usá-la e solucionar problemas | MEDIA|


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir:

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01 | Orçamento limitado: a aplicação deve ser projetada para trabalhar dentro de um orçamento limitado (sabendo que nossa aplicação não tem custo financeiro somete recurso tempo dos participantes) e utilizar recursos de forma eficiente|
|02 | Disponibilidade de dados: a aplicação deve ser capaz de trabalhar com as informações financeiras fornecidas pelos usuários, sem depender de outras fontes de dados|
|03 | Tempo de desenvolvimento: a aplicação deve ser desenvolvida dentro de um prazo estabelecido, de acordo com as demandas estabelecidas pelo professor da matéria|
|04 | Compatibilidade de plataforma: a aplicação deve ser compatível com navegadores web|
|05 | Confiabilidade e segurança: a aplicação deve ser desenvolvida para ser confiável e segura, evitando problemas de privacidade, segurança e desempenho|
|06 |Necessidades de treinamento: a aplicação deve ser projetada para ser facilmente compreendida e utilizada pelos usuários, sem a necessidade de treinamento complexo|

