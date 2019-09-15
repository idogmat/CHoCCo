var map;
function initMap() {
    var opt = {center: {lat: 55.751686, lng: 37.600715},
    zoom: 15}
  map = new google.maps.Map(document.getElementById('map'),opt);
      
        var marker1 = new google.maps.Marker({
            position:{lat: 55.751686, lng: 37.600715},
      map:map,
      icon:"/dist/img/map-pin.png"
    });
        var marker2 = new google.maps.Marker({
            position:{lat: 55.751499, lng: 37.584978},
      map:map,
      icon:"/dist/img/map-pin.png"
      
        });
        var marker3 = new google.maps.Marker({
            position:{lat: 55.748592, lng: 37.608665},
      map:map,
      icon:"/dist/img/map-pin.png"
        });
        var marker4 = new google.maps.Marker({
            position:{lat: 55.744844, lng: 37.581623},
      map:map,
      icon:"/dist/img/map-pin.png"
      
        });
  };
