// Menu  responsive
let x = document.querySelector(".cross");
let menuMobile = document.querySelector(".navbar");
let iconMenu = document.querySelector(".iconMenu");

iconMenu.addEventListener("click", () => {
  // menuMobile.classList.toggle("main-menu--show");
  menuMobile.style.transform = "translateY(0)";
  iconMenu.style.display= "none";
  x.style.display = "flex";
});
x.addEventListener("click", () => {
  x.style.display= "none";
  menuMobile.style.transform = "translateY(-100%)";
  iconMenu.style.display = "flex";
});



// Quitar animaciones aos a partir de los 430px
if(window.screen.width <= 430){
  
  let animations = document.querySelectorAll(".animada");
  animations.forEach(elemento => {
    elemento.removeAttribute("data-aos");
    elemento.removeAttribute("data-aos-duration");
  });

}


/* Rotating Text - ReplaceMe */
var checkReplace = document.querySelector(".replace-me");
if (checkReplace !== null) {
  var replace = new ReplaceMe(document.querySelector(".replace-me"), {
    animation: "animated fadeIn", // Animation class or classes
    speed: 2000, // Delay between each phrase in miliseconds
    separator: ",", // Phrases separator
    hoverStop: false, // Stop rotator on phrase hover
    clickChange: false, // Change phrase on click
    loopCount: "infinite", // Loop Count - 'infinite' or number
    autoRun: true, // Run rotator automatically
    onInit: false, // Function
    onChange: false, // Function
    onComplete: false, // Function
  });
}


// Animacion texto curvado
// $(".arcText").arctext({
//   radius: 600,
//   dir: -1,
// });

// aparece cuando esta en medio de la pantalla, y despues añade a cada span una animation: con su nombre del css
document.addEventListener("DOMContentLoaded", function () {
  const textoAnimado = document.getElementById("textoAnimado");
  const spans = textoAnimado.querySelectorAll("span");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Verificar si el centro del elemento está en el área visible
    return rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;
  }

  function handleScroll() {
    if (isInViewport(textoAnimado)) {
      textoAnimado.classList.add("mostrar");
      spans.forEach(function (span, index) {
        span.classList.add("animacion-span");
        span.style.animation = `moveText${index + 1} 3s ease-in-out forwards`;
        span.style.animationDelay = `1000ms`;
      });

      window.removeEventListener("scroll", handleScroll);
    }	
  }

  window.addEventListener("scroll", handleScroll);
});



/* Filter - Isotope */
const gridCheck = document.querySelector(".grid");

if (gridCheck !== null) {
  // init Isotope
  var iso = new Isotope(".grid", {
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });

  // bind filter button click
  var filtersElem = document.querySelector(".filters-button-group");
  filtersElem.addEventListener("click", function (event) {
    // only work with buttons
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    // use matching filter function
    iso.arrange({ filter: filterValue });
  });

  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll(".button-group");
  for (var i = 0, len = buttonGroups.length; i < len; i++) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
  }

  function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener("click", function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, "button")) {
        return;
      }
      buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
      event.target.classList.add("is-checked");
    });
  }
}



// Slider dentadura (twentytwenty)
$(function () {
  $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
    default_offset_pct: 0.7,
  });
  $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({
    default_offset_pct: 0.3,
    orientation: "vertical",
  });
});


// Alert mensaje correo correcto!
// function alertMensaje(){
//   let alertCorreo = document.getElementById("alertCorreo");
//   setTimeout(() => {
//     alertCorreo.style.display = "flex";
//   }, 3000)
//   alertCorreo.style.display = "none";
// }


// MAPA CONTACTO
var map = L.map("map").setView([45.377064, 11.853666], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    
}).addTo(map);

var marker = L.marker([45.376932, 11.853655]).addTo(map).bindPopup('<b>Centro Odontoiatrico Colombo</b>')
.openPopup();;

// GOOGLE MAP API
// Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();

/* Navigation */
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
  scrollFunction();
  scrollFunctionBTT(); // back to top button
};



// Efecto parallax
function scrollFunction(){
  var position = window.pageYOffset || document.documentElement.scrollTop;
  var element = document.getElementById("iconoChiSiamo");

  element.style.bottom = position * 0.35+ "px";
}


// API enviar mail
// function sendMail(){
//   Email.send({
//       Host : "smtp.gmail.com",
//       Username: "morellgumi@gmail.com",
//       Password: "Conor225",
//       To: "morellgumi@gmail.com",
//       From: "morellgumi@gmail.com",
//       Subject: "s",
//       Body: "hola"
//   }).then(
//       message => (alert("ok"))
//   );
// }


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

// Animaciones AOS
AOS.init();
