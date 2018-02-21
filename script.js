function initMap() {
  var poznan = {
    lat: 52.4064,
    lng: 16.9252
  };
  var map = new google.maps.Map(document.getElementById("mapGoogle"), {
    zoom: 14,
    center: { ...poznan, lat: poznan.lat - 0.01 }
  });
  var marker = new google.maps.Marker({
    position: poznan,
    map: map
  });
}