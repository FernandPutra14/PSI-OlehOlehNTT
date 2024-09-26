window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    
    if (window.scrollY > 0) {
      navbar.classList.add('nav--scrolled');
    } else {
      navbar.classList.remove('nav--scrolled');
    }
  });