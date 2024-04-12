$(document).ready(function(){
  const faq_item = document.querySelectorAll('.faq li')
  faq_item.forEach((obj) => {
    
    obj.addEventListener('click', function () {
      faq_item.forEach((item) => {
        item.classList.remove('active');
      });
      this.classList.add('active');
    })
    
  });
  const ac_item = document.querySelectorAll('.ac-item');

ac_item.forEach((obj) => {
  obj.addEventListener('click', function() {
    // Убираем класс active у всех элементов
    ac_item.forEach((item) => {
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

$('.reviews__slider, .header-hero__slider').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots: false,
    // autoWidth: true
});
  const mobile_are = document.querySelectorAll('.mobile_are li');

  mobile_are.forEach((obj) => {
    obj.addEventListener('click', function(e){
      this.parentNode.classList.add('active');
      console.log(this)
      this.querySelector('ul').classList.add('active')
    })
  })
  
});