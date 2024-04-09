$(document).ready(function(){
  
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
  let map;

  async function initMap() {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
  
    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
  
    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerView({
      map: map,
      position: position,
      title: "Uluru",
    });
  }
  
  initMap();
});
