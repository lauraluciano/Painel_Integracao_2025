function mostrarCaminho(neurotransmissor) {
  var overlays = document.querySelectorAll('.overlay');
  
  // Ocultar todas as setas antes de mostrar a nova
  overlays.forEach(function(overlay) {
    overlay.style.display = 'none';
  });

  var targetOverlay = document.getElementById(neurotransmissor + '-overlay');
  if (targetOverlay) {
    targetOverlay.style.display = 'block';  // Exibe a seta do neurotransmissor
  } else {
    console.log('Imagem não encontrada:', neurotransmissor);
  }
}