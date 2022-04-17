window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
});



document.body.setAttribute("ondragstart", "return false");
document.body.setAttribute("ondrag", "return false");
document.body.setAttribute("oncontextmenu", "return false");
document.body.setAttribute("onselectstart", "return false");
document.body.setAttribute("onselect", "return false");
document.body.setAttribute("oncopy", "return false");




if(window.location.protocol == "http"){
    document.location = document.URL.replace(/^http:/i, "https:"); 
}



if(window.innerWidth < 1200){

    document.querySelector(':root').style.setProperty('--zmp', (-(1200 - window.innerWidth / 1)).toString() + "px" );

    document.querySelector(':root').style.setProperty('--zmp2', (-(1200 - window.innerWidth / 0.7)).toString() + "px" );

    document.querySelector(':root').style.setProperty('--zmp3', (-(1200 - window.innerWidth / 0.6)).toString() + "px" );

    document.querySelector(':root').style.setProperty('--zmp4', (-(1200 - window.innerWidth / 0.5)).toString() + "px" );

    document.querySelector(':root').style.setProperty('--zmp5', (-(1200 - window.innerWidth)).toString() + "px" );

    document.querySelector(':root').style.setProperty('--zmp6', (-(1200 - window.innerWidth / 0.55)).toString() + "px" );

}






if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && window.innerWidth > 1200){
    document.getElementById("nav").style.visibility = "visible";


    document.getElementById("nav1").addEventListener('click',
    function(event) {
        window.scroll({
            top: parseFloat(getComputedStyle(document.getElementById("p2")).top) + parseFloat(getComputedStyle(document.getElementById("p2")).margin) / 2, 
            left: 0, 
            behavior: 'smooth'
        });

    }, { once: true });



    document.getElementById("nav2").addEventListener('click',
    function(event) {
        window.scroll({
            top: parseFloat(getComputedStyle(document.getElementById("p3")).top) + parseFloat(getComputedStyle(document.getElementById("p3")).margin) / 2,
            left: 0, 
            behavior: 'smooth'
        });

    }, { once: true });



    window.addEventListener("scroll", function scroll(){
        if(window.pageYOffset > window.innerWidth / 10){
            window.removeEventListener('scroll', scroll);

            document.getElementById("nav").remove();
        }
    },);

}
else{
    document.getElementById("nav").remove();
}








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


};



