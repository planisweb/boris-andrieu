
window.addEventListener('scroll', function() {
  console.log( window.scrollY + 'px');
});

const m1= document.getElementById("m1");
const m2 = document.getElementById("m2");

function onWindowScroll(event) {
	if (window.scrollY < 2341 ) {
  	m1.style.backgroundColor="#00a1f0";
      m2.style.backgroundColor="white";
  
  }else if (window.scrollY > 2341  ){
  	m1.style.backgroundColor="white";
    m2.style.backgroundColor="#00a1f0";
}};

  window.addEventListener('scroll', onWindowScroll);



/*-------*/

const tile = document.querySelector(".tile");

tile.addEventListener("mouseenter", function () {
  tile.classList.toggle("is-flipped");
});

tile.addEventListener("mouseleave", function () {
  tile.classList.toggle("is-flipped");
});

AOS.init({
  disable: function() {
    var minWidth = 800;
    return window.innerWidth < minWidth;
  }
});

AOS.init();