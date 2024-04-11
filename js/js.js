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

  // Initialize and add the map
  // let map;

  // async function initMap() {
  //   // The location of Uluru
  //   const position = { lat: -25.344, lng: 131.031 };
  //   // Request needed libraries.
  //   //@ts-ignore
  //   const { Map } = await google.maps.importLibrary("maps");
  //   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
  
  //   // The map, centered at Uluru
  //   map = new Map(document.getElementById("map"), {
  //     zoom: 4,
  //     center: position,
  //     mapId: "DEMO_MAP_ID",
  //   });
  
  //   // The marker, positioned at Uluru
  //   const marker = new AdvancedMarkerView({
  //     map: map,
  //     position: position,
  //     title: "Uluru",
  //   });
  // }
  
  // initMap();
});