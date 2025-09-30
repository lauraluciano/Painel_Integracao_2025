// textos.js

// 1. Dicionário com os textos de cada parte do cérebro
const dados = {
  frontal: {
    titulo: "Lobo Frontal",
    texto: ["Responsável por:", "Iniciar acões voluntárias;", "Controlar habilidades motoras;", "Processos intelectuais (falar, pensar, etc).;", "Expressões faciais e gestos braçais;", "Expressão dos sentimentos;" ]
  },
  parietal: {
    titulo: "Lobo Parietal",
    texto: ["Responsável por:", "Controlar a posição do corpo;", "Converter impressões como peso textura e forma em percepção geral;", "Ajudar na orientação um espaço, seja do corpo inteiro ou de partes esppecíficas." ]
  },
  temporal: {
    titulo: "Lobo Temporal",
    texto: ["Responsável por:", "Processar a visão;", "Preservar memórias;", "Ajuda o lobo pariental na percepção de espaço com a visão;" ]
  },
  occipital: {
    titulo: "Lobo Occipital",
    texto: ["Responsável por:", "Gerar lembranças e emoções;", "Guardar e acessar memórias;", "Compreender sons e Imagens e reconhece-los;", ]
  }
};

// 2. Atualiza o conteúdo da tela com base na parte clicada
function atualizarInfo(id) {
  const parte = dados[id];

  if (parte) {
    // Atualiza o título
    document.getElementById("titulo").innerText = parte.titulo;

    // Cria a lista
    const ul = document.createElement("ul");
    parte.texto.forEach(frase => {
      const li = document.createElement("li");
      li.innerText = frase;
      ul.appendChild(li);
    });

    // Adiciona a lista no elemento "texto"
    const textoEl = document.getElementById("texto");
    textoEl.innerHTML = ""; // Limpa o conteúdo anterior
    textoEl.appendChild(ul); // Adiciona a nova lista
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