/* DevCod Tech Career & Salary Market Interactive Chart (pt-BR) */
document.addEventListener('DOMContentLoaded', () => {
  const levelBtns = document.querySelectorAll('.level-btn');
  const roleTitle = document.getElementById('selectedRoleTitle');
  const salaryValue = document.getElementById('selectedSalaryValue');
  const roleDesc = document.getElementById('roleDescription');
  const chartVisual = document.getElementById('salaryBarChart');

  const salaryData = {
    intern: {
      title: 'Estagiário de Engenharia de Software',
      salary: 'R$ 2.500 - R$ 4.000 / mês',
      desc: 'Auxílio no desenvolvimento de funcionalidades, escrita de testes básicos, aprendizado de workflows Git e código limpo.',
      chart: [25, 35, 45, 55, 65, 75, 85, 95]
    },
    junior: {
      title: 'Desenvolvedor Junior',
      salary: 'R$ 5.500 - R$ 8.200 / mês',
      desc: 'Desenvolvimento de componentes frontend, endpoints REST, correção de bugs e envio de código via pipelines de CI/CD.',
      chart: [30, 45, 60, 70, 80, 90, 95, 100]
    },
    mid: {
      title: 'Desenvolvedor Pleno (Mid-Level)',
      salary: 'R$ 9.500 - R$ 14.000 / mês',
      desc: 'Responsável por microserviços full-stack, otimizações de banco de dados, code reviews e estado frontend de alta performance.',
      chart: [40, 55, 75, 88, 92, 98, 100, 100]
    },
    senior: {
      title: 'Engenheiro de Software Sênior',
      salary: 'R$ 16.000 - R$ 24.000 / mês',
      desc: 'Arquitetura de sistemas distribuídos tolerantes a falhas, mentoria de desenvolvedores juniores e decisões tecnológicas.',
      chart: [50, 70, 85, 95, 100, 100, 100, 100]
    },
    specialist: {
      title: 'Especialista em IA & Nuvem',
      salary: 'R$ 22.000 - R$ 32.000 / mês',
      desc: 'Construção de pipelines de ajuste fino de LLMs corporativos, infraestrutura em nuvem de alta vazão e segurança.',
      chart: [60, 80, 95, 100, 100, 100, 100, 100]
    },
    techlead: {
      title: 'Tech Lead / Líder Técnico',
      salary: 'R$ 25.000 - R$ 36.000 / mês',
      desc: 'Liderança de squads de engenharia, alinhamento técnico com produto e atração de talentos.',
      chart: [65, 85, 98, 100, 100, 100, 100, 100]
    },
    architect: {
      title: 'Arquiteto Principal de Software',
      salary: 'R$ 30.000 - R$ 45.000 / mês',
      desc: 'Design de arquiteturas globais multi-região em nuvem, plataformas orientadas a eventos e modelos de dados enterprise.',
      chart: [75, 90, 100, 100, 100, 100, 100, 100]
    },
    manager: {
      title: 'Gerente de Engenharia',
      salary: 'R$ 32.000 - R$ 50.000 / mês',
      desc: 'Liderança estratégica de múltiplas squads de engenharia, alocação de orçamento, cultura e alta execução.',
      chart: [80, 95, 100, 100, 100, 100, 100, 100]
    }
  };

  const chartLabels = ['Estágio', 'Junior', 'Pleno', 'Sênior', 'Especialista', 'Tech Lead', 'Arquitetura', 'Gerência'];

  function renderChart(levelKey) {
    const data = salaryData[levelKey] || salaryData.junior;
    if (roleTitle) roleTitle.textContent = data.title;
    if (salaryValue) salaryValue.textContent = data.salary;
    if (roleDesc) roleDesc.textContent = data.desc;

    if (chartVisual) {
      chartVisual.innerHTML = '';
      data.chart.forEach((val, idx) => {
        const col = document.createElement('div');
        col.className = 'chart-bar-col';
        
        const fill = document.createElement('div');
        fill.className = 'bar-fill';
        fill.style.height = '0%';
        
        setTimeout(() => {
          fill.style.height = `${val}%`;
          if (chartLabels[idx] === levelBtns[0]?.dataset.level) {
            fill.style.background = 'linear-gradient(to top, #00e5ff, #00f0ff)';
          }
        }, 50 * idx);

        const lbl = document.createElement('div');
        lbl.className = 'bar-label';
        lbl.textContent = chartLabels[idx];

        col.appendChild(fill);
        col.appendChild(lbl);
        chartVisual.appendChild(col);
      });
    }
  }

  levelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      levelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderChart(btn.dataset.level);
    });
  });

  // Renderização inicial
  renderChart('junior');
});
