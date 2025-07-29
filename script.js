window.onload = function() {
  window.scrollTo(0, 0);
};




const elements = document.querySelectorAll('.about-text, .about, .education, .education-card, .skills, .skill-card, .project, .restaurant, .dark, .solar, .project');
const navItems = document.querySelectorAll('.nav-bar div');

function checkScroll() {
  elements.forEach(el => {
    const elementPosition = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      el.classList.add('show');
    }
  });

  
  const scrollPosition = window.scrollY;
  
  if (scrollPosition < window.innerHeight * 0.5) {
    setActiveNavItem('n-one');
  } else if (scrollPosition < window.innerHeight * 1.8) {
    setActiveNavItem('n-two');
  }
}
const backToTopButton = document.getElementById("top");
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block"
  } else {
    backToTopButton.style.display = "none";
  }
};


function totop(){
  window.scrollTo({
    top : 0,
    behavior : 'smooth'
  })
}

function setActiveNavItem(activeClass) {
  navItems.forEach(item => {
    if (item.classList.contains(activeClass)) {
      item.style.opacity = '1';
      item.style.color = '#eaa12b';
    } else {
      item.style.opacity = '0.5';
      item.style.color = '#ffffff';
    }
  });
}
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

function gotohome() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  setActiveNavItem('n-one');
}

function gotoabout() {
  const aboutSection = document.querySelector('.container2');
  const navHeight = document.querySelector('.nav-bar').offsetHeight;
  const aboutPosition = aboutSection.offsetTop - navHeight;
  
  window.scrollTo({
    top: aboutPosition,
    behavior: 'smooth'
  });
  setActiveNavItem('n-two');
}