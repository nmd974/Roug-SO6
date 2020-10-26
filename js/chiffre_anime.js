var compteur = 1;

$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
    $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
        
        var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
                    SectionOneOffset = $('#chiffres').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
        if (Scroll >= SectionOneOffset && compteur > 0) { 
            compteur = 0;    

            var n_trajets = 80000;
            var cpt_trajets = 0;
            var trajets =  document.getElementById("trajets");
            var delta_trajets = Math.ceil((duree * 1000) / n_trajets);

            var n_vh = 230;
            var cpt_vh = 0;
            var vh =  document.getElementById("vehicules");
            var delta_vh = Math.ceil((duree * 1000) / n_vh);


            var n_employee = 33;
            var cpt_employee = 0;
            var employee =  document.getElementById("employee");
            var delta_employee = Math.ceil((duree * 1000) / n_employee);

            var n_retrait = 6;
            var cpt_retrait = 0;
            var retrait =  document.getElementById("retrait");
            var delta_retrait = Math.ceil((duree * 1000) / n_retrait);

            var duree = 5;

            function countdown() {
                trajets.innerHTML = `+ ${cpt_trajets += 1000}`;
                  if( cpt_trajets < n_trajets ) {
                     setTimeout(countdown, delta_trajets);
                  }
                vh.innerHTML = `${++cpt_vh + 150}`;
                  if( vh < n_vh ) {
                     setTimeout(countdownVH, delta_vh);
                  }
                employee.innerHTML = `${++cpt_employee - 47}`;
                  if( employee < n_employee ) {
                     setTimeout(countdownEmployee, delta_employee);
                  }
                retrait.innerHTML = `${++cpt_retrait - 74}`;
                  if( retrait < n_retrait ) {
                     setTimeout(countdownRetrait, delta_retrait);
                  }
            }

            function countdownVH() {
                vh.innerHTML = `${++cpt_vh}`;
                  if( vh < n_vh ) {
                     setTimeout(countdownVH, delta_vh);
                  }
            }
            function countdownEmployee() {
                employee.innerHTML = `${++cpt_employee}`;
                  if( employee < n_employee ) {
                     setTimeout(countdownVH, delta_employee);
                  }
            }
            function countdownRetrait() {
                retrait.innerHTML = `${++cpt_retrait}`;
                  if( retrait < n_retrait ) {
                     setTimeout(countdownRetrait, delta_retrait);
                  }
            }
            setTimeout(countdown, delta_trajets);
            if(cpt_trajets === n_trajets){
                vh.innerHTML = `${n_vh}`;
                employee.innerHTML = `${n_employee}`;
                vh.innerHTML = `${n_retrait}`;
            }
        } 
    });
    $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
        var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
                    SectionProduits = $('#produits').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.

        if (Scroll >= SectionProduits) { 

        } 
    });
});