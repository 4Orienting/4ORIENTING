

//gestisce la selezione delle regioni
var italymap = document.getElementById("italy-map"),
allregioni = italymap.querySelectorAll("g");
italymap.addEventListener("click", function(e){ 
  var regioni = e.target.parentNode;
  if(e.target.nodeName == "path") {
  for (var i=0; i < allregioni.length; i++) {
    allregioni[i].classList.remove("active");
  }
  regioni.classList.add("active");
  }
})


//gestisce le animazioni e il menu a tendina del hamburger button quando lo schermo si rimpiciolisce
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});



menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
