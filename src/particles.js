/* DevCod 3D Holographic Programming Hub Engine (Clean 3D Hover Interaction - No Darkening Light Spotlights) */
function init3DHolographicEngine() {
  const canvas = document.getElementById('particleCanvas');
  const heroSection = document.getElementById('hero');
  if (!canvas || !heroSection) return;

  const ctx = canvas.getContext('2d');
  let width, height, centerX, centerY;

  // Mouse & Hover state tracking for 3D elements ONLY
  let mouseX = -1000;
  let mouseY = -1000;
  let isHovered = false;
  let hoverLerp = 0; // Smooth 0 to 1 lerp state

  function resize() {
    width = canvas.width = heroSection.offsetWidth;
    height = canvas.height = heroSection.offsetHeight;
    
    // Position 3D holographic stage in upper-center region (height * 0.35)
    centerX = width / 2;
    centerY = height * 0.35;

    init3DScene();
  }

  window.addEventListener('resize', resize);

  // Mouse event listeners (Interacts ONLY with 3D Canvas Elements)
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    isHovered = true;
  });

  heroSection.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  heroSection.addEventListener('mouseleave', () => {
    isHovered = false;
    mouseX = -1000;
    mouseY = -1000;
  });

  // PROGRAMMING TOKENS & 3D SCENE DATA
  const codeBadges = [
    '</>', '{ ... }', 'const dev = true', '=>', 'async/await', '010101', '<DevCod />',
    'React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'Python', 'AI Agents', 'SQL',
    'Docker', 'AWS Cloud', 'Git Push', 'npm run dev', 'API REST', 'GraphQL', 'NestJS'
  ];

  const FOCAL_LENGTH = 480;
  let codeNodes = [];
  let orbitalRings = [];
  let matrixRain = [];

  function init3DScene() {
    codeNodes = [];
    orbitalRings = [];
    matrixRain = [];

    const radius = Math.min(width, height) * (width > 992 ? 0.38 : 0.35);
    const count = 48;

    // 1. PROMINENT 3D HOLOGRAPHIC SPHERE OF CODE NODES
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = Math.cos(theta) * Math.sin(phi) * radius;
      const y = Math.sin(theta) * Math.sin(phi) * radius;
      const z = Math.cos(phi) * radius;

      codeNodes.push({
        baseX: x,
        baseY: y,
        baseZ: z,
        x: x, y: y, z: z,
        projX: 0, projY: 0, scale: 0,
        text: codeBadges[i % codeBadges.length],
        isBadge: i % 3 === 0, // 1 in 3 is a prominent code tag
        color: i % 3 === 0 ? '#00f0ff' : (i % 3 === 1 ? '#9d4edd' : '#00e5ff'),
        pulseOffset: i * 0.2
      });
    }

    // 2. CONTINUOUS 3D ORBITAL CODE RINGS (3 Quantum Rings)
    const ringRadius = radius * 1.18;
    for (let r = 0; r < 3; r++) {
      const ringPoints = [];
      const pointCount = 36;
      for (let p = 0; p < pointCount; p++) {
        const ang = (p / pointCount) * Math.PI * 2;
        ringPoints.push({
          x: Math.cos(ang) * ringRadius,
          y: Math.sin(ang) * ringRadius,
          z: 0
        });
      }

      orbitalRings.push({
        points: ringPoints,
        tiltX: (r - 1) * 0.75,
        tiltY: (r * 0.9) + 0.4,
        rotSpeed: 0.008 + r * 0.004,
        angle: r * 1.2,
        color: r === 0 ? '#00f0ff' : (r === 1 ? '#9d4edd' : '#00e5ff')
      });
    }

    // 3. MATRIX BINARY RAIN STREAMS
    for (let s = 0; s < 30; s++) {
      matrixRain.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: (Math.random() - 0.5) * 500,
        speed: Math.random() * 1.8 + 0.8,
        char: Math.random() > 0.5 ? '1' : '0',
        color: Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.35)' : 'rgba(157, 78, 225, 0.35)'
      });
    }
  }

  resize();

  // CONTINUOUS ANIMATION LOOP (Smooth 3D Hover Interaction)
  let rotY = 0;
  let rotX = 0;
  let time = 0;

  function render() {
    time += 0.018;
    ctx.clearRect(0, 0, width, height);

    // Smooth hover transition lerp (0 to 1)
    const targetHover = isHovered ? 1 : 0;
    hoverLerp += (targetHover - hoverLerp) * 0.08;

    // Rotation smoothly speeds up on hover
    const currentRotSpeed = 0.008 + hoverLerp * 0.012;
    rotY += currentRotSpeed;
    rotX += currentRotSpeed * 0.5;

    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    // 1. RENDER CONTINUOUS 3D ORBITAL RINGS
    orbitalRings.forEach(ring => {
      ring.angle += ring.rotSpeed * (1 + hoverLerp * 0.5);
      const cosR = Math.cos(ring.angle), sinR = Math.sin(ring.angle);
      const cosTX = Math.cos(ring.tiltX), sinTX = Math.sin(ring.tiltX);
      const cosTY = Math.cos(ring.tiltY), sinTY = Math.sin(ring.tiltY);

      const projRingPoints = ring.points.map(p => {
        let rx = p.x * cosR - p.y * sinR;
        let ry = p.y * cosR + p.x * sinR;
        let rz = p.z;

        let x1 = rx * cosTY - rz * sinTY;
        let z1 = rz * cosTY + rx * sinTY;
        let y1 = ry * cosTX - z1 * sinTX;
        let z2 = z1 * cosTX + ry * sinTX;

        let gx = x1 * cosY - z2 * sinY;
        let gz = z2 * cosY + x1 * sinY;
        let gy = y1 * cosX - gz * sinX;
        gz = gz * cosX + y1 * sinX;

        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + gz + 350);
        return {
          x: gx * scale + centerX,
          y: gy * scale + centerY,
          scale: scale,
          z: gz
        };
      });

      ctx.beginPath();
      ctx.moveTo(projRingPoints[0].x, projRingPoints[0].y);
      for (let k = 1; k < projRingPoints.length; k++) {
        ctx.lineTo(projRingPoints[k].x, projRingPoints[k].y);
      }
      ctx.closePath();
      ctx.strokeStyle = ring.color;
      ctx.lineWidth = 1.2 + hoverLerp * 0.8;
      ctx.globalAlpha = 0.5 + hoverLerp * 0.3;
      ctx.stroke();
      ctx.globalAlpha = 1.0;
    });

    // 2. PROJECT AND UPDATE CONTINUOUS 3D CODE NODES
    codeNodes.forEach(node => {
      let x1 = node.baseX * cosY - node.baseZ * sinY;
      let z1 = node.baseZ * cosY + node.baseX * sinY;
      let y1 = node.baseY * cosX - z1 * sinX;
      let z2 = z1 * cosX + node.baseY * sinX;

      // Floating wave offset
      y1 += Math.sin(time * 2 + node.pulseOffset) * 12;

      node.x = x1;
      node.y = y1;
      node.z = z2;

      const scale = FOCAL_LENGTH / (FOCAL_LENGTH + z2 + 350);
      node.scale = scale;
      node.projX = x1 * scale + centerX;
      node.projY = y1 * scale + centerY;
    });

    // 3. DRAW CONTINUOUS 3D CODE NETWORK LINES
    const maxConnect = 130 + hoverLerp * 20;
    for (let i = 0; i < codeNodes.length; i++) {
      for (let j = i + 1; j < codeNodes.length; j++) {
        const n1 = codeNodes[i];
        const n2 = codeNodes[j];

        const dx = n1.projX - n2.projX;
        const dy = n1.projY - n2.projY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxConnect) {
          const alpha = (1 - dist / maxConnect) * 0.28 * Math.min(n1.scale, n2.scale);
          ctx.beginPath();
          ctx.moveTo(n1.projX, n1.projY);
          ctx.lineTo(n2.projX, n2.projY);

          // Highlight lines near mouse cursor on hover
          const distMouse = Math.min(
            Math.hypot(n1.projX - mouseX, n1.projY - mouseY),
            Math.hypot(n2.projX - mouseX, n2.projY - mouseY)
          );

          if (hoverLerp > 0.05 && distMouse < 160) {
            ctx.strokeStyle = `rgba(0, 240, 255, ${Math.min(0.9, alpha + 0.45)})`;
            ctx.lineWidth = 1.2;
          } else {
            ctx.strokeStyle = `rgba(157, 78, 225, ${alpha})`;
            ctx.lineWidth = 0.6;
          }
          ctx.stroke();
        }
      }
    }

    // 4. DRAW 3D CODE TOKENS AND PROMINENT CODE BADGES
    ctx.font = '600 13px "Fira Code", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    codeNodes.forEach(node => {
      if (node.scale <= 0) return;
      const alpha = Math.min(1, Math.max(0.3, (node.z + 300) / 600));
      const distMouse = Math.hypot(node.projX - mouseX, node.projY - mouseY);

      ctx.save();
      ctx.translate(node.projX, node.projY);

      // On Hover near mouse: Highlight Code Token
      const isHoverHighlight = hoverLerp > 0.05 && distMouse < 140;
      const fontScale = node.scale * (node.isBadge ? 1.15 : 0.95) * (1 + (isHoverHighlight ? 0.3 : 0));
      ctx.scale(fontScale, fontScale);

      if (node.isBadge || isHoverHighlight) {
        const textW = ctx.measureText(node.text).width + 16;
        ctx.fillStyle = isHoverHighlight ? 'rgba(0, 240, 255, 0.28)' : 'rgba(15, 20, 32, 0.85)';
        ctx.strokeStyle = isHoverHighlight ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)';
        ctx.lineWidth = isHoverHighlight ? 1.5 : 1;
        ctx.beginPath();
        ctx.roundRect(-textW / 2, -11, textW, 22, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 1.0;
      } else {
        ctx.fillStyle = node.color;
        ctx.globalAlpha = alpha;
      }

      ctx.fillText(node.text, 0, 0);
      ctx.restore();
    });

    // 5. RENDER CONTINUOUS MATRIX BINARY STREAMING
    ctx.font = '12px "Fira Code", monospace';
    matrixRain.forEach(m => {
      m.y += m.speed * (1 + hoverLerp * 0.4);
      if (m.y > height * 0.8) m.y = -height * 0.8;

      let gx = m.x * cosY - m.z * sinY;
      let gz = m.z * cosY + m.x * sinY;
      let gy = m.y * cosX - gz * sinX;
      gz = gz * cosX + m.y * sinX;

      const scale = FOCAL_LENGTH / (FOCAL_LENGTH + gz + 350);
      const px = gx * scale + centerX;
      const py = gy * scale + centerY;

      ctx.fillStyle = m.color;
      ctx.globalAlpha = 0.35 * scale;
      ctx.fillText(m.char, px, py);
    });

    ctx.globalAlpha = 1.0;
    requestAnimationFrame(render);
  }

  render();
}

window.addEventListener('DOMContentLoaded', init3DHolographicEngine);
