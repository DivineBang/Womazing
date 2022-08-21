//preloader
$(document).ready(function() {
  $('#preloader').fadeOut(400);
});


// Ширина текста в меню
var lis = document.querySelectorAll('ul li');
var li;

for (var i = 0; i < lis.length; i += 1) {
	li = lis.item(i);
  li.style.fontWeight = 700;
  /* получаем дробное значение ширины, иначе получим целое число, округленное в меньшую сторону.
  */
  li.style.width = li.getBoundingClientRect().width + 'px'; 
  li.style.fontWeight = 400;
}



// карусель первый слайд 
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  autoplay:true,
  autoplayHoverPause:true,
  autoplaySpeed:1800,
  autoplayTimeout:9000,
  responsive:{
      0:{
          items:1
      },
      1920:{
          items:1
    }
  }
})


$('.single-item').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover:true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 1800,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});




//tab
$('.tab-pane').on('click',function(){
  var currTab = $(this).index();

  $('.tab-pane').removeClass('active-tab');
  $(this).addClass('active');

  $('.btn-all').removeClass(' active-tab');
  $('.btn-all').eq(currTab).addClass(' active-tab');
})

$('.tab-pane').on('click',function(){
  var currTab = $(this).index();

  $('.tab-pane').removeClass('active-tab');
  $(this).addClass('active-tab');

  $('.btn-shop').removeClass('active-tab');
  $('.btn-shop').eq(currTab).addClass(' active-tab');
})

$('.tab-pane').on('click',function(){
  var currTab = $(this).index();

  $('.tab-pane').removeClass('active-size');
  $(this).addClass('active-size');

  $('.btn-size').removeClass('active-size');
  $('.btn-size').eq(currTab).addClass(' active-size');

})


//burger

$(document).ready(function(){
  $('.header-menu').click(function(event){
    $('.menu-top').toggleClass('active-menu');

  });
});




//sticky header


$(function() {
  let header = $('#header');
  let header2 = $('#header');
  let header3 = $('.back');
  let header4 = $('.back');
  let header5 = $('#phone');
  let hederHeight = header.height(); // вычисляем высоту шапки
  let hederHeightnew = 95;
  

  $(window).scroll(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
      
      } else {
       header.removeClass('header_fixed');
      }
    });
    if($(this).scrollTop() > 1) {
      header.css({
        'background': '#F1EADC'
      });
     $('body').css({
        'paddingTop': hederHeight+hederHeightnew+'px' // делаем отступ у body, равный высоте шапки
     });
     
    } else {
     header.removeClass('header_fixed');

     $('body').css({
      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
     })
    }
    if($(this).scrollTop() > 750) {
      header2.css({
        'background': '#fff'
      });
      header5.css({
        'background-color': '#fff'
      });
    } else {
      header2.css({
        'background': 'linear-gradient(to right, rgb(255, 255, 255) 53%, #F1EADC 47%)' 
      });
      header5.css({
        'background-color': '#F1EADC'
      });
      
    }
  });
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
      header3.css({
        'background': '#fff'
      });
     
     $('body').css({
        'paddingTop': hederHeight+hederHeightnew+'px' // делаем отступ у body, равный высоте шапки
     }
     );
    } else {
     header.removeClass('header_fixed');

     $('body').css({
      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
     })
    }
    if($(this).scrollTop() > 750) {
      header4.css({
        'background': '#fff'
      });
    } else {
      header4.css({
        'background': '#fff' 
      });
    }
  });
});






// validate

$.validator.addMethod('regex' ,function(value,element,regexp){
  let regExsp = new RegExp(regexp);
  return this.optional(element) || regExsp.test(value)
}, 'please check your intup');


$('#form').validate({
    rules:{
      firstName:{
        required:true,
        regex:"[A-Za-z]{1,32}"
      },
      phone:{
        required:true,
        digits:true,
        minlenght:10,
        maxlenght:12,
        regex:"[0-9]+"
      },
      email:{
        required:true
      },
      country:{
        required:true
      },
      city:{
        required:true
      },
      street:{
        required:true
      },
      house:{
        required:true
      },
      flat:{
        required:true
      }
    },
    messages:{
      firstName:'Введите имя правильно',
      phone:'Введите номер правильно',
      email:'Введите почту правильно',
      country:'Введите страну',
      city:'Введите город',
      street:'Введите улицу',
      house:'Введите дом',
      flat:'Введите квартиру'
    }
});

$('#form-new').validate({
  rules:{
    firstName:{
      required:true,
      regex:"[A-Za-z]{1,32}"
    },
    phone:{
      required:true,
      digits:true,
      minlenght:10,
      maxlenght:12,
      regex:"[0-9]+"
    },
    email:{
      required:true
    },
    country:{
      required:true
    },
    city:{
      required:true
    },
    street:{
      required:true
    },
    house:{
      required:true
    },
    flat:{
      required:true
    }
    
  },
  messages:{
    firstName:'Введите имя правильно',
    phone:'Введите номер правильно',
    email:'Введите почту правильно',
    country:'Введите страну',
    city:'Введите город',
    street:'Введите улицу',
    house:'Введите дом',
    flat:'Введите квартиру'
  }
});

"use strict"
//форма + header
document.addEventListener('DOMContentLoaded' ,function (){
  const a = document.querySelector('.phone-top__img');
  const popup = document.querySelector('.popup');
  const form = document.getElementById('popup');
  
  
  a.addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
  });

  // Получение элемента <span>, который закрывает модальное окно
  const span = document.querySelector('.close');
  // Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
  span.onclick = function() {
    popup.classList.remove('popup_open');
  }

  // Когда пользователь нажимает в любое место вне формы, закрыть окно формы
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.classList.remove('popup_open');
    }
  }

});


