// ================= TYPING EFFECT =================


const text = "Computer Science Engineering Student";

let index = 0;

let speed = 100;


function typingEffect(){

    if(index < text.length){

        document.querySelector(".hero-content h2").innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, speed);

    }

}


// Page load hone ke baad typing start

window.onload = function(){

    document.querySelector(".hero-content h2").innerHTML = "";

    typingEffect();

};





// ================= SCROLL TOP BUTTON =================


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",function(){


    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }


});



topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};





// ================= NAVBAR ACTIVE LINK =================


let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll(".navbar a");



window.onscroll = () => {


    sections.forEach(sec=>{


        let top = window.scrollY;

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute("id");



        if(top >= offset && top < offset + height){


            navLinks.forEach(link=>{


                link.classList.remove("active");


                if(link.getAttribute("href") === "#" + id){

                    link.classList.add("active");

                }


            });


        }


    });


};





// ================= CONTACT FORM =================


const form = document.querySelector("form");


form.addEventListener("submit",function(e){


    e.preventDefault();


    alert("Thank you! Your message has been submitted.");


    form.reset();


});