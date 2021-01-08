/*
@author:Aayush Bhalotia
Project:Mini-assignment
*/

//Modal Box
let modal = document.getElementsByClassName("askbeore")[0];
let modalpng = document.getElementsByClassName("askbeorepng")[0];
let mobilemodal = document.getElementsByClassName("mobile-askbeore")[0];

let mod = document.getElementById("modelcontent");
let span = document.getElementsByClassName("close")[0];

function box() {
  document.getElementById("myModal").style.display = "block";
}
mobilemodal.addEventListener("click", box);
modalpng.addEventListener("click", box);
modal.addEventListener("click", box);
span.onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

//Nav Bar Actice Function
let header = document.getElementById("subheader");
let btns = header.getElementsByClassName("nav");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

//Carosuel Controls
let slideIndex = 1;
showSlides(slideIndex); //By default
function plusSlides(n) {
  showSlides((slideIndex += n)); //right control
}
function currentSlide(n) {
  showSlides((slideIndex = n)); //left control
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //All Slides
  let dots = document.getElementsByClassName("dot"); //All thumbnail
  if (n > slides.length) {
    slideIndex = 1; //if click next on last slide
  }
  if (n < 1) {
    slideIndex = slides.length;
  } //if click prev on first slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //hide all the slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activethumbnail", ""); //remove active status from all thumbnails
  }
  slides[slideIndex - 1].style.display = "flex"; //display required slide
  dots[slideIndex - 1].className += " activethumbnail"; //active thumbnail
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Searchbar Animation

let input = document.getElementsByClassName("input")[0];
let searchbtn = document.getElementsByClassName("search")[0];

function inputbox() {
  input.style.width = "13em";
  input.style.padding = "1em";
}

searchbtn.addEventListener("click", inputbox);

//Mobile Header
let mobinput = document.getElementsByClassName("mobile-input")[0];
let sbt = document.getElementsByClassName("mobile-searchbtn")[0];

function inputbox2() {
  console.log("x");
  mobinput.style.width = "10em";
  mobinput.style.padding = ".6em";
}

sbt.addEventListener("click", inputbox2);

function openNav() {
  document.getElementById("mySidepanel").style.width = "12em";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (event.target.matches("#myModal")) {
    //Modal box Closing
    document.getElementById("myModal").style.display = "none";
  }

  if (
    event.target.id !== "mobile-searchbtn" &&
    event.target.id !== "mobile-input" &&
    event.target.id !== "op"
  ) {
    console.log("y");
    mobinput.style.width = "0em";
    mobinput.style.padding = "0em";
  }

  if (
    event.target.id !== "rectangle-top" &&
    event.target.id !== "search" &&
    event.target.id !== "bar"
  ) {
    input.style.width = "0em";
    input.style.padding = "0em";
  }

  if (!event.target.matches("#dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
