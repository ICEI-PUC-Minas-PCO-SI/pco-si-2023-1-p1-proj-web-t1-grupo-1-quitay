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
|Nutricionista, mora com os pais     | Saber quando e como usar o dinheiro                 | Mudar de cidade, morar sozinha |
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
RNF-001 | Permitir que o usuário cadastre seu usuário | ALTA
RNF-002 | Permitir que o usuário altere sua senha | ALTA
RNF-003 | Permitir que o usuário altere seus dados de cadastro | ALTA
RNF-004 | Permitir que o usuário cadastre suas despesas | ALTA
RNF-005 | Permitir que o usuário cadastre seus rendimnetos | ALTA
RNF-006 | Permitir que o usuário crie categorias de despesas, como alimentação, transporte, moradia, lazer, entre outras. | MEDIA
RNF-007 | permitir que o usuário estabeleça limites para cada categoria de despesa e receber alertas quando o limite for atingido ou ultrapassado | MEDIA
RNF-008 | Permitir acesso a sugestões de como economizar dinheiro em cada categoria de despesa. | MEDIA
RNF-009 | permitir que o usuário crie metas de economia para cada categoria de despesa | MEDIA

RNF-010 | Emitir um relatório de gastos e despesas | MÉDIA


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
