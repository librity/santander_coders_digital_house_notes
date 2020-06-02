# Projeto Doações (donations API):

☐ Teremos um Usuário Principal (terá possibilidade de se cadastrar)
☐ O usuário pode a criar solicitação de doação
☐ O usuário pode realizar uma doação (resolver uma solicitação existente).

## Planejamento Banco de Dados:

### usuarios

- id
- nome
- email
- telefone

### trocas

- id
- idDoador
- idRecptor
- status

### item_trocas

- idTroca
- idItem

### itens

- id
- nome
- descricao (edited)
