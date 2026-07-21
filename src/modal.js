/* DevCod Modal Management System (pt-BR) */
document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const studentAreaBtn = document.getElementById('openStudentArea');
  const enrollBtn = document.getElementById('openEnrollModal');

  function openModal(htmlContent) {
    if (!backdrop || !modalBody) return;
    modalBody.innerHTML = htmlContent;
    backdrop.classList.add('open');
    if (window.lucide) window.lucide.createIcons();
  }

  function closeModal() {
    backdrop?.classList.remove('open');
  }

  modalClose?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  // Modal Área do Aluno
  studentAreaBtn?.addEventListener('click', () => {
    openModal(`
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
    `);
  });

  // Modal Quero Ser Aluno / Matrícula
  enrollBtn?.addEventListener('click', () => {
    openModal(`
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
    `);
  });

  // Função global para abrir modal de detalhes do curso
  window.openCourseModal = function(courseTitle, courseCategory, duration, level, description) {
    openModal(`
      <div>
        <div class="badge" style="margin-bottom: 0.8rem;"><i data-lucide="book-open"></i> ${courseCategory || 'Programa Especializado'}</div>
        <h2 class="section-title" style="font-size: 2rem; margin-bottom: 0.6rem;">${courseTitle}</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1rem;">${description || 'Formação prática completa projetada para transformar você em um especialista no desenvolvimento de aplicações empresariais.'}</p>

        <div style="display: flex; gap: 1.5rem; margin-bottom: 1.8rem; font-size: 0.9rem; color: var(--text-dim);">
          <span><i data-lucide="clock" style="vertical-align: middle;"></i> <strong>Duração:</strong> ${duration || '60 Horas'}</span>
          <span><i data-lucide="bar-chart" style="vertical-align: middle;"></i> <strong>Nível:</strong> ${level || 'Todos os Níveis'}</span>
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
    `);
  };
});
