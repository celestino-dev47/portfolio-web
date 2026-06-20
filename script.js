
//js

const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
    link.addEventListener("click", (e) => {
    e.preventDefault();

    // remover destaque dos links
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // esconder seções
    sections.forEach(section => {
      section.classList.remove("active-section");
    });

    // mostrar seção clicada
    const target = link.getAttribute("data-section");
    document.getElementById(target).classList.add("active-section");
     });
  });
