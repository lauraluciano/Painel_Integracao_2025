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

// 2. Função que atualiza o conteúdo na tela
function atualizarInfo(id) {
  const parte = dados[id]; // pega o objeto correspondente (ex: frontal, temporal...)

  if (parte) {
    // Atualiza título e texto no HTML
    document.getElementById("titulo").innerText = parte.titulo;
    document.getElementById("texto").innerText = parte.texto;
  } else {
    console.warn(`Nenhum dado encontrado para id=${id}`);
  }
}

// 3. Inicialização: adiciona os "cliques" nas áreas
function inicializarMapa() {
  console.log("Script carregado");

  // Seleciona todas as áreas clicáveis do SVG
  const areas = document.querySelectorAll(".area");
  console.log("Áreas encontradas:", areas.length);

  // Para cada área, adiciona um "ouvinte de clique"
  areas.forEach(el => {
    el.addEventListener("click", () => {
      console.log(`Clique em ${el.id}`);
      atualizarInfo(el.id); // chama a função que mostra os textos
    });
  });
}

// 4. Executa a inicialização quando a página estiver pronta
document.addEventListener("DOMContentLoaded", inicializarMapa);
