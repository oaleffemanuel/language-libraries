# Bibliotecas de Idiomas

Portal central das bibliotecas digitais gratuitas de idiomas: https://lg.korium.co

Site estático (HTML, CSS e um pouco de JavaScript), sem build e sem dependências, publicado pelo GitHub Pages a partir da raiz da branch `main`.

## Bibliotecas

| Biblioteca | Estado | Site |
|---|---|---|
| Biblioteca Italiana | publicada | https://oaleffemanuel.github.io/biblioteca-italiana/ |
| Bibliothèque Française | publicada | https://oaleffemanuel.github.io/biblioth-que-fran-aise/ |
| Bibliotheca Latina | em desenvolvimento | sem URL ainda |
| Biblioteca Española | planejada | |
| English Library | planejada | |

Cada biblioteca é um repositório e um site independentes. Este portal só aponta para elas e não hospeda catálogos, livros, PDFs ou áudios.

## Estrutura

```
index.html          página única do portal
404.html            página de erro
CNAME               domínio personalizado (lg.korium.co)
robots.txt, sitemap.xml
assets/style.css    estilos (modo claro e escuro automáticos)
assets/app.js       só ativa a seção de doação quando houver chave configurada
assets/config.js    configuração pública (chave Pix)
assets/favicon.svg, assets/og.png
assets/fonts/       EB Garamond (OFL), hospedada localmente
```

## Como adicionar ou promover uma biblioteca

1. Em `index.html`, dentro de `.estantes`, copie um `<article class="estante">` existente.
2. Ajuste `data-lingua` (código curto do idioma), o rótulo do idioma, o nome, a descrição, os fatos verificados e o link.
3. Em `assets/style.css`, adicione uma regra `[data-lingua="xx"] .faixa { ... }` com a cor da faixa.
4. Se a biblioteca já estava em "Em preparação", remova o `<article class="futura">` correspondente.
5. Atualize a tabela acima e o `lastmod` do `sitemap.xml`.

Os números exibidos nos cartões (obras, áudios, etapas) são copiados das páginas iniciais das bibliotecas. Verifique antes de alterar.

## Como ativar a doação via Pix

A seção "Quer ajudar com os custos deste projeto?" fica sem botão até que exista uma chave configurada. Para ativar:

1. Abra `assets/config.js`.
2. Preencha `chave` com uma chave Pix confirmada, `tipo` (por exemplo `e-mail`) e `nome` (nome do beneficiário como aparece no banco).
3. Faça commit e push. Nenhuma outra alteração é necessária.

Nunca use uma chave baseada em CPF neste arquivo: ele é público.

## Desenvolvimento local

```
python3 -m http.server 8000
```

e abra http://localhost:8000/.

## Licenças

Textos do portal: CC BY 4.0. Fonte EB Garamond: SIL Open Font License 1.1. As bibliotecas ligadas têm as próprias políticas de direitos.

## Contato

aleff@korium.co
