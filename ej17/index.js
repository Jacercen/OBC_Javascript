// Initialize and add the map
function initMap() {
    // The location of Uluru
    const montreal = { lat: 45.50, lng: -73.55 };
    const madrid = { lat :40.419, lng: -3.688}
    const berlin = { lat: 52.497, lng: 13.416}
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: madrid,
    });
    // The marker, positioned at Uluru
    const marker1 = new google.maps.Marker({
      position: montreal,
      map: map,
    });
    const marker2 = new google.maps.Marker({
      position: madrid,
      map: map,
      });
    const marker3 = new google.maps.Marker({
      position: berlin,
      map: map,
    });
  }