

$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
   
    $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
        var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
                    SectionWhere = $('#wherebefore').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.

        if (Scroll >= SectionWhere) { 
            AOS.init();  
        } 
    });
});

$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
   
    $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
        var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
                    SectionProduits = $('#produits').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.

        if (Scroll >= SectionProduits) { 
            AOS.init();  
        } 
    });
});