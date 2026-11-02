# Portfólio acadêmico

Site pessoal de Vitor Hugo Bernal Rodrigues, estudante do curso Técnico em Informática Integrado ao Ensino Médio do IFMS, campus Nova Andradina.

Site publicado: https://vitorbernalrodrigues.github.io/portfolio/

## Tecnologias

- HTML5
- CSS3
- JavaScript, sem frameworks ou bibliotecas
- Fonte Schibsted Grotesk, carregada do Google Fonts
- GitHub Pages para hospedagem

## Estrutura

```
index.html       conteúdo da página
css/style.css    estilos e layout responsivo
js/script.js     interações da página
img/             imagens dos sites desenvolvidos
```

## Como o código funciona

### index.html

A página é única e dividida em seis seções. O `id` de cada seção é o destino de um link do menu:

| Seção | id |
|---|---|
| Sobre mim | `#sobre` |
| Atividades acadêmicas | `#atividades` |
| Projetos | `#projetos` |
| Feiras e eventos | `#eventos` |
| Sites desenvolvidos | `#sites` |
| Habilidades e contato | `#contato` |

O menu fica em `<header class="lateral">`. Um script no `<head>` adiciona a classe `js` ao elemento `<html>`. O CSS só esconde o menu no celular quando essa classe existe, então o menu continua acessível se o JavaScript estiver desativado.

Projetos e eventos usam o mesmo bloco, `.registro`, com a data em uma coluna e o conteúdo em outra. As atividades usam uma lista ordenada, `.linha-tempo`, porque seguem uma ordem cronológica.

### css/style.css

- **Variáveis:** cores, largura do menu e fonte ficam em `:root`.
- **Layout:** no computador, o `body` é um grid de duas colunas. O menu lateral usa `position: sticky` para ficar fixo durante a rolagem.
- **Fundo:** o quadriculado é feito com dois `linear-gradient` repetidos.
- **Carteirinha:** um grid com as iniciais e os dados do estudante. O código de barras é um `repeating-linear-gradient`, e a animação de entrada é o `@keyframes assentar`.
- **Linha do tempo:** a borda esquerda da lista forma a linha, e cada marcador é um pseudo-elemento `::before`.
- **Links:** os estilos usam `:where()` para ter especificidade zero e não sobrescrever a classe `.botao`.

Pontos de quebra:

| Largura | Mudança |
|---|---|
| até 1100px | a carteirinha passa para baixo do texto de apresentação |
| até 860px | o layout vira uma coluna, o menu vira uma barra no topo e o botão "Menu" aparece |
| até 600px | sites, habilidades e registros ficam em uma coluna |

Quando o sistema pede menos movimento (`prefers-reduced-motion`), a animação da carteirinha e a rolagem suave são desativadas.

### js/script.js

| Função | Como funciona |
|---|---|
| Menu do celular | `alternarMenu()` adiciona ou remove a classe `aberto` em `#menu` e atualiza `aria-expanded` no botão. Clicar em um link fecha o menu. |
| Seção atual | Um `IntersectionObserver` observa as seções. Quando uma delas passa pelo centro da tela, o link correspondente recebe a classe `ativo` e o atributo `aria-current`. |
| Copiar e-mail | O botão lê o endereço do atributo `data-copiar` e o copia com `navigator.clipboard.writeText()`. O texto do botão confirma a cópia e volta ao normal depois de 2,5 segundos. |
| Ano do rodapé | `new Date().getFullYear()` preenche o ano atual. |

## Como executar

Não há dependências nem etapa de build. Abra o arquivo `index.html` no navegador.

## Publicação

O site é publicado pelo GitHub Pages a partir da raiz da branch `main`. Cada push na `main` atualiza o site.
