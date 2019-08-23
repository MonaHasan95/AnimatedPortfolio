var navbarbtn= document.querySelector(".navbar-toggler");
var dropMenu = document.querySelector(".navbar-nav");
var menuLink = document.querySelectorAll(".nav-link");

navbarbtn.addEventListener("click", function()
{
    dropMenu.style.backgroundColor= "black";
    for(var i=0; i<menuLink.length; i++)
    {
        menuLink[i].style.textAlign= "center";
    }
    
})