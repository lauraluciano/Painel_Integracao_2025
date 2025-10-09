/*Primeira parte Textos para ir nos quadrados*/



const dadosCerebro1 = {
  telencefalo: {
    titulo: "Telencéfalo",
    texto:
      ["Composta por três principais estruturas, o telencéfalo é a maior e mais complexa parte do cérebro. A primeira parte é o córtex cerebral, feito de uma massa cinzenta, onde ficam a maior parte dos neurônios, responsável por funções como pensamento e percepção. Abaixo dele fica a substância branca, composta por axônios, que conectam áreas do cérebro e a medula espinhal. Também abaixo do córtex temos estruturas subcorticais, como tálamo, hipotálamo, hipocampo, amígdalas e gânglios da base."]
  },
  sistema: {
    titulo: "Sistema Límbico",
    texto:
      ["O sistema límbico é um conjunto de estruturas cerebrais que regulam emoções, comportamentos, dentre outros. As suas estruturas envolvem amígdala, que processa emoções, hipocampo, que ajuda na formação de novas memórias e memórias espaciais, hipotálamo, que regula hormônios, humor e sensações como sede e fome; tálamo, que encaminha informações sensoriais para o córtex (exceto o olfato)."]
  },
  cerebelo: {
    titulo: "Cerebelo",
    texto:
      ["O cerebelo, localizado abaixo do tronco encefálico, ajuda no equilíbrio corporal, coordenação motora, controle do tônus muscular, precisão e suavidade de movimentos."]
  },
  tronco: {
    titulo: "Tronco Encefálico",
    texto: ["O tronco encefálico, ou tronco cerebral, faz parte do sistema nervoso central, conectando o cérebro e a medula espinhal. Ele ajuda em funções essenciais para o corpo e é dividido em três partes: mesencéfalo, responsável por funções motoras e sensoriais; ponte, responsável por equilíbrio e sensibilidade da face; bulbo, que contém os centros respiratórios e cardiovasculares."]
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

  // Seleciona o título e o texto do painel
  const tituloEl = document.getElementById("titulo" + prefixoClasse);
  const textoEl = document.getElementById("texto" + prefixoClasse);

  // Define a classe de destaque
  const className = "toggled" + prefixoClasse + id.charAt(0).toUpperCase() + id.slice(1);

  // Verifica se o item já está ativo (antes de alterar)
  const estavaAtivo = svgPart.classList.contains(className);

  // Remove o destaque de todos antes de aplicar um novo
  Object.keys(dados).forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      el.classList.remove("toggled" + prefixoClasse + key.charAt(0).toUpperCase() + key.slice(1));
    }
  });

  // Se o mesmo item for clicado novamente, limpa o texto e sai
  if (estavaAtivo) {
    tituloEl.innerText = "";
    textoEl.innerHTML = "";
    
    document.getElementById("infoC1").classList.remove("visivel");
    document.getElementById("infoC2").classList.remove("visivel");
    return;
  }

  // Caso contrário, ativa o novo item
  svgPart.classList.add(className);

  // Atualiza o conteúdo de texto
  tituloEl.innerText = parte.titulo;
  const ul = document.createElement("ul");
  parte.texto.forEach(frase => {
    const li = document.createElement("li");
    li.innerText = frase;
    ul.appendChild(li);
  });

  textoEl.innerHTML = "";
  textoEl.appendChild(ul);

  document.getElementById("infoC1").classList.add("visivel");
  document.getElementById("infoC2").classList.add("visivel");
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
