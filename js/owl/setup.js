$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//Estudos Victor Figueiredo.
//Loop para fazer looping infinito ou limitado.
//Margin é o espaço entre as capas.
//Nav é o botão de navegação.
//Responsive é a referencia do que será exibido
//na tela de acordo com a resolução.
//Ex: 600:{ items:3 } (600px de tela, mostrará 3 itens)
//Ex: 1000:{ items:5 } (1000px de tela, mostrará 5 itens)