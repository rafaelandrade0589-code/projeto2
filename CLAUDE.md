# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Site institucional da **Worknet Eventos** — empresa de credenciamento e tecnologia para eventos corporativos com mais de 20 anos de mercado.

- **Contato:** eventos@workneteventos.com.br | (11) 96779-2549
- **WhatsApp:** https://wa.me/5511967792549
- **Instagram:** https://www.instagram.com/worknet_eventos/
- **CNPJ:** 17.964.274/0001-01

## Estrutura

Tudo que importa está em `website/`:

```
website/
├── index.html                  # Home
├── *.html                      # Páginas de serviços e institucionais
└── assets/
    ├── css/style.css           # Único arquivo CSS global
    ├── js/components.js        # Navbar e footer compartilhados (renderizados via JS)
    ├── js/main.js              # Scroll animations, counter, mobile menu
    ├── logo.png                # Logo principal
    ├── logos/                  # Logos de clientes para carrossel
    └── images/                 # Imagens das páginas
```

Não há build, bundler, npm dev server, nem framework. Para visualizar o site, abra os HTML diretamente no browser ou use um servidor estático simples:

```bash
cd website && python3 -m http.server 8080
```

## Arquitetura do Site

### Componentes Compartilhados (`components.js`)

Navbar e footer são injetados via JavaScript em todos os HTMLs. Toda página deve ter:

```html
<div id="navbar-placeholder"></div>
<!-- conteúdo da página -->
<div id="footer-placeholder"></div>
<script src="assets/js/components.js"></script>
<script src="assets/js/main.js"></script>
```

`components.js` auto-executa `renderNavbar()` e `renderFooter()` no `DOMContentLoaded`. As constantes globais de contato (`WHATSAPP_LINK`, `EMAIL`, `PHONE`, `INSTAGRAM`) e o array `SERVICES` (menu de serviços) estão definidos no topo de `components.js` — altere lá para propagar para todo o site.

### CSS (`style.css`)

Design system baseado em CSS custom properties. Paleta principal:

```css
--navy: #0d1b2a      /* fundo principal */
--blue: #2e6ea6      /* azul de destaque */
--blue-light: #5ba3d9
--text: #e8eef4
```

Fontes: **Plus Jakarta Sans** (headings) e **DM Sans** (corpo).

Padrão de animação de entrada: classe `.fade-up` + `.visible` (adicionada pelo IntersectionObserver em `main.js`).

### Páginas de Serviços

Cada serviço tem sua própria página HTML com estilos `<style>` inline no `<head>` (estilos específicos da página) mais o `style.css` global. Não há sistema de templates — cada página é independente.

### Mobile Menu

Lógica de hamburger, mega-menu e submenu está em `main.js` (a partir da linha ~40). Bugs de mobile já foram corrigidos — não altere essa lógica sem testar em viewport ≤ 968px.

## Adicionando uma Nova Página

1. Copie uma página de serviço existente como base (ex: `credenciamento.html`)
2. Adicione o item no array `SERVICES` em `components.js` — ele aparece automaticamente no mega-menu e footer
3. Mantenha a estrutura: `navbar-placeholder` → conteúdo → `footer-placeholder` → scripts

## Imagens e Logos

- Imagens externas: Unsplash com parâmetros `?w=800&q=80` (otimizado)
- Logos de clientes: `assets/logos/*.png` — usados no carrossel de `depoimentos.html`
- Logo da Worknet: `assets/logo.png` (formato PNG, não SVG)
