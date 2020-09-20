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

$(document).ready(function () {

 //FORM VALIDATE
    $('#contact-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            theme: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'отсутсвует символ @'
            },
            theme: {
                required: 'Введите тему сообщения'
            },
            message: {
                required: 'Введите текстсообщения'
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }

    })


    // Функция AJAX запрса на сервер

    function ajaxFormSubmit() {

        let string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

        //Формируем ajax запрос
        $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string

            // Функция если все прошло успешно
            success: function (html) {
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });

        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
        return false;
    }

});
