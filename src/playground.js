/* DevCod Ultra-Interactive Visual Playground Engine (pt-BR) */
document.addEventListener('DOMContentLoaded', () => {
  const codeEditor = document.getElementById('codeEditor');
  const runBtn = document.getElementById('runCodeBtn');
  const visualStage = document.getElementById('visualStage');
  const consoleOutput = document.getElementById('consoleOutput');
  const clearConsoleBtn = document.getElementById('clearConsole');
  const aiMsg = document.getElementById('aiTutorMsg');
  const presetBtns = document.querySelectorAll('.playground-presets .preset-btn');
  const tabBtns = document.querySelectorAll('.tab-group .tab-btn');
  const speedSlider = document.getElementById('speedSlider');
  const colorPicker = document.getElementById('colorPicker');

  if (!codeEditor || !visualStage) return;

  let currentPreset = 'ai-bot';
  let activeTab = 'js';

  // 1. CODE PRESET DEFINITIONS
  const presets = {
    'ai-bot': {
      title: 'Chatbot de IA com Resposta Humana',
      js: `// Agente de IA DevCod v5.0
async function processarMensagemIA(mensagemUsuario) {
  console.log("🤖 Enviando para API DevCod AI:", mensagemUsuario);
  
  // Simula latência realista de rede
  const resposta = await new Promise(res => setTimeout(res, 800));
  
  const respostas = {
    'salario': 'Um Desenvolvedor Full-Stack formado ganha entre R$ 6.500 e R$ 18.000/mês!',
    'curso': 'Na DevCod você aprende React 19, Next.js, Node.js, Python e Agentes de IA do zero.',
    'default': 'Olá! Sou a IA da DevCod. Como posso impulsionar sua carreira hoje?'
  };

  return respostas[mensagemUsuario] || respostas['default'];
}

// Executar teste inicial
processarMensagemIA('salario');`,
      html: `<div class="visual-chat-card">
  <div class="chat-header">
    <span class="bot-status">● IA DevCod Online</span>
  </div>
  <div class="chat-messages" id="chatStream">
    <div class="msg bot">Olá! Sou o assistente DevCod. Escolha uma pergunta abaixo!</div>
  </div>
  <div class="chat-input-row">
    <button class="chat-chip" onclick="window.sendDemoMsg('salario')">💼 Quanto ganha um dev?</button>
    <button class="chat-chip" onclick="window.sendDemoMsg('curso')">🚀 O que vou aprender?</button>
  </div>
</div>`,
      css: `.visual-chat-card {
  background: rgba(15, 20, 32, 0.9);
  border: 1px solid #00f0ff;
  border-radius: 12px;
  padding: 16px;
  color: #fff;
}
.chat-chip {
  background: rgba(0, 240, 255, 0.15);
  border: 1px solid #00f0ff;
  color: #fff;
  border-radius: 20px;
  padding: 6px 12px;
  cursor: pointer;
}`,
      explanation: `💡 <strong>O que você está vendo:</strong> Este código cria uma conexão assíncrona (API) com um Modelo de Linguagem de Inteligência Artificial. Ao clicar nas perguntas interativas no palco ao lado, o código consulta a IA e renderiza as respostas na tela em tempo real!`,
      renderVisual: () => {
        visualStage.innerHTML = `
          <div class="visual-chat-card">
            <div class="chat-header">
              <div class="bot-badge"><i data-lucide="bot"></i> IA DevCod Autônoma</div>
              <span class="status-online">● Conectado</span>
            </div>
            <div class="chat-messages" id="chatStream">
              <div class="msg bot-msg">👋 Olá! Sou o Tutor de IA da DevCod. Clique em uma das perguntas rápidas abaixo para me ver responder em tempo real!</div>
            </div>
            <div class="chat-quick-prompt">
              <button class="prompt-btn" onclick="window.triggerBotChat('salario')">💼 Quanto ganha um dev?</button>
              <button class="prompt-btn" onclick="window.triggerBotChat('curso')">🚀 O que vou aprender?</button>
              <button class="prompt-btn" onclick="window.triggerBotChat('garantia')">🛡️ Como funciona a garantia?</button>
            </div>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    },

    'neon-generator': {
      title: 'Gerador de Efeitos Neon 3D',
      js: `// Motor de Estilização Neon Dinâmica
function aplicarEfeitoNeon(cor, intensidade) {
  console.log("🎨 Gerando brilho neon:", cor, "na intensidade:", intensidade);
  const elemento = document.getElementById('cardNeonVisual');
  
  const sombras = {
    'cyan': '0 0 35px rgba(0, 240, 255, 0.8), inset 0 0 15px rgba(0, 240, 255, 0.4)',
    'purple': '0 0 35px rgba(157, 78, 225, 0.8), inset 0 0 15px rgba(157, 78, 225, 0.4)',
    'green': '0 0 35px rgba(0, 255, 136, 0.8), inset 0 0 15px rgba(0, 255, 136, 0.4)'
  };

  if (elemento) {
    elemento.style.boxShadow = sombras[cor] || sombras['cyan'];
  }
}

aplicarEfeitoNeon('cyan', 3);`,
      html: `<div class="neon-preview-card" id="cardNeonVisual">
  <h3>Efeito Glassmorphism High-Tech</h3>
  <p>Estilização CSS3 avançada para interfaces ultra-modernas.</p>
</div>`,
      css: `.neon-preview-card {
  background: rgba(10, 14, 25, 0.85);
  border: 1px solid #00f0ff;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}`,
      explanation: `💡 <strong>O que você está vendo:</strong> O código ajusta instantaneamente propriedades de CSS como <code>box-shadow</code>, <code>backdrop-filter</code> e <code>border-color</code>. Você pode alterar a cor no seletor do editor para ver o card mudar ao vivo!`,
      renderVisual: () => {
        const color = colorPicker?.value || 'cyan';
        const colorHex = color === 'purple' ? '#9d4edd' : (color === 'green' ? '#00ff88' : '#00f0ff');
        visualStage.innerHTML = `
          <div class="neon-stage-card" id="cardNeonVisual" style="box-shadow: 0 0 35px ${colorHex}88, inset 0 0 20px ${colorHex}44; border-color: ${colorHex}">
            <div class="neon-icon"><i data-lucide="sparkles" style="color: ${colorHex}"></i></div>
            <h4 style="color: #fff; margin-bottom: 8px;">Card Neon devcod.js</h4>
            <p style="color: #94a3b8; font-size: 0.9rem;">Efeito Glassmorphic Renderizado no Navegador</p>
            <div class="neon-actions" style="margin-top: 15px;">
              <button class="btn btn-sm" onclick="window.changeNeonColor('cyan')" style="background: rgba(0,240,255,0.2); border: 1px solid #00f0ff; color: #fff;">Ciano</button>
              <button class="btn btn-sm" onclick="window.changeNeonColor('purple')" style="background: rgba(157,78,225,0.2); border: 1px solid #9d4edd; color: #fff;">Roxo</button>
              <button class="btn btn-sm" onclick="window.changeNeonColor('green')" style="background: rgba(0,255,136,0.2); border: 1px solid #00ff88; color: #fff;">Verde</button>
            </div>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    },

    'ecommerce-sales': {
      title: 'Robô de Vendas & Automação',
      js: `// Robô Autônomo de Vendas DevCod
let totalVendas = 0;
let faturamentoR$ = 0;

function simularNovaVenda(nomeProduto, valor) {
  totalVendas++;
  faturamentoR$ += valor;
  
  console.log("💰 Nova venda aprovada!", nomeProduto, "- R$", valor);
  console.log("📊 Faturamento Acumulado: R$", faturamentoR$);
}

// Processar lote inicial
simularNovaVenda("Formação DevCod Full-Stack", 1490);
simularNovaVenda("Aceleração Agentes de IA", 990);`,
      html: `<div class="sales-dashboard-card">
  <div class="stat-row">
    <div>Vendas Hoje: <strong id="vendasCount">2</strong></div>
    <div>Faturamento: <strong id="faturamentoVal" style="color:#00ff88">R$ 2.480,00</strong></div>
  </div>
</div>`,
      css: `.sales-dashboard-card {
  background: rgba(15, 25, 20, 0.85);
  border: 1px solid #00ff88;
  padding: 18px;
}`,
      explanation: `💡 <strong>O que você está vendo:</strong> Um script de automação de e-commerce. A cada nova transação aprovada na rede, o código incrementa variáveis de contador e atualiza a interface financeira do cliente em tempo real!`,
      renderVisual: () => {
        visualStage.innerHTML = `
          <div class="sales-stage-card">
            <div class="sales-header">
              <span><i data-lucide="trending-up"></i> Dashboard de Vendas Autônomas</span>
              <span class="badge-live">● Vendas Ativas</span>
            </div>
            <div class="sales-grid">
              <div class="s-box">
                <span class="s-label">Vendas Aprovadas</span>
                <span class="s-val" id="salesCounter">3 Vendas</span>
              </div>
              <div class="s-box">
                <span class="s-label">Receita Acumulada</span>
                <span class="s-val green" id="revenueCounter">R$ 3.970,00</span>
              </div>
            </div>
            <button class="btn btn-primary btn-sm full-w" onclick="window.simulateSaleClick()" style="margin-top: 14px;">
              <i data-lucide="plus-circle"></i> Simular Nova Venda em Tempo Real (R$ 1.490)
            </button>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    },

    'mini-game': {
      title: 'Mini-Jogo 2D com Física',
      js: `// Loop de Jogo 2D em HTML5 Canvas
let posX = 120, posY = 60;
let velocidade = 5;

function moverPersonagem(direcao) {
  if (direcao === 'direita') posX += velocidade * 8;
  if (direcao === 'esquerda') posX -= velocidade * 8;
  if (direcao === 'pular') posY -= 25;

  console.log("🎮 Posição do Dev Avatar:", posX, posY);
  desenharNoCanvas();
}

moverPersonagem('direita');`,
      html: `<canvas id="gameCanvas" width="300" height="150"></canvas>`,
      css: `#gameCanvas { background: #050505; border-radius: 8px; }`,
      explanation: `💡 <strong>O que você está vendo:</strong> Um motor de jogo 2D utilizando HTML5 Canvas! O código calcula as coordenadas (x, y) do personagem a cada quadro e atualiza a física de física de jogo em tempo real!`,
      renderVisual: () => {
        visualStage.innerHTML = `
          <div class="game-stage-card">
            <div class="game-top">
              <span><i data-lucide="gamepad-2"></i> Canvas 2D Engine</span>
              <span>Score: <strong style="color:#00f0ff" id="gameScore">1.250 pts</strong></span>
            </div>
            <div class="canvas-container">
              <canvas id="miniDevCanvas" width="360" height="110"></canvas>
            </div>
            <div class="game-controls">
              <button class="btn btn-secondary btn-sm" onclick="window.moveGamePlayer('left')">⬅️ Esquerda</button>
              <button class="btn btn-primary btn-sm" onclick="window.moveGamePlayer('jump')">🚀 Pular</button>
              <button class="btn btn-secondary btn-sm" onclick="window.moveGamePlayer('right')">Direita ➡️</button>
            </div>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        window.initMiniGameCanvas();
      }
    }
  };

  // 2. HELPER FUNCTIONS FOR INTERACTIVE EVENTS
  window.triggerBotChat = (tipo) => {
    const stream = document.getElementById('chatStream');
    if (!stream) return;

    const userMsgs = {
      'salario': '💼 Quanto ganha um desenvolvedor formado?',
      'curso': '🚀 O que vou aprender na DevCod?',
      'garantia': '🛡️ Como funciona a garantia incondicional?'
    };

    const botMsgs = {
      'salario': 'Um Desenvolvedor Full-Stack formado pela DevCod conquista salários de R$ 6.500 a R$ 18.000/mês!',
      'curso': 'Você dominará Full-Stack (React 19, Next.js, Node.js), Arquitetura em Nuvem e Agentes Autônomos de IA.',
      'garantia': 'Você tem 30 dias de garantia incondicional. Se não amar a plataforma, devolvemos 100% do seu dinheiro.'
    };

    // User prompt msg
    const uDiv = document.createElement('div');
    uDiv.className = 'msg user-msg';
    uDiv.textContent = userMsgs[tipo] || 'Pergunta enviada!';
    stream.appendChild(uDiv);

    // Bot response after short delay
    setTimeout(() => {
      const bDiv = document.createElement('div');
      bDiv.className = 'msg bot-msg';
      bDiv.textContent = botMsgs[tipo] || 'Processado com sucesso!';
      stream.appendChild(bDiv);
      stream.scrollTop = stream.scrollHeight;

      // Log to console
      appendConsoleLog(`🤖 [DevCod AI 200 OK]: Resposta gerada em 180ms para a consulta '${tipo}'.`);
    }, 400);
  };

  window.changeNeonColor = (color) => {
    const card = document.getElementById('cardNeonVisual');
    if (!card) return;
    const hex = color === 'purple' ? '#9d4edd' : (color === 'green' ? '#00ff88' : '#00f0ff');
    card.style.boxShadow = `0 0 35px ${hex}88, inset 0 0 20px ${hex}44`;
    card.style.borderColor = hex;
    appendConsoleLog(`🎨 [CSS Engine]: Cor do tema neon atualizada para ${color} (${hex}).`);
  };

  let salesCount = 3;
  let revenueVal = 3970;
  window.simulateSaleClick = () => {
    salesCount++;
    revenueVal += 1490;

    const sEl = document.getElementById('salesCounter');
    const rEl = document.getElementById('revenueCounter');
    if (sEl) sEl.textContent = `${salesCount} Vendas`;
    if (rEl) rEl.textContent = `R$ ${revenueVal.toLocaleString('pt-BR')},00`;

    appendConsoleLog(`💰 [E-Commerce Webhook 200 OK]: Venda #${salesCount} Aprovada! +R$ 1.490,00`);
  };

  let playerX = 60;
  let playerY = 65;
  let gameScore = 1250;
  window.initMiniGameCanvas = () => {
    const cvs = document.getElementById('miniDevCanvas');
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    
    function draw() {
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      // Floor line
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 95);
      ctx.lineTo(cvs.width, 95);
      ctx.stroke();

      // Draw Dev Player (glowing circle avatar)
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(playerX, playerY, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Avatar Label
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px "Fira Code", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('<Dev />', playerX, playerY + 4);
    }
    draw();
  };

  window.moveGamePlayer = (dir) => {
    if (dir === 'left') playerX = Math.max(30, playerX - 35);
    if (dir === 'right') playerX = Math.min(330, playerX + 35);
    if (dir === 'jump') {
      playerY = 35;
      setTimeout(() => { playerY = 65; window.initMiniGameCanvas(); }, 300);
    }
    gameScore += 150;
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) scoreEl.textContent = `${gameScore.toLocaleString('pt-BR')} pts`;

    window.initMiniGameCanvas();
    appendConsoleLog(`🎮 [Canvas Engine 60FPS]: Jogador moveu para ${dir.toUpperCase()} (x: ${playerX}, y: ${playerY}).`);
  };

  function appendConsoleLog(msg) {
    if (!consoleOutput) return;
    const div = document.createElement('div');
    div.className = 'console-line';
    div.innerHTML = `&gt; ${msg}`;
    consoleOutput.appendChild(div);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }

  // 3. SWITCH PRESETS
  function loadPreset(presetKey) {
    currentPreset = presetKey;
    const p = presets[presetKey];
    if (!p) return;

    // Set editor text according to active tab
    codeEditor.value = p[activeTab] || p.js;

    // Render visual stage
    p.renderVisual();

    // Update AI Tutor message
    if (aiMsg) {
      aiMsg.innerHTML = p.explanation;
    }

    appendConsoleLog(`🚀 Exemplo "${p.title}" carregado com sucesso.`);
  }

  // Preset Button Listeners
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const presetKey = btn.dataset.preset;
      loadPreset(presetKey);
    });
  });

  // Tab Button Listeners (main.js, index.html, styles.css)
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      const p = presets[currentPreset];
      if (p && p[activeTab]) {
        codeEditor.value = p[activeTab];
      }
    });
  });

  // Run Code Button Click
  runBtn?.addEventListener('click', () => {
    const p = presets[currentPreset];
    if (!p) return;

    appendConsoleLog(`⚡ Executando script [${new Date().toLocaleTimeString('pt-BR')}]...`);
    
    // Animate visual stage flash
    visualStage.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
    visualStage.style.transform = 'scale(0.98)';
    visualStage.style.opacity = '0.7';

    setTimeout(() => {
      visualStage.style.transform = 'scale(1)';
      visualStage.style.opacity = '1';

      // Re-render visual stage
      p.renderVisual();
      appendConsoleLog(`✅ Execução concluída com sucesso (0 erros). Palco visual atualizado!`);
    }, 350);
  });

  clearConsoleBtn?.addEventListener('click', () => {
    if (consoleOutput) {
      consoleOutput.innerHTML = '<div class="console-line info">&gt; Terminal limpo.</div>';
    }
  });

  // Controls Listeners (Speed & Color)
  speedSlider?.addEventListener('input', (e) => {
    appendConsoleLog(`⚡ Velocidade alterada para o nível ${e.target.value}.`);
  });

  colorPicker?.addEventListener('change', (e) => {
    if (currentPreset === 'neon-generator') {
      window.changeNeonColor(e.target.value);
    } else {
      appendConsoleLog(`🎨 Cor neon alterada para ${e.target.value}.`);
    }
  });

  // Load Initial Preset
  loadPreset('ai-bot');
});
