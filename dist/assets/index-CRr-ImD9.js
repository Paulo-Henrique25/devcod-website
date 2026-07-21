(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.getElementById(`particleCanvas`),t=document.getElementById(`hero`);if(!e||!t)return;let n=e.getContext(`2d`),r,i,a,o,s=-1e3,c=-1e3,l=!1,u=0;function d(){r=e.width=t.offsetWidth,i=e.height=t.offsetHeight,a=r/2,o=i*.35,g()}window.addEventListener(`resize`,d),t.addEventListener(`mousemove`,e=>{let n=t.getBoundingClientRect();s=e.clientX-n.left,c=e.clientY-n.top,l=!0}),t.addEventListener(`mouseenter`,()=>{l=!0}),t.addEventListener(`mouseleave`,()=>{l=!1,s=-1e3,c=-1e3});let f=[`</>`,`{ ... }`,`const dev = true`,`=>`,`async/await`,`010101`,`<DevCod />`,`React 19`,`Next.js 15`,`TypeScript`,`Node.js`,`Python`,`AI Agents`,`SQL`,`Docker`,`AWS Cloud`,`Git Push`,`npm run dev`,`API REST`,`GraphQL`,`NestJS`],p=[],m=[],h=[];function g(){p=[],m=[],h=[];let e=Math.min(r,i)*(r>992?.38:.35);for(let t=0;t<48;t++){let n=Math.acos(-1+2*t/48),r=Math.sqrt(48*Math.PI)*n,i=Math.cos(r)*Math.sin(n)*e,a=Math.sin(r)*Math.sin(n)*e,o=Math.cos(n)*e;p.push({baseX:i,baseY:a,baseZ:o,x:i,y:a,z:o,projX:0,projY:0,scale:0,text:f[t%f.length],isBadge:t%3==0,color:t%3==0?`#00f0ff`:t%3==1?`#9d4edd`:`#00e5ff`,pulseOffset:t*.2})}let t=e*1.18;for(let e=0;e<3;e++){let n=[];for(let e=0;e<36;e++){let r=e/36*Math.PI*2;n.push({x:Math.cos(r)*t,y:Math.sin(r)*t,z:0})}m.push({points:n,tiltX:(e-1)*.75,tiltY:e*.9+.4,rotSpeed:.008+e*.004,angle:e*1.2,color:e===0?`#00f0ff`:e===1?`#9d4edd`:`#00e5ff`})}for(let e=0;e<30;e++)h.push({x:(Math.random()-.5)*r*1.2,y:(Math.random()-.5)*i*1.2,z:(Math.random()-.5)*500,speed:Math.random()*1.8+.8,char:Math.random()>.5?`1`:`0`,color:Math.random()>.5?`rgba(0, 240, 255, 0.35)`:`rgba(157, 78, 225, 0.35)`})}d();let _=0,v=0,y=0;function b(){y+=.018,n.clearRect(0,0,r,i),u+=(+!!l-u)*.08;let e=.008+u*.012;_+=e,v+=e*.5;let t=Math.cos(_),d=Math.sin(_),f=Math.cos(v),g=Math.sin(v);m.forEach(e=>{e.angle+=e.rotSpeed*(1+u*.5);let r=Math.cos(e.angle),i=Math.sin(e.angle),s=Math.cos(e.tiltX),c=Math.sin(e.tiltX),l=Math.cos(e.tiltY),p=Math.sin(e.tiltY),m=e.points.map(e=>{let n=e.x*r-e.y*i,u=e.y*r+e.x*i,m=e.z,h=n*l-m*p,_=m*l+n*p,v=u*s-_*c,y=_*s+u*c,b=h*t-y*d,x=y*t+h*d,S=v*f-x*g;x=x*f+v*g;let C=480/(480+x+350);return{x:b*C+a,y:S*C+o,scale:C,z:x}});n.beginPath(),n.moveTo(m[0].x,m[0].y);for(let e=1;e<m.length;e++)n.lineTo(m[e].x,m[e].y);n.closePath(),n.strokeStyle=e.color,n.lineWidth=1.2+u*.8,n.globalAlpha=.5+u*.3,n.stroke(),n.globalAlpha=1}),p.forEach(e=>{let n=e.baseX*t-e.baseZ*d,r=e.baseZ*t+e.baseX*d,i=e.baseY*f-r*g,s=r*f+e.baseY*g;i+=Math.sin(y*2+e.pulseOffset)*12,e.x=n,e.y=i,e.z=s;let c=480/(480+s+350);e.scale=c,e.projX=n*c+a,e.projY=i*c+o});let x=130+u*20;for(let e=0;e<p.length;e++)for(let t=e+1;t<p.length;t++){let r=p[e],i=p[t],a=r.projX-i.projX,o=r.projY-i.projY,l=Math.sqrt(a*a+o*o);if(l<x){let e=(1-l/x)*.28*Math.min(r.scale,i.scale);n.beginPath(),n.moveTo(r.projX,r.projY),n.lineTo(i.projX,i.projY);let t=Math.min(Math.hypot(r.projX-s,r.projY-c),Math.hypot(i.projX-s,i.projY-c));u>.05&&t<160?(n.strokeStyle=`rgba(0, 240, 255, ${Math.min(.9,e+.45)})`,n.lineWidth=1.2):(n.strokeStyle=`rgba(157, 78, 225, ${e})`,n.lineWidth=.6),n.stroke()}}n.font=`600 13px "Fira Code", monospace`,n.textAlign=`center`,n.textBaseline=`middle`,p.forEach(e=>{if(e.scale<=0)return;let t=Math.min(1,Math.max(.3,(e.z+300)/600)),r=Math.hypot(e.projX-s,e.projY-c);n.save(),n.translate(e.projX,e.projY);let i=u>.05&&r<140,a=e.scale*(e.isBadge?1.15:.95)*(1+(i?.3:0));if(n.scale(a,a),e.isBadge||i){let t=n.measureText(e.text).width+16;n.fillStyle=i?`rgba(0, 240, 255, 0.28)`:`rgba(15, 20, 32, 0.85)`,n.strokeStyle=i?`#00f0ff`:`rgba(0, 240, 255, 0.4)`,n.lineWidth=i?1.5:1,n.beginPath(),n.roundRect(-t/2,-11,t,22,6),n.fill(),n.stroke(),n.fillStyle=`#ffffff`,n.globalAlpha=1}else n.fillStyle=e.color,n.globalAlpha=t;n.fillText(e.text,0,0),n.restore()}),n.font=`12px "Fira Code", monospace`,h.forEach(e=>{e.y+=e.speed*(1+u*.4),e.y>i*.8&&(e.y=-i*.8);let r=e.x*t-e.z*d,s=e.z*t+e.x*d,c=e.y*f-s*g;s=s*f+e.y*g;let l=480/(480+s+350),p=r*l+a,m=c*l+o;n.fillStyle=e.color,n.globalAlpha=.35*l,n.fillText(e.char,p,m)}),n.globalAlpha=1,requestAnimationFrame(b)}b()}window.addEventListener(`DOMContentLoaded`,e),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`codeEditor`),t=document.getElementById(`runCodeBtn`),n=document.getElementById(`visualStage`),r=document.getElementById(`consoleOutput`),i=document.getElementById(`clearConsole`),a=document.getElementById(`aiTutorMsg`),o=document.querySelectorAll(`.playground-presets .preset-btn`),s=document.querySelectorAll(`.tab-group .tab-btn`),c=document.getElementById(`speedSlider`),l=document.getElementById(`colorPicker`);if(!e||!n)return;let u=`ai-bot`,d=`js`,f={"ai-bot":{title:`Chatbot de IA com Resposta Humana`,js:`// Agente de IA DevCod v5.0
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
processarMensagemIA('salario');`,html:`<div class="visual-chat-card">
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
</div>`,css:`.visual-chat-card {
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
}`,explanation:`💡 <strong>O que você está vendo:</strong> Este código cria uma conexão assíncrona (API) com um Modelo de Linguagem de Inteligência Artificial. Ao clicar nas perguntas interativas no palco ao lado, o código consulta a IA e renderiza as respostas na tela em tempo real!`,renderVisual:()=>{n.innerHTML=`
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
        `,window.lucide&&window.lucide.createIcons()}},"neon-generator":{title:`Gerador de Efeitos Neon 3D`,js:`// Motor de Estilização Neon Dinâmica
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

aplicarEfeitoNeon('cyan', 3);`,html:`<div class="neon-preview-card" id="cardNeonVisual">
  <h3>Efeito Glassmorphism High-Tech</h3>
  <p>Estilização CSS3 avançada para interfaces ultra-modernas.</p>
</div>`,css:`.neon-preview-card {
  background: rgba(10, 14, 25, 0.85);
  border: 1px solid #00f0ff;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}`,explanation:`💡 <strong>O que você está vendo:</strong> O código ajusta instantaneamente propriedades de CSS como <code>box-shadow</code>, <code>backdrop-filter</code> e <code>border-color</code>. Você pode alterar a cor no seletor do editor para ver o card mudar ao vivo!`,renderVisual:()=>{let e=l?.value||`cyan`,t=e===`purple`?`#9d4edd`:e===`green`?`#00ff88`:`#00f0ff`;n.innerHTML=`
          <div class="neon-stage-card" id="cardNeonVisual" style="box-shadow: 0 0 35px ${t}88, inset 0 0 20px ${t}44; border-color: ${t}">
            <div class="neon-icon"><i data-lucide="sparkles" style="color: ${t}"></i></div>
            <h4 style="color: #fff; margin-bottom: 8px;">Card Neon devcod.js</h4>
            <p style="color: #94a3b8; font-size: 0.9rem;">Efeito Glassmorphic Renderizado no Navegador</p>
            <div class="neon-actions" style="margin-top: 15px;">
              <button class="btn btn-sm" onclick="window.changeNeonColor('cyan')" style="background: rgba(0,240,255,0.2); border: 1px solid #00f0ff; color: #fff;">Ciano</button>
              <button class="btn btn-sm" onclick="window.changeNeonColor('purple')" style="background: rgba(157,78,225,0.2); border: 1px solid #9d4edd; color: #fff;">Roxo</button>
              <button class="btn btn-sm" onclick="window.changeNeonColor('green')" style="background: rgba(0,255,136,0.2); border: 1px solid #00ff88; color: #fff;">Verde</button>
            </div>
          </div>
        `,window.lucide&&window.lucide.createIcons()}},"ecommerce-sales":{title:`Robô de Vendas & Automação`,js:`// Robô Autônomo de Vendas DevCod
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
simularNovaVenda("Aceleração Agentes de IA", 990);`,html:`<div class="sales-dashboard-card">
  <div class="stat-row">
    <div>Vendas Hoje: <strong id="vendasCount">2</strong></div>
    <div>Faturamento: <strong id="faturamentoVal" style="color:#00ff88">R$ 2.480,00</strong></div>
  </div>
</div>`,css:`.sales-dashboard-card {
  background: rgba(15, 25, 20, 0.85);
  border: 1px solid #00ff88;
  padding: 18px;
}`,explanation:`💡 <strong>O que você está vendo:</strong> Um script de automação de e-commerce. A cada nova transação aprovada na rede, o código incrementa variáveis de contador e atualiza a interface financeira do cliente em tempo real!`,renderVisual:()=>{n.innerHTML=`
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
        `,window.lucide&&window.lucide.createIcons()}},"mini-game":{title:`Mini-Jogo 2D com Física`,js:`// Loop de Jogo 2D em HTML5 Canvas
let posX = 120, posY = 60;
let velocidade = 5;

function moverPersonagem(direcao) {
  if (direcao === 'direita') posX += velocidade * 8;
  if (direcao === 'esquerda') posX -= velocidade * 8;
  if (direcao === 'pular') posY -= 25;

  console.log("🎮 Posição do Dev Avatar:", posX, posY);
  desenharNoCanvas();
}

moverPersonagem('direita');`,html:`<canvas id="gameCanvas" width="300" height="150"></canvas>`,css:`#gameCanvas { background: #050505; border-radius: 8px; }`,explanation:`💡 <strong>O que você está vendo:</strong> Um motor de jogo 2D utilizando HTML5 Canvas! O código calcula as coordenadas (x, y) do personagem a cada quadro e atualiza a física de física de jogo em tempo real!`,renderVisual:()=>{n.innerHTML=`
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
        `,window.lucide&&window.lucide.createIcons(),window.initMiniGameCanvas()}}};window.triggerBotChat=e=>{let t=document.getElementById(`chatStream`);if(!t)return;let n={salario:`💼 Quanto ganha um desenvolvedor formado?`,curso:`🚀 O que vou aprender na DevCod?`,garantia:`🛡️ Como funciona a garantia incondicional?`},r={salario:`Um Desenvolvedor Full-Stack formado pela DevCod conquista salários de R$ 6.500 a R$ 18.000/mês!`,curso:`Você dominará Full-Stack (React 19, Next.js, Node.js), Arquitetura em Nuvem e Agentes Autônomos de IA.`,garantia:`Você tem 30 dias de garantia incondicional. Se não amar a plataforma, devolvemos 100% do seu dinheiro.`},i=document.createElement(`div`);i.className=`msg user-msg`,i.textContent=n[e]||`Pergunta enviada!`,t.appendChild(i),setTimeout(()=>{let n=document.createElement(`div`);n.className=`msg bot-msg`,n.textContent=r[e]||`Processado com sucesso!`,t.appendChild(n),t.scrollTop=t.scrollHeight,v(`🤖 [DevCod AI 200 OK]: Resposta gerada em 180ms para a consulta '${e}'.`)},400)},window.changeNeonColor=e=>{let t=document.getElementById(`cardNeonVisual`);if(!t)return;let n=e===`purple`?`#9d4edd`:e===`green`?`#00ff88`:`#00f0ff`;t.style.boxShadow=`0 0 35px ${n}88, inset 0 0 20px ${n}44`,t.style.borderColor=n,v(`🎨 [CSS Engine]: Cor do tema neon atualizada para ${e} (${n}).`)};let p=3,m=3970;window.simulateSaleClick=()=>{p++,m+=1490;let e=document.getElementById(`salesCounter`),t=document.getElementById(`revenueCounter`);e&&(e.textContent=`${p} Vendas`),t&&(t.textContent=`R$ ${m.toLocaleString(`pt-BR`)},00`),v(`💰 [E-Commerce Webhook 200 OK]: Venda #${p} Aprovada! +R$ 1.490,00`)};let h=60,g=65,_=1250;window.initMiniGameCanvas=()=>{let e=document.getElementById(`miniDevCanvas`);if(!e)return;let t=e.getContext(`2d`);function n(){t.clearRect(0,0,e.width,e.height),t.strokeStyle=`#00f0ff`,t.lineWidth=2,t.beginPath(),t.moveTo(0,95),t.lineTo(e.width,95),t.stroke(),t.fillStyle=`#00f0ff`,t.shadowColor=`#00f0ff`,t.shadowBlur=15,t.beginPath(),t.arc(h,g,14,0,Math.PI*2),t.fill(),t.shadowBlur=0,t.fillStyle=`#ffffff`,t.font=`bold 11px "Fira Code", monospace`,t.textAlign=`center`,t.fillText(`<Dev />`,h,g+4)}n()},window.moveGamePlayer=e=>{e===`left`&&(h=Math.max(30,h-35)),e===`right`&&(h=Math.min(330,h+35)),e===`jump`&&(g=35,setTimeout(()=>{g=65,window.initMiniGameCanvas()},300)),_+=150;let t=document.getElementById(`gameScore`);t&&(t.textContent=`${_.toLocaleString(`pt-BR`)} pts`),window.initMiniGameCanvas(),v(`🎮 [Canvas Engine 60FPS]: Jogador moveu para ${e.toUpperCase()} (x: ${h}, y: ${g}).`)};function v(e){if(!r)return;let t=document.createElement(`div`);t.className=`console-line`,t.innerHTML=`&gt; ${e}`,r.appendChild(t),r.scrollTop=r.scrollHeight}function y(t){u=t;let n=f[t];n&&(e.value=n[d]||n.js,n.renderVisual(),a&&(a.innerHTML=n.explanation),v(`🚀 Exemplo "${n.title}" carregado com sucesso.`))}o.forEach(e=>{e.addEventListener(`click`,()=>{o.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.preset;y(t)})}),s.forEach(t=>{t.addEventListener(`click`,()=>{s.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),d=t.dataset.tab;let n=f[u];n&&n[d]&&(e.value=n[d])})}),t?.addEventListener(`click`,()=>{let e=f[u];e&&(v(`⚡ Executando script [${new Date().toLocaleTimeString(`pt-BR`)}]...`),n.style.transition=`transform 0.2s ease, opacity 0.2s ease`,n.style.transform=`scale(0.98)`,n.style.opacity=`0.7`,setTimeout(()=>{n.style.transform=`scale(1)`,n.style.opacity=`1`,e.renderVisual(),v(`✅ Execução concluída com sucesso (0 erros). Palco visual atualizado!`)},350))}),i?.addEventListener(`click`,()=>{r&&(r.innerHTML=`<div class="console-line info">&gt; Terminal limpo.</div>`)}),c?.addEventListener(`input`,e=>{v(`⚡ Velocidade alterada para o nível ${e.target.value}.`)}),l?.addEventListener(`change`,e=>{u===`neon-generator`?window.changeNeonColor(e.target.value):v(`🎨 Cor neon alterada para ${e.target.value}.`)}),y(`ai-bot`)}),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelectorAll(`.level-btn`),t=document.getElementById(`selectedRoleTitle`),n=document.getElementById(`selectedSalaryValue`),r=document.getElementById(`roleDescription`),i=document.getElementById(`salaryBarChart`),a={intern:{title:`Estagiário de Engenharia de Software`,salary:`R$ 2.500 - R$ 4.000 / mês`,desc:`Auxílio no desenvolvimento de funcionalidades, escrita de testes básicos, aprendizado de workflows Git e código limpo.`,chart:[25,35,45,55,65,75,85,95]},junior:{title:`Desenvolvedor Junior`,salary:`R$ 5.500 - R$ 8.200 / mês`,desc:`Desenvolvimento de componentes frontend, endpoints REST, correção de bugs e envio de código via pipelines de CI/CD.`,chart:[30,45,60,70,80,90,95,100]},mid:{title:`Desenvolvedor Pleno (Mid-Level)`,salary:`R$ 9.500 - R$ 14.000 / mês`,desc:`Responsável por microserviços full-stack, otimizações de banco de dados, code reviews e estado frontend de alta performance.`,chart:[40,55,75,88,92,98,100,100]},senior:{title:`Engenheiro de Software Sênior`,salary:`R$ 16.000 - R$ 24.000 / mês`,desc:`Arquitetura de sistemas distribuídos tolerantes a falhas, mentoria de desenvolvedores juniores e decisões tecnológicas.`,chart:[50,70,85,95,100,100,100,100]},specialist:{title:`Especialista em IA & Nuvem`,salary:`R$ 22.000 - R$ 32.000 / mês`,desc:`Construção de pipelines de ajuste fino de LLMs corporativos, infraestrutura em nuvem de alta vazão e segurança.`,chart:[60,80,95,100,100,100,100,100]},techlead:{title:`Tech Lead / Líder Técnico`,salary:`R$ 25.000 - R$ 36.000 / mês`,desc:`Liderança de squads de engenharia, alinhamento técnico com produto e atração de talentos.`,chart:[65,85,98,100,100,100,100,100]},architect:{title:`Arquiteto Principal de Software`,salary:`R$ 30.000 - R$ 45.000 / mês`,desc:`Design de arquiteturas globais multi-região em nuvem, plataformas orientadas a eventos e modelos de dados enterprise.`,chart:[75,90,100,100,100,100,100,100]},manager:{title:`Gerente de Engenharia`,salary:`R$ 32.000 - R$ 50.000 / mês`,desc:`Liderança estratégica de múltiplas squads de engenharia, alocação de orçamento, cultura e alta execução.`,chart:[80,95,100,100,100,100,100,100]}},o=[`Estágio`,`Junior`,`Pleno`,`Sênior`,`Especialista`,`Tech Lead`,`Arquitetura`,`Gerência`];function s(s){let c=a[s]||a.junior;t&&(t.textContent=c.title),n&&(n.textContent=c.salary),r&&(r.textContent=c.desc),i&&(i.innerHTML=``,c.chart.forEach((t,n)=>{let r=document.createElement(`div`);r.className=`chart-bar-col`;let a=document.createElement(`div`);a.className=`bar-fill`,a.style.height=`0%`,setTimeout(()=>{a.style.height=`${t}%`,o[n]===e[0]?.dataset.level&&(a.style.background=`linear-gradient(to top, #00e5ff, #00f0ff)`)},50*n);let s=document.createElement(`div`);s.className=`bar-label`,s.textContent=o[n],r.appendChild(a),r.appendChild(s),i.appendChild(r)}))}e.forEach(t=>{t.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),s(t.dataset.level)})}),s(`junior`)}),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`modalBackdrop`),t=document.getElementById(`modalClose`),n=document.getElementById(`modalBody`),r=document.getElementById(`openStudentArea`),i=document.getElementById(`openEnrollModal`);function a(t){!e||!n||(n.innerHTML=t,e.classList.add(`open`),window.lucide&&window.lucide.createIcons())}function o(){e?.classList.remove(`open`)}t?.addEventListener(`click`,o),e?.addEventListener(`click`,t=>{t.target===e&&o()}),r?.addEventListener(`click`,()=>{a(`
      <div style="text-align: center;">
        <div class="badge purple-badge" style="margin-bottom: 1rem;"><i data-lucide="user-check"></i> Portal do Aluno DevCod</div>
        <h2 class="section-title" style="font-size: 2rem; margin-bottom: 0.5rem;">Login do Aluno</h2>
        <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 0.95rem;">Acesse seus cursos, assistente de IA, revisões 1 a 1 de código e ranking.</p>

        <form style="display: flex; flex-direction: column; gap: 1.2rem; text-align: left;" onsubmit="event.preventDefault(); alert('Login efetuado com sucesso! Redirecionando para o Dashboard DevCod...');">
          <div>
            <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">E-mail do Aluno</label>
            <input type="email" placeholder="aluno@devcod.com" required style="width: 100%; padding: 0.8rem 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: var(--radius-md); color: #fff; outline: none;">
          </div>
          <div>
            <label style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">Senha</label>
            <input type="password" placeholder="••••••••••••" required style="width: 100%; padding: 0.8rem 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: var(--radius-md); color: #fff; outline: none;">
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 1rem;">
            Acessar Dashboard <i data-lucide="arrow-right"></i>
          </button>
        </form>
      </div>
    `)}),i?.addEventListener(`click`,()=>{a(`
      <div style="text-align: center;">
        <div class="badge cyan-badge" style="margin-bottom: 1rem;"><i data-lucide="zap"></i> Matrícula Acelerada</div>
        <h2 class="section-title" style="font-size: 2.2rem; margin-bottom: 0.5rem;">Entre na <span class="gradient-text">DevCod Academy</span></h2>
        <p style="color: var(--text-muted); margin-bottom: 1.8rem; font-size: 0.95rem;">Desbloqueie acesso imediato a todos os 40+ cursos, Tutor de IA, mentorias ao vivo e rede de contratação.</p>

        <div style="padding: 1.5rem; background: rgba(0, 240, 255, 0.05); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: var(--radius-md); margin-bottom: 1.8rem; text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <strong style="font-size: 1.2rem;">Passe de Acesso Total</strong>
            <span style="font-size: 1.5rem; font-weight: 800;" class="gradient-text">12x R$ 149</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Inclui Garantia Incondicional de 30 Dias + Módulo Club Agents IA + Certificados</p>
        </div>

        <form style="display: flex; flex-direction: column; gap: 1rem; text-align: left;" onsubmit="event.preventDefault(); alert('Parabéns! Sua conta de aluno DevCod foi ativada com sucesso!');">
          <input type="text" placeholder="Nome Completo" required style="width: 100%; padding: 0.85rem 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: var(--radius-md); color: #fff; outline: none;">
          <input type="email" placeholder="Seu Melhor E-mail" required style="width: 100%; padding: 0.85rem 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: var(--radius-md); color: #fff; outline: none;">
          <input type="tel" placeholder="WhatsApp / Telefone com DDD" required style="width: 100%; padding: 0.85rem 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: var(--radius-md); color: #fff; outline: none;">
          
          <button type="submit" class="btn btn-primary btn-xl" style="width: 100%; margin-top: 1rem;">
            Concluir Matrícula Agora <i data-lucide="shield-check"></i>
          </button>
        </form>
      </div>
    `)}),window.openCourseModal=function(e,t,n,r,i){a(`
      <div>
        <div class="badge" style="margin-bottom: 0.8rem;"><i data-lucide="book-open"></i> ${t||`Programa Especializado`}</div>
        <h2 class="section-title" style="font-size: 2rem; margin-bottom: 0.6rem;">${e}</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1rem;">${i||`Formação prática completa projetada para transformar você em um especialista no desenvolvimento de aplicações empresariais.`}</p>

        <div style="display: flex; gap: 1.5rem; margin-bottom: 1.8rem; font-size: 0.9rem; color: var(--text-dim);">
          <span><i data-lucide="clock" style="vertical-align: middle;"></i> <strong>Duração:</strong> ${n||`60 Horas`}</span>
          <span><i data-lucide="bar-chart" style="vertical-align: middle;"></i> <strong>Nível:</strong> ${r||`Todos os Níveis`}</span>
        </div>

        <h4 style="margin-bottom: 0.8rem;">O Que Você Vai Dominar:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem;">
          <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem;"><i data-lucide="check" style="color: var(--neon-blue);"></i> Arquitetura & boas práticas prontas para produção</li>
          <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem;"><i data-lucide="check" style="color: var(--neon-blue);"></i> Desenvolvimento de projetos de portfólio reais</li>
          <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem;"><i data-lucide="check" style="color: var(--neon-blue);"></i> Revisões 1 a 1 de código por instrutores sêniores</li>
          <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem;"><i data-lucide="check" style="color: var(--neon-blue);"></i> Certificado digital oficial de habilidades</li>
        </ul>

        <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="document.getElementById('openEnrollModal').click()">
          Matricular-se Neste Programa <i data-lucide="arrow-right"></i>
        </button>
      </div>
    `)}}),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`navbar`),t=document.getElementById(`mobileToggle`),n=document.getElementById(`navLinks`);window.addEventListener(`scroll`,()=>{window.scrollY>40?e?.classList.add(`scrolled`):e?.classList.remove(`scrolled`)}),t?.addEventListener(`click`,()=>{n?.classList.toggle(`active`)}),n?.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{n.classList.remove(`active`)})});let r=[{title:`Engenharia Frontend Full-Stack`,cat:`frontend`,icon:`layout`,desc:`Domine interfaces modernas de usuário com React 19, Next.js 15, TypeScript, TailwindCSS, gerenciamento de estado & otimizações de performance.`,duration:`80 Horas`,level:`Iniciante ao Avançado`,badge:`Mais Popular`},{title:`Backend Microserviços & Node.js`,cat:`backend`,icon:`server`,desc:`Construa arquiteturas distribuídas escaláveis com Node.js, Express, NestJS, containers Docker, filas Redis & APIs REST/GraphQL.`,duration:`90 Horas`,level:`Intermediário`,badge:`Alta Demanda`},{title:`Python, IA & Machine Learning`,cat:`ai`,icon:`cpu`,desc:`Desenvolva redes neurais, integrações LLM, busca vetorial RAG, APIs Django e modelos de deep learning com PyTorch.`,duration:`100 Horas`,level:`Todos os Níveis`,badge:`Em Alta`},{title:`Infraestrutura Cloud & DevOps`,cat:`devops`,icon:`cloud`,desc:`Automatize implantações corporativas com AWS, Azure, Docker, clusters Kubernetes, Terraform & CI/CD com GitHub Actions.`,duration:`85 Horas`,level:`Avançado`,badge:`Essencial`},{title:`Desenvolvimento Mobile Multiplataforma`,cat:`frontend`,icon:`smartphone`,desc:`Construa aplicativos móveis nativos para iOS e Android usando React Native, Flutter, Kotlin & Swift.`,duration:`75 Horas`,level:`Intermediário`,badge:`Mobile`},{title:`Engenharia de Banco de Dados SQL & NoSQL`,cat:`backend`,icon:`database`,desc:`Projete esquemas de dados empresariais, indexação complexa, PostgreSQL, MongoDB, Redis, Prisma ORM & Supabase.`,duration:`65 Horas`,level:`Todos os Níveis`,badge:`Fundamental`},{title:`Cibersegurança & Hacking Ético`,cat:`devops`,icon:`shield-alert`,desc:`Domine segurança de aplicações, testes de intrusão, OAuth2, JWT, padrões de criptografia e prevenção de ameaças.`,duration:`70 Horas`,level:`Intermediário`,badge:`Segurança`},{title:`Arquitetura de Sistemas & Design Patterns`,cat:`backend`,icon:`git-branch`,desc:`Domine Domain-Driven Design (DDD), princípios SOLID, arquitetura orientada a eventos e sistemas de alta concorrência.`,duration:`60 Horas`,level:`Sênior`,badge:`Avançado`}],i=document.getElementById(`programsGrid`);function a(e=`all`){i&&(i.innerHTML=``,(e===`all`?r:r.filter(t=>t.cat===e)).forEach(e=>{let t=document.createElement(`div`);t.className=`program-card glass-panel`,t.innerHTML=`
        <div>
          <div class="card-top">
            <div class="card-icon"><i data-lucide="${e.icon}"></i></div>
            <span class="card-badge">${e.badge}</span>
          </div>
          <h3>${e.title}</h3>
          <p>${e.desc}</p>
        </div>
        <div>
          <div class="card-meta">
            <span><i data-lucide="clock"></i> ${e.duration}</span>
            <span><i data-lucide="bar-chart-2"></i> ${e.level}</span>
          </div>
          <button class="btn btn-secondary" style="width: 100%;" onclick="openCourseModal('${e.title}', '${e.cat}', '${e.duration}', '${e.level}', '${e.desc}')">
            Saiba Mais <i data-lucide="arrow-right"></i>
          </button>
        </div>
      `,i.appendChild(t)}),window.lucide&&window.lucide.createIcons())}a();let o=document.querySelectorAll(`.filter-btn`);o.forEach(e=>{e.addEventListener(`click`,()=>{o.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),a(e.dataset.filter)})});let s=[{name:`HTML5`,icon:`code`},{name:`CSS3`,icon:`file-code`},{name:`JavaScript`,icon:`terminal`},{name:`TypeScript`,icon:`file-type-2`},{name:`React`,icon:`atom`},{name:`Next.js`,icon:`zap`},{name:`Angular`,icon:`layers`},{name:`Vue.js`,icon:`box`},{name:`Node.js`,icon:`server`},{name:`Express`,icon:`cpu`},{name:`NestJS`,icon:`feather`},{name:`Python`,icon:`binary`},{name:`Django`,icon:`grid`},{name:`Java`,icon:`coffee`},{name:`Spring Boot`,icon:`shield`},{name:`C# / .NET`,icon:`command`},{name:`Go`,icon:`fast-forward`},{name:`Rust`,icon:`wrench`},{name:`Docker`,icon:`container`},{name:`AWS`,icon:`cloud`},{name:`Git & GitHub`,icon:`git-commit`},{name:`PostgreSQL`,icon:`database`},{name:`MongoDB`,icon:`hard-drive`},{name:`Redis`,icon:`activity`}],c=document.getElementById(`techGrid`);c&&s.forEach(e=>{let t=document.createElement(`div`);t.className=`tech-card`,t.innerHTML=`
        <div class="tech-icon-img"><i data-lucide="${e.icon}"></i></div>
        <span class="tech-name">${e.name}</span>
      `,c.appendChild(t)});let l=[{title:`Dashboard Financeiro SaaS`,tag:`SaaS Full-Stack`,desc:`Métricas em tempo real, integração de pagamentos com Stripe, gerador automático de faturas PDF.`,techs:[`Next.js`,`TypeScript`,`Prisma`,`Stripe`]},{title:`Clone do Netflix Streaming`,tag:`Domínio Frontend`,desc:`Player de vídeo de alta performance com sincronização de legendas e recomendações dinâmicas.`,techs:[`React`,`Redux Toolkit`,`TMDB API`,`Tailwind`]},{title:`Chatbot de IA Autônomo`,tag:`Engenharia de IA`,desc:`Bot empresarial de busca documental RAG alimentado por OpenAI GPT-4o & Pinecone Vector DB.`,techs:[`Python`,`LangChain`,`FastAPI`,`OpenAI`]},{title:`Player de Áudio Spotify`,tag:`Aplicação Web Áudio`,desc:`Interface de reprodução de áudio fluida com equalizador customizado e compartilhamento de playlists.`,techs:[`TypeScript`,`Next.js`,`Web Audio API`]},{title:`SaaS Comunidade Discord`,tag:`Sistemas em Tempo Real`,desc:`Canais de voz e vídeo em tempo real, salas de chat markdown usando WebSockets.`,techs:[`Node.js`,`Socket.io`,`PostgreSQL`,`Docker`]},{title:`Marketplace E-Commerce`,tag:`Aplicação Empresarial`,desc:`Loja multivendedor com rastreamento de estoque em tempo real, filtros de busca e painel administrativo.`,techs:[`NestJS`,`React`,`GraphQL`,`MongoDB`]}],u=document.getElementById(`projectsGrid`);u&&l.forEach(e=>{let t=document.createElement(`div`);t.className=`project-card glass-panel`,t.innerHTML=`
        <div>
          <div class="project-tag">${e.tag}</div>
          <h3>${e.title}</h3>
          <p>${e.desc}</p>
          <div class="project-techs">
            ${e.techs.map(e=>`<span class="tech-tag">${e}</span>`).join(``)}
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="alert('Iniciando demonstração ao vivo de ${e.title}...')">
          Ver Demonstração Ao Vivo <i data-lucide="external-link"></i>
        </button>
      `,u.appendChild(t)}),document.querySelectorAll(`.faq-question`).forEach(e=>{e.addEventListener(`click`,()=>{e.parentElement.classList.toggle(`active`)})}),window.lucide&&window.lucide.createIcons()});