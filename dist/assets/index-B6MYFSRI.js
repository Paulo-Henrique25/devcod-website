(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function e(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(n){if(n.ep)return;n.ep=!0;const l=e(n);fetch(n.href,l)}})();function J(){const d=document.getElementById("particleCanvas"),m=document.getElementById("hero");if(!d||!m)return;const e=d.getContext("2d");let u,n,l,h,x=-1e3,b=-1e3,p=!1,g=0;function S(){u=d.width=m.offsetWidth,n=d.height=m.offsetHeight,l=u/2,h=n*.35,z()}window.addEventListener("resize",S),m.addEventListener("mousemove",f=>{const k=m.getBoundingClientRect();x=f.clientX-k.left,b=f.clientY-k.top,p=!0}),m.addEventListener("mouseenter",()=>{p=!0}),m.addEventListener("mouseleave",()=>{p=!1,x=-1e3,b=-1e3});const s=["</>","{ ... }","const dev = true","=>","async/await","010101","<DevCod />","React 19","Next.js 15","TypeScript","Node.js","Python","AI Agents","SQL","Docker","AWS Cloud","Git Push","npm run dev","API REST","GraphQL","NestJS"],c=480;let i=[],E=[],R=[];function z(){i=[],E=[],R=[];const f=Math.min(u,n)*(u>992?.38:.35),k=48;for(let r=0;r<k;r++){const A=Math.acos(-1+2*r/k),$=Math.sqrt(k*Math.PI)*A,T=Math.cos($)*Math.sin(A)*f,t=Math.sin($)*Math.sin(A)*f,w=Math.cos(A)*f;i.push({baseX:T,baseY:t,baseZ:w,x:T,y:t,z:w,projX:0,projY:0,scale:0,text:s[r%s.length],isBadge:r%3===0,color:r%3===0?"#00f0ff":r%3===1?"#9d4edd":"#00e5ff",pulseOffset:r*.2})}const L=f*1.18;for(let r=0;r<3;r++){const A=[];for(let T=0;T<36;T++){const t=T/36*Math.PI*2;A.push({x:Math.cos(t)*L,y:Math.sin(t)*L,z:0})}E.push({points:A,tiltX:(r-1)*.75,tiltY:r*.9+.4,rotSpeed:.008+r*.004,angle:r*1.2,color:r===0?"#00f0ff":r===1?"#9d4edd":"#00e5ff"})}for(let r=0;r<30;r++)R.push({x:(Math.random()-.5)*u*1.2,y:(Math.random()-.5)*n*1.2,z:(Math.random()-.5)*500,speed:Math.random()*1.8+.8,char:Math.random()>.5?"1":"0",color:Math.random()>.5?"rgba(0, 240, 255, 0.35)":"rgba(157, 78, 225, 0.35)"})}S();let D=0,N=0,o=0;function a(){o+=.018,e.clearRect(0,0,u,n),g+=((p?1:0)-g)*.08;const k=.008+g*.012;D+=k,N+=k*.5;const L=Math.cos(D),r=Math.sin(D),A=Math.cos(N),$=Math.sin(N);E.forEach(t=>{t.angle+=t.rotSpeed*(1+g*.5);const w=Math.cos(t.angle),y=Math.sin(t.angle),v=Math.cos(t.tiltX),C=Math.sin(t.tiltX),M=Math.cos(t.tiltY),j=Math.sin(t.tiltY),P=t.points.map(I=>{let H=I.x*w-I.y*y,V=I.y*w+I.x*y,O=I.z,G=H*M-O*j,X=O*M+H*j,Y=V*v-X*C,F=X*v+V*C,W=G*L-F*r,B=F*L+G*r,Q=Y*A-B*$;B=B*A+Y*$;const q=c/(c+B+350);return{x:W*q+l,y:Q*q+h,scale:q,z:B}});e.beginPath(),e.moveTo(P[0].x,P[0].y);for(let I=1;I<P.length;I++)e.lineTo(P[I].x,P[I].y);e.closePath(),e.strokeStyle=t.color,e.lineWidth=1.2+g*.8,e.globalAlpha=.5+g*.3,e.stroke(),e.globalAlpha=1}),i.forEach(t=>{let w=t.baseX*L-t.baseZ*r,y=t.baseZ*L+t.baseX*r,v=t.baseY*A-y*$,C=y*A+t.baseY*$;v+=Math.sin(o*2+t.pulseOffset)*12,t.x=w,t.y=v,t.z=C;const M=c/(c+C+350);t.scale=M,t.projX=w*M+l,t.projY=v*M+h});const T=130+g*20;for(let t=0;t<i.length;t++)for(let w=t+1;w<i.length;w++){const y=i[t],v=i[w],C=y.projX-v.projX,M=y.projY-v.projY,j=Math.sqrt(C*C+M*M);if(j<T){const P=(1-j/T)*.28*Math.min(y.scale,v.scale);e.beginPath(),e.moveTo(y.projX,y.projY),e.lineTo(v.projX,v.projY);const I=Math.min(Math.hypot(y.projX-x,y.projY-b),Math.hypot(v.projX-x,v.projY-b));g>.05&&I<160?(e.strokeStyle=`rgba(0, 240, 255, ${Math.min(.9,P+.45)})`,e.lineWidth=1.2):(e.strokeStyle=`rgba(157, 78, 225, ${P})`,e.lineWidth=.6),e.stroke()}}e.font='600 13px "Fira Code", monospace',e.textAlign="center",e.textBaseline="middle",i.forEach(t=>{if(t.scale<=0)return;const w=Math.min(1,Math.max(.3,(t.z+300)/600)),y=Math.hypot(t.projX-x,t.projY-b);e.save(),e.translate(t.projX,t.projY);const v=g>.05&&y<140,C=t.scale*(t.isBadge?1.15:.95)*(1+(v?.3:0));if(e.scale(C,C),t.isBadge||v){const M=e.measureText(t.text).width+16;e.fillStyle=v?"rgba(0, 240, 255, 0.28)":"rgba(15, 20, 32, 0.85)",e.strokeStyle=v?"#00f0ff":"rgba(0, 240, 255, 0.4)",e.lineWidth=v?1.5:1,e.beginPath(),e.roundRect(-M/2,-11,M,22,6),e.fill(),e.stroke(),e.fillStyle="#ffffff",e.globalAlpha=1}else e.fillStyle=t.color,e.globalAlpha=w;e.fillText(t.text,0,0),e.restore()}),e.font='12px "Fira Code", monospace',R.forEach(t=>{t.y+=t.speed*(1+g*.4),t.y>n*.8&&(t.y=-n*.8);let w=t.x*L-t.z*r,y=t.z*L+t.x*r,v=t.y*A-y*$;y=y*A+t.y*$;const C=c/(c+y+350),M=w*C+l,j=v*C+h;e.fillStyle=t.color,e.globalAlpha=.35*C,e.fillText(t.char,M,j)}),e.globalAlpha=1,requestAnimationFrame(a)}a()}window.addEventListener("DOMContentLoaded",J);document.addEventListener("DOMContentLoaded",()=>{const d=document.getElementById("codeEditor"),m=document.getElementById("runCodeBtn"),e=document.getElementById("visualStage"),u=document.getElementById("consoleOutput"),n=document.getElementById("clearConsole"),l=document.getElementById("aiTutorMsg"),h=document.querySelectorAll(".playground-presets .preset-btn"),x=document.querySelectorAll(".tab-group .tab-btn"),b=document.getElementById("speedSlider"),p=document.getElementById("colorPicker");if(!d||!e)return;let g="ai-bot",S="js";const s={"ai-bot":{title:"Chatbot de IA com Resposta Humana",js:`// Agente de IA DevCod v5.0
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
}`,explanation:"💡 <strong>O que você está vendo:</strong> Este código cria uma conexão assíncrona (API) com um Modelo de Linguagem de Inteligência Artificial. Ao clicar nas perguntas interativas no palco ao lado, o código consulta a IA e renderiza as respostas na tela em tempo real!",renderVisual:()=>{e.innerHTML=`
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
        `,window.lucide&&window.lucide.createIcons()}},"neon-generator":{title:"Gerador de Efeitos Neon 3D",js:`// Motor de Estilização Neon Dinâmica
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
}`,explanation:"💡 <strong>O que você está vendo:</strong> O código ajusta instantaneamente propriedades de CSS como <code>box-shadow</code>, <code>backdrop-filter</code> e <code>border-color</code>. Você pode alterar a cor no seletor do editor para ver o card mudar ao vivo!",renderVisual:()=>{const o=(p==null?void 0:p.value)||"cyan",a=o==="purple"?"#9d4edd":o==="green"?"#00ff88":"#00f0ff";e.innerHTML=`
          <div class="neon-stage-card" id="cardNeonVisual" style="box-shadow: 0 0 35px ${a}88, inset 0 0 20px ${a}44; border-color: ${a}">
            <div class="neon-icon"><i data-lucide="sparkles" style="color: ${a}"></i></div>
            <h4 style="color: #fff; margin-bottom: 8px;">Card Neon devcod.js</h4>
            <p style="color: #94a3b8; font-size: 0.9rem;">Efeito Glassmorphic Renderizado no Navegador</p>
            <div class="neon-actions" style="margin-top: 15px;">
              <button class="btn btn-sm" onclick="window.changeNeonColor('cyan')" style="background: rgba(0,240,255,0.2); border: 1px solid #00f0ff; color: #fff;">Ciano</button>
              <button class="btn btn-sm" onclick="window.changeNeonColor('purple')" style="background: rgba(157,78,225,0.2); border: 1px solid #9d4edd; color: #fff;">Roxo</button>
              <button class="btn btn-sm" onclick="window.changeNeonColor('green')" style="background: rgba(0,255,136,0.2); border: 1px solid #00ff88; color: #fff;">Verde</button>
            </div>
          </div>
        `,window.lucide&&window.lucide.createIcons()}},"ecommerce-sales":{title:"Robô de Vendas & Automação",js:`// Robô Autônomo de Vendas DevCod
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
}`,explanation:"💡 <strong>O que você está vendo:</strong> Um script de automação de e-commerce. A cada nova transação aprovada na rede, o código incrementa variáveis de contador e atualiza a interface financeira do cliente em tempo real!",renderVisual:()=>{e.innerHTML=`
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
        `,window.lucide&&window.lucide.createIcons()}},"mini-game":{title:"Mini-Jogo 2D com Física",js:`// Loop de Jogo 2D em HTML5 Canvas
let posX = 120, posY = 60;
let velocidade = 5;

function moverPersonagem(direcao) {
  if (direcao === 'direita') posX += velocidade * 8;
  if (direcao === 'esquerda') posX -= velocidade * 8;
  if (direcao === 'pular') posY -= 25;

  console.log("🎮 Posição do Dev Avatar:", posX, posY);
  desenharNoCanvas();
}

moverPersonagem('direita');`,html:'<canvas id="gameCanvas" width="300" height="150"></canvas>',css:"#gameCanvas { background: #050505; border-radius: 8px; }",explanation:"💡 <strong>O que você está vendo:</strong> Um motor de jogo 2D utilizando HTML5 Canvas! O código calcula as coordenadas (x, y) do personagem a cada quadro e atualiza a física de física de jogo em tempo real!",renderVisual:()=>{e.innerHTML=`
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
        `,window.lucide&&window.lucide.createIcons(),window.initMiniGameCanvas()}}};window.triggerBotChat=o=>{const a=document.getElementById("chatStream");if(!a)return;const f={salario:"💼 Quanto ganha um desenvolvedor formado?",curso:"🚀 O que vou aprender na DevCod?",garantia:"🛡️ Como funciona a garantia incondicional?"},k={salario:"Um Desenvolvedor Full-Stack formado pela DevCod conquista salários de R$ 6.500 a R$ 18.000/mês!",curso:"Você dominará Full-Stack (React 19, Next.js, Node.js), Arquitetura em Nuvem e Agentes Autônomos de IA.",garantia:"Você tem 30 dias de garantia incondicional. Se não amar a plataforma, devolvemos 100% do seu dinheiro."},L=document.createElement("div");L.className="msg user-msg",L.textContent=f[o]||"Pergunta enviada!",a.appendChild(L),setTimeout(()=>{const r=document.createElement("div");r.className="msg bot-msg",r.textContent=k[o]||"Processado com sucesso!",a.appendChild(r),a.scrollTop=a.scrollHeight,D(`🤖 [DevCod AI 200 OK]: Resposta gerada em 180ms para a consulta '${o}'.`)},400)},window.changeNeonColor=o=>{const a=document.getElementById("cardNeonVisual");if(!a)return;const f=o==="purple"?"#9d4edd":o==="green"?"#00ff88":"#00f0ff";a.style.boxShadow=`0 0 35px ${f}88, inset 0 0 20px ${f}44`,a.style.borderColor=f,D(`🎨 [CSS Engine]: Cor do tema neon atualizada para ${o} (${f}).`)};let c=3,i=3970;window.simulateSaleClick=()=>{c++,i+=1490;const o=document.getElementById("salesCounter"),a=document.getElementById("revenueCounter");o&&(o.textContent=`${c} Vendas`),a&&(a.textContent=`R$ ${i.toLocaleString("pt-BR")},00`),D(`💰 [E-Commerce Webhook 200 OK]: Venda #${c} Aprovada! +R$ 1.490,00`)};let E=60,R=65,z=1250;window.initMiniGameCanvas=()=>{const o=document.getElementById("miniDevCanvas");if(!o)return;const a=o.getContext("2d");function f(){a.clearRect(0,0,o.width,o.height),a.strokeStyle="#00f0ff",a.lineWidth=2,a.beginPath(),a.moveTo(0,95),a.lineTo(o.width,95),a.stroke(),a.fillStyle="#00f0ff",a.shadowColor="#00f0ff",a.shadowBlur=15,a.beginPath(),a.arc(E,R,14,0,Math.PI*2),a.fill(),a.shadowBlur=0,a.fillStyle="#ffffff",a.font='bold 11px "Fira Code", monospace',a.textAlign="center",a.fillText("<Dev />",E,R+4)}f()},window.moveGamePlayer=o=>{o==="left"&&(E=Math.max(30,E-35)),o==="right"&&(E=Math.min(330,E+35)),o==="jump"&&(R=35,setTimeout(()=>{R=65,window.initMiniGameCanvas()},300)),z+=150;const a=document.getElementById("gameScore");a&&(a.textContent=`${z.toLocaleString("pt-BR")} pts`),window.initMiniGameCanvas(),D(`🎮 [Canvas Engine 60FPS]: Jogador moveu para ${o.toUpperCase()} (x: ${E}, y: ${R}).`)};function D(o){if(!u)return;const a=document.createElement("div");a.className="console-line",a.innerHTML=`&gt; ${o}`,u.appendChild(a),u.scrollTop=u.scrollHeight}function N(o){g=o;const a=s[o];a&&(d.value=a[S]||a.js,a.renderVisual(),l&&(l.innerHTML=a.explanation),D(`🚀 Exemplo "${a.title}" carregado com sucesso.`))}h.forEach(o=>{o.addEventListener("click",()=>{h.forEach(f=>f.classList.remove("active")),o.classList.add("active");const a=o.dataset.preset;N(a)})}),x.forEach(o=>{o.addEventListener("click",()=>{x.forEach(f=>f.classList.remove("active")),o.classList.add("active"),S=o.dataset.tab;const a=s[g];a&&a[S]&&(d.value=a[S])})}),m==null||m.addEventListener("click",()=>{const o=s[g];o&&(D(`⚡ Executando script [${new Date().toLocaleTimeString("pt-BR")}]...`),e.style.transition="transform 0.2s ease, opacity 0.2s ease",e.style.transform="scale(0.98)",e.style.opacity="0.7",setTimeout(()=>{e.style.transform="scale(1)",e.style.opacity="1",o.renderVisual(),D("✅ Execução concluída com sucesso (0 erros). Palco visual atualizado!")},350))}),n==null||n.addEventListener("click",()=>{u&&(u.innerHTML='<div class="console-line info">&gt; Terminal limpo.</div>')}),b==null||b.addEventListener("input",o=>{D(`⚡ Velocidade alterada para o nível ${o.target.value}.`)}),p==null||p.addEventListener("change",o=>{g==="neon-generator"?window.changeNeonColor(o.target.value):D(`🎨 Cor neon alterada para ${o.target.value}.`)}),N("ai-bot")});document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelectorAll(".level-btn"),m=document.getElementById("selectedRoleTitle"),e=document.getElementById("selectedSalaryValue"),u=document.getElementById("roleDescription"),n=document.getElementById("salaryBarChart"),l={intern:{title:"Estagiário de Engenharia de Software",salary:"R$ 2.500 - R$ 4.000 / mês",desc:"Auxílio no desenvolvimento de funcionalidades, escrita de testes básicos, aprendizado de workflows Git e código limpo.",chart:[25,35,45,55,65,75,85,95]},junior:{title:"Desenvolvedor Junior",salary:"R$ 5.500 - R$ 8.200 / mês",desc:"Desenvolvimento de componentes frontend, endpoints REST, correção de bugs e envio de código via pipelines de CI/CD.",chart:[30,45,60,70,80,90,95,100]},mid:{title:"Desenvolvedor Pleno (Mid-Level)",salary:"R$ 9.500 - R$ 14.000 / mês",desc:"Responsável por microserviços full-stack, otimizações de banco de dados, code reviews e estado frontend de alta performance.",chart:[40,55,75,88,92,98,100,100]},senior:{title:"Engenheiro de Software Sênior",salary:"R$ 16.000 - R$ 24.000 / mês",desc:"Arquitetura de sistemas distribuídos tolerantes a falhas, mentoria de desenvolvedores juniores e decisões tecnológicas.",chart:[50,70,85,95,100,100,100,100]},specialist:{title:"Especialista em IA & Nuvem",salary:"R$ 22.000 - R$ 32.000 / mês",desc:"Construção de pipelines de ajuste fino de LLMs corporativos, infraestrutura em nuvem de alta vazão e segurança.",chart:[60,80,95,100,100,100,100,100]},techlead:{title:"Tech Lead / Líder Técnico",salary:"R$ 25.000 - R$ 36.000 / mês",desc:"Liderança de squads de engenharia, alinhamento técnico com produto e atração de talentos.",chart:[65,85,98,100,100,100,100,100]},architect:{title:"Arquiteto Principal de Software",salary:"R$ 30.000 - R$ 45.000 / mês",desc:"Design de arquiteturas globais multi-região em nuvem, plataformas orientadas a eventos e modelos de dados enterprise.",chart:[75,90,100,100,100,100,100,100]},manager:{title:"Gerente de Engenharia",salary:"R$ 32.000 - R$ 50.000 / mês",desc:"Liderança estratégica de múltiplas squads de engenharia, alocação de orçamento, cultura e alta execução.",chart:[80,95,100,100,100,100,100,100]}},h=["Estágio","Junior","Pleno","Sênior","Especialista","Tech Lead","Arquitetura","Gerência"];function x(b){const p=l[b]||l.junior;m&&(m.textContent=p.title),e&&(e.textContent=p.salary),u&&(u.textContent=p.desc),n&&(n.innerHTML="",p.chart.forEach((g,S)=>{const s=document.createElement("div");s.className="chart-bar-col";const c=document.createElement("div");c.className="bar-fill",c.style.height="0%",setTimeout(()=>{var E;c.style.height=`${g}%`,h[S]===((E=d[0])==null?void 0:E.dataset.level)&&(c.style.background="linear-gradient(to top, #00e5ff, #00f0ff)")},50*S);const i=document.createElement("div");i.className="bar-label",i.textContent=h[S],s.appendChild(c),s.appendChild(i),n.appendChild(s)}))}d.forEach(b=>{b.addEventListener("click",()=>{d.forEach(p=>p.classList.remove("active")),b.classList.add("active"),x(b.dataset.level)})}),x("junior")});document.addEventListener("DOMContentLoaded",()=>{const d=document.getElementById("modalBackdrop"),m=document.getElementById("modalClose"),e=document.getElementById("modalBody"),u=document.getElementById("openStudentArea"),n=document.getElementById("openEnrollModal");function l(x){!d||!e||(e.innerHTML=x,d.classList.add("open"),window.lucide&&window.lucide.createIcons())}function h(){d==null||d.classList.remove("open")}m==null||m.addEventListener("click",h),d==null||d.addEventListener("click",x=>{x.target===d&&h()}),u==null||u.addEventListener("click",()=>{l(`
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
    `)}),n==null||n.addEventListener("click",()=>{l(`
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
    `)}),window.openCourseModal=function(x,b,p,g,S){l(`
      <div>
        <div class="badge" style="margin-bottom: 0.8rem;"><i data-lucide="book-open"></i> ${b||"Programa Especializado"}</div>
        <h2 class="section-title" style="font-size: 2rem; margin-bottom: 0.6rem;">${x}</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1rem;">${S||"Formação prática completa projetada para transformar você em um especialista no desenvolvimento de aplicações empresariais."}</p>

        <div style="display: flex; gap: 1.5rem; margin-bottom: 1.8rem; font-size: 0.9rem; color: var(--text-dim);">
          <span><i data-lucide="clock" style="vertical-align: middle;"></i> <strong>Duração:</strong> ${p||"60 Horas"}</span>
          <span><i data-lucide="bar-chart" style="vertical-align: middle;"></i> <strong>Nível:</strong> ${g||"Todos os Níveis"}</span>
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
    `)}});document.addEventListener("DOMContentLoaded",()=>{const d=document.getElementById("navbar"),m=document.getElementById("mobileToggle"),e=document.getElementById("navLinks");window.addEventListener("scroll",()=>{window.scrollY>40?d==null||d.classList.add("scrolled"):d==null||d.classList.remove("scrolled")}),m==null||m.addEventListener("click",()=>{e==null||e.classList.toggle("active")}),e==null||e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{e.classList.remove("active")})});const u=[{title:"Engenharia Frontend Full-Stack",cat:"frontend",icon:"layout",desc:"Domine interfaces modernas de usuário com React 19, Next.js 15, TypeScript, TailwindCSS, gerenciamento de estado & otimizações de performance.",duration:"80 Horas",level:"Iniciante ao Avançado",badge:"Mais Popular"},{title:"Backend Microserviços & Node.js",cat:"backend",icon:"server",desc:"Construa arquiteturas distribuídas escaláveis com Node.js, Express, NestJS, containers Docker, filas Redis & APIs REST/GraphQL.",duration:"90 Horas",level:"Intermediário",badge:"Alta Demanda"},{title:"Python, IA & Machine Learning",cat:"ai",icon:"cpu",desc:"Desenvolva redes neurais, integrações LLM, busca vetorial RAG, APIs Django e modelos de deep learning com PyTorch.",duration:"100 Horas",level:"Todos os Níveis",badge:"Em Alta"},{title:"Infraestrutura Cloud & DevOps",cat:"devops",icon:"cloud",desc:"Automatize implantações corporativas com AWS, Azure, Docker, clusters Kubernetes, Terraform & CI/CD com GitHub Actions.",duration:"85 Horas",level:"Avançado",badge:"Essencial"},{title:"Desenvolvimento Mobile Multiplataforma",cat:"frontend",icon:"smartphone",desc:"Construa aplicativos móveis nativos para iOS e Android usando React Native, Flutter, Kotlin & Swift.",duration:"75 Horas",level:"Intermediário",badge:"Mobile"},{title:"Engenharia de Banco de Dados SQL & NoSQL",cat:"backend",icon:"database",desc:"Projete esquemas de dados empresariais, indexação complexa, PostgreSQL, MongoDB, Redis, Prisma ORM & Supabase.",duration:"65 Horas",level:"Todos os Níveis",badge:"Fundamental"},{title:"Cibersegurança & Hacking Ético",cat:"devops",icon:"shield-alert",desc:"Domine segurança de aplicações, testes de intrusão, OAuth2, JWT, padrões de criptografia e prevenção de ameaças.",duration:"70 Horas",level:"Intermediário",badge:"Segurança"},{title:"Arquitetura de Sistemas & Design Patterns",cat:"backend",icon:"git-branch",desc:"Domine Domain-Driven Design (DDD), princípios SOLID, arquitetura orientada a eventos e sistemas de alta concorrência.",duration:"60 Horas",level:"Sênior",badge:"Avançado"}],n=document.getElementById("programsGrid");function l(s="all"){if(!n)return;n.innerHTML="",(s==="all"?u:u.filter(i=>i.cat===s)).forEach(i=>{const E=document.createElement("div");E.className="program-card glass-panel",E.innerHTML=`
        <div>
          <div class="card-top">
            <div class="card-icon"><i data-lucide="${i.icon}"></i></div>
            <span class="card-badge">${i.badge}</span>
          </div>
          <h3>${i.title}</h3>
          <p>${i.desc}</p>
        </div>
        <div>
          <div class="card-meta">
            <span><i data-lucide="clock"></i> ${i.duration}</span>
            <span><i data-lucide="bar-chart-2"></i> ${i.level}</span>
          </div>
          <button class="btn btn-secondary" style="width: 100%;" onclick="openCourseModal('${i.title}', '${i.cat}', '${i.duration}', '${i.level}', '${i.desc}')">
            Saiba Mais <i data-lucide="arrow-right"></i>
          </button>
        </div>
      `,n.appendChild(E)}),window.lucide&&window.lucide.createIcons()}l();const h=document.querySelectorAll(".filter-btn");h.forEach(s=>{s.addEventListener("click",()=>{h.forEach(c=>c.classList.remove("active")),s.classList.add("active"),l(s.dataset.filter)})});const x=[{name:"HTML5",icon:"code"},{name:"CSS3",icon:"file-code"},{name:"JavaScript",icon:"terminal"},{name:"TypeScript",icon:"file-type-2"},{name:"React",icon:"atom"},{name:"Next.js",icon:"zap"},{name:"Angular",icon:"layers"},{name:"Vue.js",icon:"box"},{name:"Node.js",icon:"server"},{name:"Express",icon:"cpu"},{name:"NestJS",icon:"feather"},{name:"Python",icon:"binary"},{name:"Django",icon:"grid"},{name:"Java",icon:"coffee"},{name:"Spring Boot",icon:"shield"},{name:"C# / .NET",icon:"command"},{name:"Go",icon:"fast-forward"},{name:"Rust",icon:"wrench"},{name:"Docker",icon:"container"},{name:"AWS",icon:"cloud"},{name:"Git & GitHub",icon:"git-commit"},{name:"PostgreSQL",icon:"database"},{name:"MongoDB",icon:"hard-drive"},{name:"Redis",icon:"activity"}],b=document.getElementById("techGrid");b&&x.forEach(s=>{const c=document.createElement("div");c.className="tech-card",c.innerHTML=`
        <div class="tech-icon-img"><i data-lucide="${s.icon}"></i></div>
        <span class="tech-name">${s.name}</span>
      `,b.appendChild(c)});const p=[{title:"Dashboard Financeiro SaaS",tag:"SaaS Full-Stack",desc:"Métricas em tempo real, integração de pagamentos com Stripe, gerador automático de faturas PDF.",techs:["Next.js","TypeScript","Prisma","Stripe"]},{title:"Clone do Netflix Streaming",tag:"Domínio Frontend",desc:"Player de vídeo de alta performance com sincronização de legendas e recomendações dinâmicas.",techs:["React","Redux Toolkit","TMDB API","Tailwind"]},{title:"Chatbot de IA Autônomo",tag:"Engenharia de IA",desc:"Bot empresarial de busca documental RAG alimentado por OpenAI GPT-4o & Pinecone Vector DB.",techs:["Python","LangChain","FastAPI","OpenAI"]},{title:"Player de Áudio Spotify",tag:"Aplicação Web Áudio",desc:"Interface de reprodução de áudio fluida com equalizador customizado e compartilhamento de playlists.",techs:["TypeScript","Next.js","Web Audio API"]},{title:"SaaS Comunidade Discord",tag:"Sistemas em Tempo Real",desc:"Canais de voz e vídeo em tempo real, salas de chat markdown usando WebSockets.",techs:["Node.js","Socket.io","PostgreSQL","Docker"]},{title:"Marketplace E-Commerce",tag:"Aplicação Empresarial",desc:"Loja multivendedor com rastreamento de estoque em tempo real, filtros de busca e painel administrativo.",techs:["NestJS","React","GraphQL","MongoDB"]}],g=document.getElementById("projectsGrid");g&&p.forEach(s=>{const c=document.createElement("div");c.className="project-card glass-panel",c.innerHTML=`
        <div>
          <div class="project-tag">${s.tag}</div>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <div class="project-techs">
            ${s.techs.map(i=>`<span class="tech-tag">${i}</span>`).join("")}
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="alert('Iniciando demonstração ao vivo de ${s.title}...')">
          Ver Demonstração Ao Vivo <i data-lucide="external-link"></i>
        </button>
      `,g.appendChild(c)}),document.querySelectorAll(".faq-question").forEach(s=>{s.addEventListener("click",()=>{s.parentElement.classList.toggle("active")})}),window.lucide&&window.lucide.createIcons()});
