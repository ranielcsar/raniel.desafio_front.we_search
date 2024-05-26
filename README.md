# Desafio Frontend para Vaga na Mobiauto - Raniel César [2024]

### Sobre o desafio
O desafio consiste em criar um formulário no qual o usuário pode escolher a marca, modelo e ano de um veículo para consultar seu preço com base na Tabela Fipe

### Obs:
Acredito que adicionar biblioteca de verificação para os inputs, como Zod ou Yup, seria "over engineering",
visto que o usuário só poderá clicar em "Consultar preço" caso todos os inputs estejam com valor selecionado.
Assim como um redux, zustand ou algo do tipo para fazer o controle de estados.

Caso eu optasse por alguma dessas bibliotecas de controle de estado, usaria o Zustand.
Ele resolve algums problemas mas o principal é que o ContextAPI não faz distinção ao atualizar uma propriedade,
ele atualiza como um todo. Levando a problemas de performance pois áreas que não tiveram seu valor atualizado
são re-renderizadas também.

Abaixo usei a ContextAPI por se tratar de um formulário simples.

---

### Tecnologias usadas [branch principal]:
- NextJS 14 [App folder e Server components]
- React hook form
- MaterialUI
- TailwindCSS

### Tecnologias usadas [branch pages]:
- NextJS 14 [Pages folder]
- ContextAPI
- React hook form
- MaterialUI
- TailwindCSS
