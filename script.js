// Menu
let menuButton = document.querySelector('#menu-button');
let menu = document.querySelector('#menu');

// Masquage
menuButton.addEventListener('click',function(){
  menu.classList.toggle('show-menu');
  menuButton.classList.toggle('close');
});



