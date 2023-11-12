let buttonOpen = document.querySelectorAll(".accordion")

 buttonOpen.forEach( function(elem) {
  elem.addEventListener('click', function() {
    this.classList.toggle('accordion_open');
  });
})
