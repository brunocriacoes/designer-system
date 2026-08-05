# The Portuguese Jewish News — Design System

Design System editorial criado para o portal **The Portuguese Jewish News**.

## Conteúdo

- Design Tokens: cores, tipografia, espaçamento, raios, elevação e grid
- Temas claro e escuro
- Componentes de interface e seus estados
- Cards e composições editoriais
- Navegação, anúncios e rodapé
- Sistema de marca e regras de aplicação da logo
- Apresentação responsiva em português

## Identidade

- Bordô: `#59111A`
- Dourado: `#998337`
- Interface: Raleway
- Texto editorial: Source Serif 4

## Desenvolvimento

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
```

## GitHub Pages

A versÃ£o estÃ¡tica publicÃ¡vel Ã© gerada em `docs/`:

```bash
npm run build:pages
```

O workflow `.github/workflows/deploy-pages.yml` publica essa versÃ£o a cada
push na branch `main`. No GitHub, configure **Settings > Pages > Source** como
**GitHub Actions**. Todos os recursos usam caminhos relativos e funcionam em
URLs de projeto, como `https://usuario.github.io/repositorio/`.

## Visualização publicada

[Abrir o Design System](https://portuguese-jewish-news-design-system.br-rafael.chatgpt.site/editorial-design-system)
