$("html, body").animate({ scrollTop: 0, scrollLeft: 0 }, "slow");


if (document.location.protocol != "https:") {
    document.location = document.URL.replace(/^http:/i, "https:"); 
};


window.onload = (event) => {



    var slideIndex = 0;

    showSlides();



    function showSlides() {

        var i;

        var slides = document.getElementsByClassName("mySlides");

        for (i = 0; i < slides.length; i++) {

            slides[i].style.display = "none";

        }

        slideIndex++;

        if (slideIndex > slides.length) {slideIndex = 1}

        slides[slideIndex-1].style.display = "block";

        setTimeout(showSlides, 5000);

    }







    document.getElementById("nav1").addEventListener('click',

    function(event) {

        window.scroll({

            top: window.innerHeight, 

            left: 0, 

            behavior: 'smooth'

          });

        document.getElementById("nav").remove();

    }, false);







    document.getElementById("nav2").addEventListener('click',

    function(event) {

        window.scroll({

            top: 2 * window.innerHeight, 

            left: 0, 

            behavior: 'smooth'

          });

        document.getElementById("nav").remove();

    }, false);





    

    if(window.innerWidth < 1200){

        document.querySelector(':root').style.setProperty('--zmp', (-(1200 - window.innerWidth / 1)).toString() + "px" );

        document.querySelector(':root').style.setProperty('--zmp2', (-(1200 - window.innerWidth / 0.7)).toString() + "px" );

        document.querySelector(':root').style.setProperty('--zmp3', (-(1200 - window.innerWidth / 0.6)).toString() + "px" );

        document.querySelector(':root').style.setProperty('--zmp4', (-(1200 - window.innerWidth / 0.5)).toString() + "px" );

        document.querySelector(':root').style.setProperty('--zmp5', (-(1200 - window.innerWidth)).toString() + "px" );

        document.querySelector(':root').style.setProperty('--zmp6', (-(1200 - window.innerWidth / 0.55)).toString() + "px" );

    }

    





    if((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || window.innerWidth < 1200){

        document.getElementById("nav").remove();

    }

    else{

        var interval = setInterval(() => {

            if(window.pageYOffset > window.innerWidth / 10){

                document.getElementById("nav").remove();

                clearInterval(interval);

            }    

        }, 300);

    }





    setInterval(() => {

        document.title = "Kacper Drobik- Webmaster";

        setTimeout(() => {

            document.title = "Programista i chodziarz";

        }, 2500);

        setTimeout(() => {

            document.title = "Kacper Drobik- Projekty i osiągnięcia";

        }, 5000);

    }, 12000);

};



