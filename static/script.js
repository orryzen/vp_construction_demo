
  // ── Loader ──
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
      setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
      }, 700);
    }, 3000);
  });

  // ── Scroll Reveal ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // ── Product Tabs ──
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      document.querySelectorAll('.product-content').forEach(c => c.classList.remove('active'));
      document.getElementById('tab-' + tab).classList.add('active');
    });
  });

  // ── Form Submit ──
  function submitForm() {
    const btn = event.target;
    btn.textContent = '✓ Enquiry Sent!';
    btn.style.background = 'linear-gradient(135deg, #2d8a4e, #1a6e38)';
    setTimeout(() => {
      btn.textContent = 'Send Enquiry →';
      btn.style.background = '';
    }, 3000);
  }

  // ── Nav active states on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) current = section.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current
        ? 'var(--gold)'
        : 'rgba(255,255,255,0.75)';
    });
  });

  // ── Mobile menu (simple) ──
  let menuOpen = false;
  function toggleMobileMenu() {
    const links = document.querySelector('.nav-links');
    menuOpen = !menuOpen;
    if (menuOpen) {
      links.style.cssText = `
        display: flex; flex-direction: column; position: absolute;
        top: 72px; left: 0; right: 0; background: rgba(10,13,50,0.97);
        padding: 20px 5%; gap: 0; border-top: 1px solid rgba(124,92,196,0.2);
      `;
      links.querySelectorAll('li').forEach(li => { li.style.padding = '12px 0'; li.style.borderBottom = '1px solid rgba(255,255,255,0.05)'; });
    } else {
      links.style.cssText = 'display: none;';
    }
  }
