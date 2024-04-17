
$('.reviews__slider, .header-hero__slider').owlCarousel({
  items: 1, loop: false, margin: 0, nav: true, navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'], dots: false,
});
$(document).ready(function(){


const gumv  = document.querySelector('.mobile_btn');
const clo = document.querySelector('.navigation .closes');
const overlay = document.querySelector('.overlay');
gumv.addEventListener('click', function(e){
  e.preventDefault();
  const navigation = document.querySelector('.navigation');
  navigation.classList.add('active');
  document.body.style.overflow = 'hidden';
  overlay.classList.add('active');

 
  const mobile_menu_items = document.querySelectorAll('.navigation.active li');

  mobile_menu_items.forEach((obj) => {
    obj.addEventListener('click', function(e) {
      
      
      const subMenu = obj.querySelector('  ul');
      if (subMenu) {
        const link = obj.querySelector('a:first-child'); // Выбираем первую ссылку внутри элемента li
        if (link === e.target) {
          e.preventDefault(); // Предотвращаем стандартное действие только для этой ссылки
        }
        this.classList.add('active');
        obj.parentNode.classList.add('show');
        document.querySelector('.back').style.display = 'block';
        document.querySelector('.closes').style.display = 'none';  
      }
      
      
    });
  });

  const backButton = document.querySelector('.back');
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      e.preventDefault();
      const activeItems = document.querySelectorAll('.navigation.active li.active');
      const closeButton = document.querySelector('.closes');
      if (activeItems.length > 0) {
        const lastActiveItem = activeItems[activeItems.length - 1];
        lastActiveItem.classList.remove('active');
        lastActiveItem.parentNode.classList.remove('show');
      } 
      const uls = document.querySelectorAll('.navigation ul');
      let hasActiveMenu = false;
      uls.forEach(ul => {
        if (ul.classList.contains('show')) {
          hasActiveMenu = true;
        }
      });
      if (!hasActiveMenu) {
        backButton.style.display = 'none';
        closeButton.style.display = 'block';
      }
    });
  }


})
clo.addEventListener('click', function(e){
  e.preventDefault();
  this.parentNode.classList.remove('active');
  document.body.style.overflow = '';
  overlay.classList.remove('active');
})

  // Проверка наличия элементов .faq li перед выполнением операций с ними
  const faq_items = document.querySelectorAll('.faq li');
  if (faq_items.length > 0) {
    faq_items.forEach((obj) => {
      obj.addEventListener('click', function () {
        faq_items.forEach((item) => {
          item.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }

  // Проверка наличия элементов .ac-item перед выполнением операций с ними
  const ac_items = document.querySelectorAll('.ac-item');
  if (ac_items.length > 0) {
    ac_items.forEach((obj) => {
      obj.addEventListener('click', function() {
        // Убираем класс active у всех элементов
        ac_items.forEach((item) => {
          item.classList.remove('active');
          const icon = item.querySelector('i');
          if (icon) {
            icon.classList.remove('fas', 'fa-minus');
            icon.classList.add('fas', 'fa-plus');
          }
        });

        // Добавляем класс active текущему элементу
        this.classList.add('active');
        const icon = this.querySelector('i');
        if (icon) {
          // Проверяем наличие класса active у текущего элемента и изменяем иконку в зависимости от этого
          if (this.classList.contains('active')) {
            icon.classList.remove('fas', 'fa-plus');
            icon.classList.add('fas', 'fa-minus');
          } else {
            icon.classList.remove('fas', 'fa-minus');
            icon.classList.add('fas', 'fa-plus');
          }
        }
      });
    });
  }

  // Проверка наличия элементов .mobile_are li перед выполнением операций с ними
  const mobile_are_items = document.querySelectorAll('.mobile_are li');
  if (mobile_are_items.length > 0) {
    mobile_are_items.forEach((obj) => {
      obj.addEventListener('click', function(e){
        const parent = this.parentNode;
        if (parent) {
          parent.classList.add('active');
          const ul = this.querySelector('ul');
          if (ul) {
            ul.classList.add('active');
          }
        }
      });
    });
  }

  // Проверка наличия элемента #frames перед добавлением обработчика события
  const frames = document.querySelector('#frames');
  if (frames) {
    frames.addEventListener('click', function(){
      replaceWithVideo();
    });
  }

  // Функция для замены элемента #frames на видео
  function replaceWithVideo() {
    var item = document.querySelector('#frames');
    if (item) {
      item.style.backgroundImage = 'none'; // Убираем background image

      var icon = item.querySelector('svg');
      if (icon) {
        icon.remove(); // Удаляем <i>
      }

      var iframe = document.createElement('iframe');
      iframe.className = 'elementor-video';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('title', '22 июня 2023 г.');
      iframe.setAttribute('width', '640');
      iframe.setAttribute('height', '360');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/boG2ztUV7zY?controls=0&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fevak-expert.com.ua&widgetid=1');
      iframe.id = 'widget2';

      item.appendChild(iframe); // Вставляем <iframe> внутрь .services-wt__item
    }
  }



});
