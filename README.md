# Currículo Interativo — Lucas Miron Bradacz

Trabalho da Unidade I (Webapps): página estática interativa desenvolvida com
HTML5, CSS3 e JavaScript puro (sem frameworks ou bibliotecas externas).

## Estrutura do projeto
```
/curriculo/
├── index.html
├── style.css
├── script.js
├── README.md
└── /media/
    ├── lucas.jpeg      → foto de perfil
    ├── Surpreso.png    → favicon (ícone da aba do navegador)
    ├── Magnus.jpg      → captura de tela do projeto Magnus Codex
    └── CapaLivro.png   → captura de tela do projeto Coletânea Literária
```

## Seções da página
- **Início** — foto, nome e apresentação, com botão de saudação.
- **Sobre mim** — breve texto sobre formação e interesses.
- **Habilidades** — tecnologias e competências, em formato de chips.
- **Projetos** — Magnus Codex e Coletânea Literária, cada um com botão
  para exibir/ocultar uma captura de tela.
- **Formação e Experiência** — graduação em Ciência da Computação (UNOESC)
  e experiência atual como Engenheiro de Software na 7AZ Bemobi.
- **Contato** — formulário de nome/e-mail, links de e-mail e GitHub.

## HTML — estrutura semântica
Uso de `nav`, `header`, `main`, `section`, `article` e `footer`, com
títulos (`h1`/`h2`/`h3`), parágrafos, listas, links externos e um
formulário com campos de nome e e-mail.

## CSS — estilização
- Arquivo externo (`style.css`), organizado por blocos e comentado.
- Layout construído com Flexbox (menu, chips de habilidades, listas).
- Paleta de cores e fontes centralizadas em variáveis (`:root`).
- Menu fixo no topo da página (`position: sticky`) e rolagem suave ao
  clicar nos links (`scroll-behavior: smooth`).
- Cards de projeto e de formação com sombra e borda colorida na lateral.
- Efeitos de hover em links, botões e chips.
- Responsividade básica para telas menores (`@media`).

## JavaScript — funcionalidades
- Alerta de boas-vindas ao clicar em um botão (`alert()`).
- Exibir/ocultar a captura de tela de cada projeto individualmente
  (`addEventListener` + `classList.toggle`, um botão por card).
- Formulário que captura o nome digitado e atualiza dinamicamente o
  título da página e uma mensagem de saudação (`innerText`).
- Botão que alterna a cor de fundo da página.
- Contador de visitas persistente, salvo no navegador (`localStorage`).
- Ano atual exibido automaticamente no rodapé.

## Publicação
Página publicada em: **[(https://lucasbradacz.github.io/Meu-Curriculo/)]**

Publicado via [GitHub Pages]