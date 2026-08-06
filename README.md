# The Portuguese Jewish News — Design System

Design System editorial estático criado para o portal **The Portuguese Jewish News**.

O projeto apresenta os fundamentos visuais, componentes de interface e padrões editoriais da marca em uma página responsiva, totalmente em português.

## Características

- Tokens de cores, tipografia, espaçamento, raios, elevação e grid
- Temas claro e escuro com troca automática das logos
- Componentes de interface e seus diferentes estados
- Cards e composições para notícias
- Navegação, anúncios e rodapé
- Sistema de marca e regras de aplicação da identidade visual
- Efeitos de interação em links, títulos e botões
- Layout responsivo para computadores, tablets e celulares
- Acessibilidade com contraste e navegação semântica

## Tecnologias

O projeto utiliza somente tecnologias nativas da web:

- HTML5
- CSS3
- JavaScript
- Google Fonts: Raleway e Source Serif 4

Não utiliza React, TypeScript, Node.js, gerenciador de pacotes ou processo de compilação.

## Estrutura

```text
designer-system/
├── index.html       # Conteúdo e estrutura da página
├── styles.css       # Identidade visual, temas e responsividade
├── script.js        # Abas e alternância de tema
├── logo-light.png   # Logo utilizada no tema escuro
├── logo-dark.png    # Logo utilizada no tema claro
├── favicon.png      # Ícone do navegador
├── .nojekyll        # Desativa o processamento do Jekyll
└── README.md        # Documentação do projeto
```

## Executar localmente

Por ser um site estático, não é necessário instalar dependências ou gerar uma build.

Você pode abrir o arquivo `index.html` diretamente no navegador. Para evitar restrições do navegador ao carregar recursos locais, também é possível usar qualquer servidor HTTP estático.

Exemplo com Python:

```bash
python -m http.server 4173
```

Depois, acesse `http://127.0.0.1:4173/`.

## GitHub Pages

O GitHub Pages publica diretamente os arquivos da raiz da branch `main`.

Configuração recomendada:

1. Acesse **Settings → Pages** no repositório.
2. Em **Source**, selecione **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`.
4. Salve a configuração.

O arquivo `.nojekyll` informa ao GitHub Pages que o conteúdo deve ser servido como um site estático, sem processamento pelo Jekyll.

## Identidade visual

- Bordô: `#59111A`
- Dourado: `#998337`
- Interface: Raleway
- Conteúdo editorial: Source Serif 4

## Visualização publicada

[Abrir o Design System](https://brunocriacoes.github.io/designer-system/)

