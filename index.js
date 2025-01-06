window.addEventListener('scroll', function () {
    const element = document.getElementById('textoeu');
    const position = element.getBoundingClientRect();
  
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      element.classList.add('visible');
    }
  });
  