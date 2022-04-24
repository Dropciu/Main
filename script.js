window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
});



document.body.setAttribute("ondragstart", "return false");
document.body.setAttribute("ondrag", "return false");




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
    document.querySelector(':root').style.setProperty('--zmp7', (-(1200 - window.innerWidth / 0.47)).toString() + "px" );
}







if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && window.innerWidth > 750){
    document.getElementById("nav").style.visibility = "visible";


    window.addEventListener("scroll", function scroll(){
        if(window.pageYOffset > window.innerWidth / 10){
            window.removeEventListener('scroll', scroll);

            document.getElementById("nav").remove();
        }
    },);



    var email_target = document.getElementById("contact");

    window.addEventListener("scroll", function email_scroll() {
        if (email_target.getBoundingClientRect().top < window.innerHeight - email_target.getBoundingClientRect().height / 4) {
            window.removeEventListener("scroll", email_scroll);

            document.getElementById("email").classList.add("email_active");
            document.getElementById("arrow").classList.add("arrow_active");
            document.getElementById("label_email").classList.add("label_email_active");

            setTimeout(() => {
                document.getElementById("email").classList.add("email_text_active");
            }, 700);

        }
    });

    var hover_title = document.createElement('div');
    document.getElementById("contact").appendChild(hover_title);
    hover_title.setAttribute("id", "hover_title_email");
    hover_title.innerHTML = "<p>Kliknij, aby zapisać email w schowku</p>";

    document.getElementById("email").addEventListener("mousemove", function(e){
        hover_title.style.visibility = "visible";
        let left = e.offsetX + window.innerWidth / 4;
        let top = e.offsetY + window.innerHeight / 2;
        hover_title.style.left = left + "px";
        hover_title.style.top = top + "px";

        document.getElementById("email").addEventListener("mouseleave", function(){
            hover_title.style.visibility = "hidden";
        }, { once: true })
    })

    document.getElementById("email").addEventListener("click", function(){
        var text = "kacper.drobik.kd@gmail.com";
        navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
        console.error('Async: Could not copy text: ', err);
        });

        var announcement = document.createElement("div");
        document.body.appendChild(announcement);
        announcement.setAttribute("id", "announcement_email");
        announcement.innerHTML = "<p>Zapisano email w schowku!</p>";

        setTimeout(() => {
            announcement.remove();
        }, 3000);
    })



}
else{
    document.getElementById("nav").remove();


    var email_target = document.getElementById("contact");
    window.addEventListener("scroll", function email_scroll() {
        if (email_target.getBoundingClientRect().top < window.innerHeight - email_target.getBoundingClientRect().height / 4) {
            window.removeEventListener("scroll", email_scroll);

            document.getElementById("email").classList.add("email_active");
            document.getElementById("arrow").classList.add("arrow_active");
            document.getElementById("label_email").classList.add("label_email_active");

            setTimeout(() => {
                document.getElementById("email").classList.add("email_text_active");
            }, 700);

        }
    });


    document.getElementById("email").addEventListener("click", function(){
        var text = "kacper.drobik.kd@gmail.com";
        navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
        console.error('Async: Could not copy text: ', err);
        });


        var announcement = document.createElement("div");
        document.body.appendChild(announcement);
        announcement.setAttribute("id", "announcement_email");
        announcement.innerHTML = "<p>Zapisano email w schowku!</p>";

        setTimeout(() => {
            announcement.remove();
        }, 3000);
    })
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





    setInterval(() => {

        document.title = "Kacper Drobik- Webmaster";

        setTimeout(() => {

            document.title = "Kacper Drobik- Programista i chodziarz";

        }, 2500);

        setTimeout(() => {

            document.title = "Kacper Drobik- Projekty i osiągnięcia";

        }, 5000);

    }, 12000);
};



