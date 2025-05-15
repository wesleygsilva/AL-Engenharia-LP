// Realce do ícone ativo no menu ao rolar a página
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// === Accordion FAQ com efeito suave ===

const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isOpen = item.classList.contains('open');

    // Fecha todos os outros
    document.querySelectorAll('.faq-item.open').forEach((el) => {
      el.classList.remove('open');
    });

    // Abre o clicado se ainda não estiver aberto
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});
