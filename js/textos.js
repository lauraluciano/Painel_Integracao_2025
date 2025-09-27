// textos.js

// 1. Dicionário com os textos de cada parte do cérebro
const dados = {
  frontal: {
    titulo: "Lobo Frontal",
    texto: "O lobo frontal está relacionado ao raciocínio, planejamento e movimento voluntário."
  },
  parietal: {
    titulo: "Lobo Parietal",
    texto: "O lobo parietal processa informações sensoriais como tato, temperatura e dor."
  },
  temporal: {
    titulo: "Lobo Temporal",
    texto: "O lobo temporal está ligado à audição, memória e compreensão da linguagem."
  },
  occipital: {
    titulo: "Lobo Occipital",
    texto: "O lobo occipital é responsável pelo processamento das informações visuais."
  }
};

// 2. Atualiza o conteúdo da tela com base na parte clicada
function atualizarInfo(id) {
  const parte = dados[id];

  if (parte) {
    document.getElementById("titulo").innerText = parte.titulo;
    document.getElementById("texto").innerText = parte.texto;
  } else {
    console.warn(`Nenhum dado encontrado para id=${id}`);
  }
}

// 3. Inicializa os cliques nas áreas do SVG
function inicializarMapa() {
  console.log("Script carregado");

  const areas = document.querySelectorAll(".area");
  console.log("Áreas encontradas:", areas.length);

  areas.forEach(el => {
    el.addEventListener("click", () => {
      console.log(`Clique em ${el.id}`);
      atualizarInfo(el.id);
    });
  });
}

// 4. Tudo acontece quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  inicializarMapa(); // Inicializa os cliques no SVG

  const partsToToggle = [
    { buttonId: "toggleLoboFrontal", elementId: "frontal", className: "toggledFrontal" },
    { buttonId: "toggleLoboParietal", elementId: "parietal", className: "toggledParietal" },
    { buttonId: "toggleLoboTemporal", elementId: "temporal", className: "toggledTemporal" },
    { buttonId: "toggleLoboOccipital", elementId: "occipital", className: "toggledOccipital" }
  ];

  partsToToggle.forEach(part => {
    const button = document.getElementById(part.buttonId);
    const svgPart = document.getElementById(part.elementId);

    if (button && svgPart) {
      button.addEventListener("click", function () {
        const isActive = svgPart.classList.toggle(part.className);

        if (isActive) {
          atualizarInfo(part.elementId); // Mostrar texto
        } else {
          // Limpar conteúdo
          document.getElementById("titulo").innerText = "";
          document.getElementById("texto").innerText = "";
        }
      });
    } else {
      console.warn(`Elemento não encontrado: botão=${part.buttonId}, svg=${part.elementId}`);
    }
  });
});