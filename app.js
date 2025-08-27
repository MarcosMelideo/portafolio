for (let i = 0; i < 700; i++) {
    const element = document.createElement("div");
    element.classList.add("star");
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 3;

    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;

    document.querySelector('.animation-section').appendChild(element);
}

for(let e=0; e<300; e++){
    const x=Math.floor(Math.random()*300);
    document.querySelectorAll(".star")[x].classList.add('twinkle');
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);
  