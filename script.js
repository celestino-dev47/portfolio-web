
//js

const links = document.querySelectorAll("a[data-section]");
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
  
  
  const cargos = [
  "Web Developer",
  "Dev Frontend",
  "Dev Backend",
  "Dev Javascript",
  "Creative Designer"
];

const cargo = document.getElementById("cargo");
let i = 0;

setInterval(() => {
  i = (i + 1) % cargos.length;
  cargo.style.opacity = 0;

  setTimeout(() => {
    cargo.textContent = cargos[i];
    cargo.style.opacity = 1;
  }, 400);

}, 2000);