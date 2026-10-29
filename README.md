# Portfólio — Felipe

Site estático (HTML, CSS e JavaScript puros), sem dependências nem serviços externos.

```
index.html        textos de todas as seções
css/style.css     visual (cores no topo, em :root)
js/config.js      contatos (e-mail, WhatsApp, LinkedIn, GitHub)
js/main.js        menu do celular, botões de contato e animações
assets/favicon.svg
```

## Como abrir e testar

- Mais simples: dê dois cliques em `index.html`.
- Para testar como no servidor, na pasta do projeto:
  `python -m http.server 8000` e abra `http://localhost:8000`.
- No navegador, use o modo de dispositivo (F12 → ícone de celular) e teste em 360 px de largura.

## Onde editar

- **Contatos:** só em `js/config.js`. Preencha os campos desejados; os botões aparecem
  automaticamente na seção Contato. Com tudo vazio, aparece o aviso "Contato pendente de configuração".
- **Textos:** em `index.html`. Cada seção tem um comentário com o nome (`<!-- 2. Experiência -->` etc.).
- **Título e descrição para compartilhamento:** no `<head>` de `index.html`.
- **Cores:** variáveis no começo de `css/style.css`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos para a raiz da branch `main`.
2. No repositório: **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Todos os caminhos são relativos, então o site funciona dentro do subcaminho do repositório.
Se tiver um domínio próprio depois, você pode adicionar `og:url` e uma imagem `og:image` no `<head>`.
