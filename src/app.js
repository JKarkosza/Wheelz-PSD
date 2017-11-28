function initMap() {
  var cracow = {lat: 50.064820, lng: 19.942387};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: cracow,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false
  });
  var marker = new google.maps.Marker({
    position: cracow,
    map: map
  });
}

document.addEventListener("DOMContentLoaded", function(){

console.log("DOM fully loaded");

});
