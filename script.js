const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach((item)=>{
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;

    if(elementTop < windowHeight - 120){
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
