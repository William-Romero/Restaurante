let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando el usuario hace clic en el botón, desplaza al inicio del documento
function topFunction() {
  // Desplazamiento suave para navegadores modernos
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  
}