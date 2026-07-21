/* DevCod Main Application Controller & Data Provider (pt-BR) */
document.addEventListener('DOMContentLoaded', () => {

  // 1. NAVBAR SCROLL & MOBILE MENU TOGGLE
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  mobileToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
  });

  // Auto-close mobile drawer on link click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // 2. DADOS E RENDERIZAÇÃO DOS PROGRAMAS DE TREINAMENTO
  const programsData = [
    {
      title: "Engenharia Frontend Full-Stack",
      cat: "frontend",
      icon: "layout",
      desc: "Domine interfaces modernas de usuário com React 19, Next.js 15, TypeScript, TailwindCSS, gerenciamento de estado & otimizações de performance.",
      duration: "80 Horas",
      level: "Iniciante ao Avançado",
      badge: "Mais Popular"
    },
    {
      title: "Backend Microserviços & Node.js",
      cat: "backend",
      icon: "server",
      desc: "Construa arquiteturas distribuídas escaláveis com Node.js, Express, NestJS, containers Docker, filas Redis & APIs REST/GraphQL.",
      duration: "90 Horas",
      level: "Intermediário",
      badge: "Alta Demanda"
    },
    {
      title: "Python, IA & Machine Learning",
      cat: "ai",
      icon: "cpu",
      desc: "Desenvolva redes neurais, integrações LLM, busca vetorial RAG, APIs Django e modelos de deep learning com PyTorch.",
      duration: "100 Horas",
      level: "Todos os Níveis",
      badge: "Em Alta"
    },
    {
      title: "Infraestrutura Cloud & DevOps",
      cat: "devops",
      icon: "cloud",
      desc: "Automatize implantações corporativas com AWS, Azure, Docker, clusters Kubernetes, Terraform & CI/CD com GitHub Actions.",
      duration: "85 Horas",
      level: "Avançado",
      badge: "Essencial"
    },
    {
      title: "Desenvolvimento Mobile Multiplataforma",
      cat: "frontend",
      icon: "smartphone",
      desc: "Construa aplicativos móveis nativos para iOS e Android usando React Native, Flutter, Kotlin & Swift.",
      duration: "75 Horas",
      level: "Intermediário",
      badge: "Mobile"
    },
    {
      title: "Engenharia de Banco de Dados SQL & NoSQL",
      cat: "backend",
      icon: "database",
      desc: "Projete esquemas de dados empresariais, indexação complexa, PostgreSQL, MongoDB, Redis, Prisma ORM & Supabase.",
      duration: "65 Horas",
      level: "Todos os Níveis",
      badge: "Fundamental"
    },
    {
      title: "Cibersegurança & Hacking Ético",
      cat: "devops",
      icon: "shield-alert",
      desc: "Domine segurança de aplicações, testes de intrusão, OAuth2, JWT, padrões de criptografia e prevenção de ameaças.",
      duration: "70 Horas",
      level: "Intermediário",
      badge: "Segurança"
    },
    {
      title: "Arquitetura de Sistemas & Design Patterns",
      cat: "backend",
      icon: "git-branch",
      desc: "Domine Domain-Driven Design (DDD), princípios SOLID, arquitetura orientada a eventos e sistemas de alta concorrência.",
      duration: "60 Horas",
      level: "Sênior",
      badge: "Avançado"
    }
  ];

  const programsGrid = document.getElementById('programsGrid');

  function renderPrograms(filter = 'all') {
    if (!programsGrid) return;
    programsGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? programsData 
      : programsData.filter(p => p.cat === filter);

    filtered.forEach(prog => {
      const card = document.createElement('div');
      card.className = 'program-card glass-panel';
      card.innerHTML = `
        <div>
          <div class="card-top">
            <div class="card-icon"><i data-lucide="${prog.icon}"></i></div>
            <span class="card-badge">${prog.badge}</span>
          </div>
          <h3>${prog.title}</h3>
          <p>${prog.desc}</p>
        </div>
        <div>
          <div class="card-meta">
            <span><i data-lucide="clock"></i> ${prog.duration}</span>
            <span><i data-lucide="bar-chart-2"></i> ${prog.level}</span>
          </div>
          <button class="btn btn-secondary" style="width: 100%;" onclick="openCourseModal('${prog.title}', '${prog.cat}', '${prog.duration}', '${prog.level}', '${prog.desc}')">
            Saiba Mais <i data-lucide="arrow-right"></i>
          </button>
        </div>
      `;
      programsGrid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  renderPrograms();

  // Filtros dos Programas
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPrograms(btn.dataset.filter);
    });
  });

  // 3. GRADE DE TECNOLOGIAS EM DESTAQUE
  const techStack = [
    { name: "HTML5", icon: "code" },
    { name: "CSS3", icon: "file-code" },
    { name: "JavaScript", icon: "terminal" },
    { name: "TypeScript", icon: "file-type-2" },
    { name: "React", icon: "atom" },
    { name: "Next.js", icon: "zap" },
    { name: "Angular", icon: "layers" },
    { name: "Vue.js", icon: "box" },
    { name: "Node.js", icon: "server" },
    { name: "Express", icon: "cpu" },
    { name: "NestJS", icon: "feather" },
    { name: "Python", icon: "binary" },
    { name: "Django", icon: "grid" },
    { name: "Java", icon: "coffee" },
    { name: "Spring Boot", icon: "shield" },
    { name: "C# / .NET", icon: "command" },
    { name: "Go", icon: "fast-forward" },
    { name: "Rust", icon: "wrench" },
    { name: "Docker", icon: "container" },
    { name: "AWS", icon: "cloud" },
    { name: "Git & GitHub", icon: "git-commit" },
    { name: "PostgreSQL", icon: "database" },
    { name: "MongoDB", icon: "hard-drive" },
    { name: "Redis", icon: "activity" }
  ];

  const techGrid = document.getElementById('techGrid');
  if (techGrid) {
    techStack.forEach(t => {
      const card = document.createElement('div');
      card.className = 'tech-card';
      card.innerHTML = `
        <div class="tech-icon-img"><i data-lucide="${t.icon}"></i></div>
        <span class="tech-name">${t.name}</span>
      `;
      techGrid.appendChild(card);
    });
  }

  // 4. PROJETOS DE ALUNOS
  const studentProjects = [
    { title: "Dashboard Financeiro SaaS", tag: "SaaS Full-Stack", desc: "Métricas em tempo real, integração de pagamentos com Stripe, gerador automático de faturas PDF.", techs: ["Next.js", "TypeScript", "Prisma", "Stripe"] },
    { title: "Clone do Netflix Streaming", tag: "Domínio Frontend", desc: "Player de vídeo de alta performance com sincronização de legendas e recomendações dinâmicas.", techs: ["React", "Redux Toolkit", "TMDB API", "Tailwind"] },
    { title: "Chatbot de IA Autônomo", tag: "Engenharia de IA", desc: "Bot empresarial de busca documental RAG alimentado por OpenAI GPT-4o & Pinecone Vector DB.", techs: ["Python", "LangChain", "FastAPI", "OpenAI"] },
    { title: "Player de Áudio Spotify", tag: "Aplicação Web Áudio", desc: "Interface de reprodução de áudio fluida com equalizador customizado e compartilhamento de playlists.", techs: ["TypeScript", "Next.js", "Web Audio API"] },
    { title: "SaaS Comunidade Discord", tag: "Sistemas em Tempo Real", desc: "Canais de voz e vídeo em tempo real, salas de chat markdown usando WebSockets.", techs: ["Node.js", "Socket.io", "PostgreSQL", "Docker"] },
    { title: "Marketplace E-Commerce", tag: "Aplicação Empresarial", desc: "Loja multivendedor com rastreamento de estoque em tempo real, filtros de busca e painel administrativo.", techs: ["NestJS", "React", "GraphQL", "MongoDB"] }
  ];

  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    studentProjects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card glass-panel';
      card.innerHTML = `
        <div>
          <div class="project-tag">${proj.tag}</div>
          <h3>${proj.title}</h3>
          <p>${proj.desc}</p>
          <div class="project-techs">
            ${proj.techs.map(tc => `<span class="tech-tag">${tc}</span>`).join('')}
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="alert('Iniciando demonstração ao vivo de ${proj.title}...')">
          Ver Demonstração Ao Vivo <i data-lucide="external-link"></i>
        </button>
      `;
      projectsGrid.appendChild(card);
    });
  }

  // 5. ACCORDION DO FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      item.classList.toggle('active');
    });
  });

  // Re-inicializa ícones Lucide
  if (window.lucide) window.lucide.createIcons();
});
