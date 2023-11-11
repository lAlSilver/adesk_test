let button_open = document.querySelectorAll(".accordion")
// console.log(button_open);

 button_open.forEach( function(elem) {
  elem.addEventListener('click', function() {
    const container = elem.closest('.accordion');
    container.classList.toggle('accordion_open');
  });
})