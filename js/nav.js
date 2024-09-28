window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    
    if (window.scrollY > 0) {
      navbar.classList.add('nav--scrolled');
    } else {
      navbar.classList.remove('nav--scrolled');
    }
  });

  window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".nav__mobile");
    
    // Jika halaman discroll lebih dari 0px, tambahkan class
    if (window.scrollY > 0) {
      navbar.classList.add("shadow-on-scroll");
    } else {
      navbar.classList.remove("shadow-on-scroll");
    }
  });
  