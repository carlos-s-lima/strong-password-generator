# Gerador de Senhas Seguras

Um gerador de senhas robusto e personalizável desenvolvido com React. Este projeto foi criado para fins de estudos e aprendizado de desenvolvimento web moderno.

## Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## Sobre o Projeto

Este é um projeto de estudos que implementa um gerador de senhas aleatórias com interface intuitiva e moderna. A aplicação permite ao usuário personalizar completamente as características da senha gerada, incluindo comprimento e tipos de caracteres.

## Funcionalidades

- Geração de senhas aleatórias e seguras
- Controle de comprimento da senha (ajustável via slider)
- Personalização dos tipos de caracteres:
  - Letras maiúsculas (A-Z)
  - Letras minúsculas (a-z)
  - Números (0-9)
  - Símbolos especiais (!@#$%^&*()_+-=[]{}|;:,.<>?)
- Cópia da senha para área de transferência com um clique
- Geração automática na montagem inicial e ao alterar configurações
- Interface com design moderno usando glassmorphism
- Feedback visual ao copiar senha

## Tecnologias e Conceitos Abordados

- **React** - Biblioteca JavaScript para construção de interfaces
- **React Hooks** - useState, useCallback e useEffect para gerenciamento de estado
- **CSS3** - Estilização com efeitos modernos (backdrop-filter, glassmorphism)
- **JavaScript (ES6+)** - Lógica de geração de senhas e manipulação do DOM
- **Clipboard API** - Para funcionalidade de copiar senha

## Estrutura do Projeto

```
├── index.html                    # Arquivo HTML principal
└── src/
    ├── index.jsx                 # Ponto de entrada da aplicação React
    ├── app.jsx                   # Componente principal App
    ├── App.css                   # Estilos do componente App
    ├── styles.css                # Estilos globais da aplicação
    ├── PasswordGenerator.jsx     # Componente gerador de senhas
    └── PasswordGenerator.css     # Estilos do componente gerador
```

## Como Usar

### Pré-requisitos

- Node.js instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
```

2. Navegue até o diretório do projeto:
```bash
cd <nome-do-diretorio>
```

3. Instale as dependências:
```bash
npm install
```

### Executando o Projeto

```bash
npm start
```

A aplicação será aberta automaticamente no navegador em `http://localhost:3000`.

## Como Funciona

### Lógica de Geração de Senhas

1. O usuário seleciona os critérios desejados (maiúsculas, minúsculas, números, símbolos)
2. Define o comprimento da senha através do slider
3. O algoritmo constrói um conjunto de caracteres disponíveis baseado nas seleções
4. Garante que pelo menos um caractere de cada tipo selecionado esteja presente
5. Preenche o restante com caracteres aleatórios
6. Embaralha a senha final para distribuir os caracteres de forma aleatória

### Componentes Principais

**PasswordGenerator**: Componente principal que gerencia toda a lógica de geração e interface do usuário. Utiliza hooks do React para controle de estado e efeitos colaterais.

## Design

A interface utiliza:
- Gradiente escuro de fundo (#1a1a2e → #16213e)
- Efeito glassmorphism no container principal
- Fonte Philosopher do Google Fonts
- Esquema de cores em tons de azul (#3182ce) e cinza
- Elementos interativos com transições suaves

## Aprendizados

Este projeto foi desenvolvido como material de estudos, explorando:
- Gerenciamento de estado com React Hooks
- Boas práticas de componentização
- Manipulação de arrays e strings em JavaScript
- API Clipboard do navegador
- CSS moderno com glassmorphism e backdrop-filter
- Experiência do usuário (UX) com feedback visual

---

## Contato

**Carlos Lima**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/carlos-s-lima/)

---

**Nota**: Este é um projeto desenvolvido para fins educacionais e de aprendizado em desenvolvimento web com React.