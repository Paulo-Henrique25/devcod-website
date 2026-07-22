# DevCod - Plataforma Web & Escola de Tecnologia

> Escola de Engenharia de Software com design dark premium, efeitos em glassmorphism e módulos interativos (3D Hub, Playground Sandbox de Código e Gráficos de Evolução Salarial).

---

## 🚀 Sobre o Projeto

A **DevCod** é uma plataforma educacional web voltada para o mercado de programação e engenharia de software de alta performance. O projeto foi estruturado utilizando conceitos de design moderno (glassmorphism, cores neon contrastantes e micro-animações reativas) e conta com um **Sistema de Responsividade Universal em 5 Níveis**, otimizado para funcionar perfeitamente de displays 4K a smartphones dobráveis de 320px.

---

## ⚡ Principais Funcionalidades

1. **Hub Holográfico 3D (Hero)**: Animação geométrica interativa tridimensional em tempo real que acompanha interações do mouse e rotaciona continuamente a 60 FPS.
2. **Zona de Agentes de IA (Club Agents)**: Módulo de exibição de tecnologias e fluxos de automação de IA integrando APIs (OpenAI, Claude, Gemini, n8n, Make, Zapier) com pílulas horizontais auto-scrolláveis no celular.
3. **Playground Sandbox de Código**: Editor de código front-end/Node com 4 presets interativos de 1 clique (*Chatbot de IA, Gerador Neon 3D, Robô de Vendas e Mini-Jogo em Canvas 2D*). Conta com console integrado e explicações guiadas pelo Tutor de IA.
4. **Evolução Salarial Reativa**: Gráfico estatístico dinâmico que reflete as faixas salariais médias de desenvolvedores de tecnologia no Brasil (do nível Estagiário à Gerência de Engenharia).
5. **Certificação Verificável (College)**: Componente com detalhamento de e-mentoria internacional e portfólios no GitHub, com layout e tipografia fluidos.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) / [JavaScript ES6+](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **Estilização (CSS)**: [Vanilla CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) (com variáveis globais, flexbox, grid e clamp typography)
- **Bundler & Dev Server**: [Vite.js](https://vite.dev)
- **Ícones**: [Lucide Icons](https://lucide.dev)
- **Biblioteca de PDF**: [PDFKit](https://pdfkit.org) (para geração de guias explicativos de forma offline)

---

## 📁 Estrutura de Diretórios

```bash
├── assets/                  # Imagens e mídias de plano de fundo
├── dist/                    # Bundle otimizado gerado para produção
├── src/
│   ├── main.js              # Controlador principal da aplicação
│   ├── particles.js         # Engine de renderização do Hub 3D
│   ├── playground.js        # Lógica de simulação de execução do Sandbox
│   └── salary-chart.js      # Controlador interativo do gráfico salarial
├── index.html               # Ponto de entrada HTML5 do site
├── style.css                # Folha de estilo global com variáveis e responsividade
├── explicacao_devcod.pdf    # Guia explicativo gerado em PDF
├── package.json             # Dependências e scripts do projeto
└── README.md                # Documentação do projeto
```

---

## ⚙️ Instalação e Execução Local

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org) (versão 18 ou superior) instalado em sua máquina.

### Passos para Rodar:

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a aplicação local em: `http://localhost:5173` (ou a porta atribuída).

3. **Gerar Build de Produção**:
   ```bash
   npm run build
   ```
   Os arquivos finais compactados e otimizados serão gerados na pasta `/dist`.

---

## 📄 Guia Explicativo em PDF
O projeto possui um gerador de documentação interno em Node.js. Para gerar novamente o guia PDF explicativo, execute:
```bash
node generate_pdf.js
```
O PDF será exportado automaticamente para a raiz do seu projeto, para a Área de Trabalho e para a sua pasta de Downloads.
