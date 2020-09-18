$(document).ready(function () {

  const menuToggle = document.querySelector('.header__toggle-menu');
  const mobMenu = document.querySelector('.nav__link');

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobMenu.classList.toggle('active');
  });

});

$(document).ready(function () {

  let containerEl = document.querySelector('#portfolio-cards');

  let mixer = mixitup(containerEl, {
    classNames: {
      block:""
    }
  });

});

$(document).ready(function () {

  const formInputs = document.querySelectorAll('.form-field');

  for(let item of formInputs){

    const thisPlaceholder = item.nextElementSibling;

    item.addEventListener('focus', function(){
      thisPlaceholder.classList.add('active');
    });

    item.addEventListener('blur', function(){
      if (item.value == '') {
        thisPlaceholder.classList.remove('active');
      }
    });

  }

});
