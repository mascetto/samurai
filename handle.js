
  // Intersection observer for timeline items
  const items = document.querySelectorAll('.timeline-item');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(i => obs.observe(i));

  // Smooth active nav
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const scrollObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.style.color = '');
        const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (link) link.style.color = 'var(--ink)';
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('#real, #novel, #manga, #compare').forEach(s => scrollObs.observe(s));
