// Define o intervalo de tempo para troca dos slides (1000ms = 1 segundo)
setInterval(function() {
    // Seleciona o próximo slide
    if (document.getElementById('item-1').checked) {
      document.getElementById('item-2').checked = true;
    } else if (document.getElementById('item-2').checked) {
      document.getElementById('item-3').checked = true;
    } else if (document.getElementById('item-3').checked) {
      document.getElementById('item-1').checked = true;
    }
  }, 2500);