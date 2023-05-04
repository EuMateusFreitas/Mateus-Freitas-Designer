// Cria uma nova instância do fullPage.js e define as opções personalizadas
new fullpage('#fullpage', {
    menu: false, // Define se o menu de navegação será ativado ou desativado
    continuousVertical: true, // Define se a rolagem vertical contínua será ativada ou desativada
    navigation: true, // Define se a navegação por pontos será ativada ou desativada
    autoScrolling: true, // Define se a rolagem automática será ativada ou desativada
    scrollHorizontally: true, // Define se a rolagem horizontal será ativada ou desativada
    controlArrows: false, // Define se as setas de controle serão exibidas ou ocultadas
    showActiveTooltip: true, // Define se a dica ativa será exibida ou ocultada
    slidesNavigation: false, // Define se a navegação entre slides será ativada ou desativada
    navigationTooltips: ["Inicio", "Sobre mim", "Portfólio", "Depoimentos"], // Define as dicas de ferramentas para cada seção
    anchors: ["inicio", "sobre-mim", "portfolio", "depoimentos"],

    afterLoad: function(origin, destination, direction) {
      var section = destination.item;
      var title = section.querySelector('h1, h2');
      if (title) {
        ScrollReveal().reveal(title);
      }
    }
  });
