document.addEventListener('DOMContentLoaded', () => {
  // 1️⃣ Fade-in inicial
  document.body.classList.add('show');

  // 2️⃣ Pestaña activa
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (
      location.pathname.endsWith(link.getAttribute('href')) ||
      (location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html')
    ) {
      link.classList.add('active');
    }

    // 3️⃣ Fade-out al hacer clic
    link.addEventListener('click', e => {
      e.preventDefault(); // evita cambio inmediato
      const url = link.getAttribute('href');
      document.body.classList.remove('show'); // inicia fade-out
      setTimeout(() => {
        window.location.href = url; // luego redirige
      }, 250); // coincide con la transición CSS
    });
  });

  // 4️⃣ Toggle zoom para tarjetas
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Quitar zoom de otras tarjetas
      cards.forEach(c => {
        if (c !== card) c.classList.remove('zoomed');
      });
      // Alternar zoom en la tarjeta clickeada
      card.classList.toggle('zoomed');
    });
  });
});
