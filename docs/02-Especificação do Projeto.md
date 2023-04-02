# Especificações do Projeto

A Quitay é uma aplicação Web que ajuda as pessoas a gerenciar suas finanças e lidar com seus boletos pendentes. Através de uma interface intuitiva, o usuário pode inserir suas informações financeiras e receber sugestões personalizadas para seus problemas, como evitar multas e juros por atrasos de pagamento, economizar dinheiro e priorizar contas.

Este projeto utiliza tecnologias modernas e eficientes para garantir a melhor experiência do usuário. No front-end, HTML, CSS e Javascript são usados para criar uma interface intuitiva e agradável. No back-end, Javascript e o CRUD JSON Server são usados para gerenciar os dados e garantir a segurança e confiabilidade do sistema.

## Personas

José: Tem 31 anos e trabalha como motorista de aplicativo, é solteiro e gosta de jogar futebol com os amigos nos fins de semana.
Sua principal motivação é montar um pequeno negócio e ter mais estabilidade financeira. Ele tem insegurança em relação a investir seu dinheiro de maneira eficiente e tem medo de não conseguir juntar o suficiente para realizar seus planos.

Júlia: Tem 22 anos e é nutricionista recém-formada, é solteira, mora com os pais e gosta de praticar yoga e meditação. Sua principal motivação é conseguir um emprego na sua área de atuação e ter independência financeira. Ela tem insegurança em relação a administrar seu dinheiro e tem medo de não conseguir se sustentar sozinha.

João: Tem 35 anos e é gerente de vendas em uma empresa de tecnologia, é casado e tem dois filhos. Ele gosta de viajar com a família e praticar esportes ao ar livre.
Sua principal motivação é garantir um futuro financeiro estável para sua família. Ele tem insegurança em relação a economizar dinheiro e investir de maneira eficiente para sua aposentadoria.

Luciana: Tem 40 anos e é dona de casa e mãe de dois filhos. É casada e gosta de cozinhar e fazer artesanato. Ela é responsável por pagar as contas da casa e está sempre procurando maneiras de economizar dinheiro. Sua principal motivação é garantir que sua família tenha uma vida confortável e sem preocupações financeiras. Ela tem insegurança em relação a economizar dinheiro e fazer escolhas financeiras inteligentes.

Ricardo: Tem 30 anos e trabalha como freelancer em tempo integral. É solteiro e gosta de tocar guitarra e sair com os amigos. Sua principal motivação é ter estabilidade financeira e conseguir pagar suas contas todos os meses. Ele tem insegurança em relação a gerenciar sua renda variável e tem medo de não conseguir se sustentar.

Mariana: Tem 28 anos e é recém-formada em direito. É solteira e gosta de ler livros e assistir filmes. Ela trabalha em um escritório de advocacia. Sua principal motivação é pagar seus empréstimos estudantis e ter mais liberdade financeira. Ela tem insegurança em relação a economizar dinheiro e fazer escolhas financeiras inteligentes.

Carlos: Tem 50 anos e é aposentado. Ele gosta de pescar e jogar cartas com os amigos. Ele vive com uma renda fixa limitada. Sua principal motivação é garantir que possa viver confortavelmente com sua renda fixa limitada. Ele tem insegurança em relação a gerenciar suas finanças e tem medo de não conseguir pagar suas contas todos os meses.

## Histórias de Usuários


|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Usuário: José, motorista de aplicativo, 31 anos e solteiro  | Dicas de investimento           | Montar um pequeno negócio e se estabilizar financeiramente  |
| Usuário: Júlia, nutricionista, 22 anos, morando com os pais     | Saber quando e como usar o dinheiro    | Ter independência financeira para não depender dos pais |
| Usuário: João, gerente de vendas, 35 anos, casado e com 2 filhos | Dicas de economia | Garantir um futuro financeiro estável para a sua família |
| Usuário: Luciana, dona de casa, 40 anos e mãe de 2 filhos | Formas de pagar as contas| Trazer conforte para a família e não ter preocupações financeiras |
| Usuário: Ricardo, free lancer em tempo integral, 30 anos e solteiro | Gerenciar investimentos | Estabilidade financeira, pagar as contas |
| Usuário: Mariana, recém formada em direito, 28 anos e solteira | Maneiras de economizar dinheiro | Pagar empréstimos estudantis, liberdade financeira|
| Usuário: Carlos, aposentado com renda fixa limitada, 50 anos | Gerenciar finanças | Viver confortavelmente com renda fixa|


## Requisitos.

### Requisitos Funcionais

|ID      | Descrição do Requisito  | Prioridade | Responsável |
|--------|-----------------------------------------|------|-----------|
| RF-001 | A aplicação deve permitir que o usuário cadastre sua conta | ALTA | Kerley |
| RF-002 | A aplicação deve permitir que o usuário altere sua senha | ALTA | Kerley |
| RF-003 | A aplicação deve permitir que o usuário altere seus dados de cadastro | ALTA | Kerley |
| RF-004 | A aplicação deve permitir que o usuário cadastre suas despesas | ALTA |   Sandy    |
| RF-005 | A aplicação deve permitir que o usuário cadastre seus rendimentos | ALTA |   Pedro   |
| RF-006 | A aplicação deve permitir que o usuário crie categorias de despesas, como alimentação, transporte, moradia, lazer, entre outras. | MEDIA |   Lucas   |
| RF-007 | A aplicação deve permitir que o usuário estabeleça limites para cada categoria de despesa e receber alertas quando o limite for atingido ou ultrapassado | MEDIA |   Bruna   |
| RF-008 | A aplicação deve permitir acesso a sugestões de como economizar dinheiro em cada categoria de despesa. | MEDIA |   Sandy   |
| RF-009 | A aplicação deve permitir que o usuário crie metas de economia para cada categoria de despesa | MEDIA |   Lucas   |
| RF-010 | Emitir um relatório de gastos e despesas | MEDIA | Samuel |  
| RF-011 | Permitir que o usuário defina prioridades para suas despesas, indicando quais são as mais importantes | MEDIA |  Pedro   |


### Requisitos não Funcionais

|ID       | Descrição do Requisito  |Prioridade | 
|---------|--------------------------------|---------|
| RNF-001 | Usabilidade: a aplicação não deve ser difícil de usar e deve ter uma interface intuitiva para que os usuários possam gerenciar suas finanças com facilidade. | MEDIA | 
| RNF-002 | Segurança: a aplicação não deve ser insegura e não deve expor os dados pessoais dos usuários, incluindo senhas e informações financeiras.| ALTA | 
| RNF-003 | Escalabilidade: a aplicação não deve ser limitada em escalabilidade, permitindo que suporte um grande número de usuários e cresça com o tempo. | MEDIA |
| RNF-004 | Confiabilidade: a aplicação não deve ser pouco confiável e instável, permitindo erros e falhas que possam levar à perda de dados. | ALTA |
| RNF-005 | Documentação: a aplicação não deve ter uma documentação pouco clara e detalhada, dificultando para os usuários entender como usá-la e solucionar problemas. | MEDIA |


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

