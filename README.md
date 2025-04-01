# Sorteador de Números

Um projeto web interativo para sortear números aleatórios sem repetições, com interface moderna e responsiva.

## Menu

- [Layout](#layout)
- [Descrição](#descrição)
  - [Principais recursos incluem](#principais-recursos-incluem)
  - [Próximos passos de desenvolvimento](#próximos-passos-de-desenvolvimento)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
  - [Arquivos Principais](#arquivos-principais)
- [Como Instalar e Rodar o Projeto](#como-instalar-e-rodar-o-projeto)
  - [Configuração](#configuração)
  - [Casos de Uso Comuns](#casos-de-uso-comuns)
  - [Solução de Problemas](#solução-de-problemas)
- [Projeto ao Vivo](#projeto-ao-vivo)
- [Licença](#licença)
- [Autor](#autor)

---

## Layout

![Preview do Sorteador](screenshot/tela-principal.png)

- **Design**:
  - Gradiente azul espacial com efeito de ruído.
  - Botões coloridos e inputs intuitivos.
  - Responsivo (esconde a imagem do astronauta em telas menores).

---

## Descrição

### Principais recursos incluem

- **Sortear números únicos**: Define quantidade, intervalo mínimo/máximo e evita repetições.
- **Botão de reinício**: Limpa os campos e resultados.
- **Interface dinâmica**: Botões habilitados/desabilitados conforme o estado.
- **Responsividade**: Adapta-se a celulares e tablets.

---

## Tecnologias Utilizadas

- **Front-end**:  
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- **Fontes**: Google Fonts (Chakra Petch, Inter).

---

## Estrutura de Pastas

```plaintext
sorteador/
├── img/                        # Imagens
|   ├── code.png                # Background
|   ├── ia.png                  # Imagem do astronauta
|   └── Ruido.png               # Textura
├── screenshot/                 # Screenshot
|   └── tela-principal.png      # Print do Projeto
├── app.js                      # Lógica do sorteio
├── index.html                  # Página principal
├── LICENSE                     # Página principal
├── README.md                   # Página principal
└── style.css                   # Estilos
```

### Arquivos Principais

- `index.html`: Estrutura da página com inputs e botões.
- `app.js`: Funções sortear(), reiniciar() e gerarNumeroAleatorio().
- `style.css`: Estilos responsivos e efeitos visuais.

---

## Como Instalar e Rodar o Projeto

### Configuração

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/sorteador.git
```

2. Abra o arquivo index.html no navegador.

### Casos de Uso Comuns

1. Insira a quantidade de números desejada.
2. Defina o intervalo (De / Até).
3. Clique em "Sortear".

### Solução de Problemas

- **Números repetidos:** O sistema já evita repetições automaticamente.
- **Botão travado:** Verifique se todos os campos estão preenchidos.

---

## Projeto ao Vivo

Você pode ver o projeto ao vivo neste link: [https://melksedeque.github.io/sorteador-numeros/](https://melksedeque.github.io/sorteador-numeros/)

---

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://github.com/Melksedeque/organo-alura-reactjs?tab=MIT-1-ov-file) para mais detalhes.

---

## Autor

- GitHub - [Melksedeque Silva](https://github.com/Melksedeque/)
- FrontEndMentor - [@Melksedeque](https://www.frontendmentor.io/profile/Melksedeque)
- Twitter / X - [@SouzaMelk](https://x.com/SouzaMelk)
- LinkedIn - [Melksedeque Silva](https://www.linkedin.com/in/melksedeque-silva/)
