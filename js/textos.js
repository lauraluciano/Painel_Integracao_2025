/*Primeira parte Textos para ir nos quadrados*/



const dadosCerebro1 = {
  telencefalo: {
    titulo: "Telencéfalo",
    texto:
     ["Processamento de informações complexas", "Comportamento consciente", "Tomada de decisões"]
  },
  sistema: {
    titulo: "Sistema Límbico",
    texto:
    ["Processamento de emoções", "Memória e comportamento"]
  },
  cerebelo: {
    titulo: "Cerebelo",
    texto:
    ["Coordenação motora", "Equilíbrio", "Postura"]
  },
  tronco: {
    titulo: "Tronco Encefálico",
    texto: ["Funções vitais como respiração", "Batimentos cardíacos", "Sono"]
  }
}




const dadosCerebro2 = {
  frontal: {
    titulo: "Lobo Frontal",
    texto: [
      "Responsável por:",
      "Iniciar ações voluntárias;",
      "Controlar habilidades motoras;",
      "Processos intelectuais (falar, pensar etc.);",
      "Expressões faciais e gestos com os braços;",
      "Expressão dos sentimentos."
    ]
  },
  parietal: {
    titulo: "Lobo Parietal",
    texto: [
      "Responsável por:",
      "Controlar a posição do corpo;",
      "Converter impressões como peso, textura e forma em percepção geral;",
      "Ajudar na orientação no espaço, seja do corpo inteiro ou de partes específicas."
    ]
  },
  temporal: {
    titulo: "Lobo Temporal",
    texto: [
      "Responsável por:",
      "Processar a audição;",
      "Preservar memórias;",
      "Ajudar o lobo parietal na percepção espacial com base na visão;"
    ]
  },
  occipital: {
    titulo: "Lobo Occipital",
    texto: [
      "Responsável por:",
      "Processar a visão;",
      "Compreender e reconhecer sons e imagens;",
      "Armazenar e acessar memórias visuais;"
    ]
  }
};

/*segunda parte , Faz com que apareça o conteudo conforme parte*/



function atualizarInfoGenerico(id, dados, prefixoClasse) {
  const parte = dados[id];
  const svgPart = document.getElementById(id);


  if (!parte || !svgPart) {
    console.warn(`Nenhum dado encontrado para id=${id}`);
    return;
  }

  // Remove todas as classes de destaque antes de aplicar a nova



  Object.keys(dados).forEach(key => {

    const el = document.getElementById(key);

    if (el) {
      el.classList.remove(  "toggled" + prefixoClasse + key.charAt(0).toUpperCase() + key.slice(1));
    }
  });

  // Define a classe de destaque correspondente



  const className = "toggled" + prefixoClasse + id.charAt(0).toUpperCase() + id.slice(1); 


  // Alterna a classe (ativa ou desativa)



  const isActive = svgPart.classList.toggle(className); 

 const tituloEl=document.getElementById("titulo"+prefixoClasse);
 const textoEl = document.getElementById("texto"+prefixoClasse);


  if (isActive) {
    tituloEl.innerText = parte.titulo;

    const ul = document.createElement("ul");
    parte.texto.forEach(frase => {
      const li = document.createElement("li");
      li.innerText = frase;
      ul.appendChild(li);
    });


    textoEl.innerHTML = "";
    textoEl.appendChild(ul);
  } else {
    tituloEl.innerText = "";
    textoEl.innerHTML = "";
  }


  
}

// 3. Inicializa os cliques nas áreas do SVG



function inicializarMapa() {
  console.log("Script carregado");

  const areas1 = document.querySelectorAll(".area.cerebro1");
  areas1.forEach(el => {
    el.addEventListener("click", () => {
      atualizarInfoGenerico(el.id, dadosCerebro1, "C1");
    });
  });

  // Mapa 2 (Cérebro 2)
  const areas2 = document.querySelectorAll(".area.cerebro2");
  areas2.forEach(el => {
    el.addEventListener("click", () => {
      atualizarInfoGenerico(el.id, dadosCerebro2, "C2");
    });
  });
}


// 4. Tudo acontece quando o DOM estiver carregado



document.addEventListener("DOMContentLoaded", function () {
  inicializarMapa(); // Ativa os dois SVGs

  

  const buttonsMapa1 = [
    { buttonId: "toggleTelencefalo", elementId: "telencefalo", dados: dadosCerebro1, prefixo: "C1" },
    { buttonId: "toggleTronco", elementId: "tronco", dados: dadosCerebro1, prefixo: "C1" },
    { buttonId: "toggleCerebelo", elementId: "cerebelo", dados: dadosCerebro1, prefixo: "C1" },
    { buttonId: "toggleSistema", elementId: "sistema", dados: dadosCerebro1, prefixo: "C1" }
  ];
  const buttonsMapa2 = [
    { buttonId: "toggleLoboFrontal", elementId: "frontal", dados: dadosCerebro2, prefixo: "C2" },
    { buttonId: "toggleLoboParietal", elementId: "parietal", dados: dadosCerebro2, prefixo: "C2" },
    { buttonId: "toggleLoboTemporal", elementId: "temporal", dados: dadosCerebro2, prefixo: "C2" },
    { buttonId: "toggleLoboOccipital", elementId: "occipital", dados: dadosCerebro2, prefixo: "C2" }
  ];
  [...buttonsMapa1, ...buttonsMapa2].forEach(part => {
    const button = document.getElementById(part.buttonId);
    if (button) {
      button.addEventListener("click", function () {
        atualizarInfoGenerico(part.elementId, part.dados, part.prefixo);
      });
    } else {
      console.warn(`Botão não encontrado: ${part.buttonId}`);
    }
  });
});
