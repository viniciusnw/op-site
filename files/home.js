$(document).ready(function (){
    
    escreve();
    
    /* CENTRAL DE TECNOLOGIA */
    
    //tooltip
    $('[data-toggle="tooltip"]').tooltip();
    
    $("section.sobre article .tecnologias .tecnoItens ul li").click(function(){
        
        //mostra na box
        $("section.sobre .descTecnologias .item").each(function (){        
            $(this).removeClass("active");
        });        

        $("section.sobre #exampleCodes div").each(function (){        
            $(this).removeClass("active");
        });

        $("." + $(this).data("item")).addClass("active");        

        //troca a classe
        $("section.sobre article .tecnologias .tecnoItens ul li").each(function(){            
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
    /* / CENTRAL DE TECNOLOGIA */
    
    /* CASES */
    $("#casesCarousel").owlCarousel({        
        navigation : true, // Show next and prev buttons
        navigationText: ["<img width='60' src='/assets/site/img/arrow-left.png'>","<img width='60' src='/assets/site/img/arrow-right.png'>"],
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        pagination: false
    });    
    /* / CASES */
    
    /* FRASES */
    $("#frasesCarousel").owlCarousel({
        
        autoPlay: 8000,
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true
    });
    /* / FRASES */
});