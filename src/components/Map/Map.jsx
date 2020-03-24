import React, {useState, useEffect} from 'react';
import './Map.css'

const google = window.google

const Map = () => {
  const [location, setLocation] = useState({
    lat: 0,
    long: 0
  })

  const [machine, setMachine] = useState("")
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    const currentPos = new google.maps.LatLng({lat: location.lat, lng: location.long});
    const map = new google.maps.Map(document.getElementById('map'), {center: currentPos, zoom: 15});
    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);

    const request = {
      radius: 100,
      query: "Veterinarian",
      location: currentPos

    };

    service.textSearch(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }

        map.setCenter(results[0].geometry.location);
      }
    });

    function createMarker(place) {      
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
    
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(`
          <div class="info-window">
            <p>${place.name}</p>
            
            <div class="flex flex-row items-center map-navigate-wrapper mt-2">
              <i class="fas fa-external-link-square-alt mr-2 map-navigate"></i>
              <a class="map-navigate" href="https://www.google.com/maps/dir/?api=1&destination=${place.formatted_address}&dir_action=navigate" target="_blank" rel="noreferrer noopener">Navigate</a>
            </div>
          </div>
        `);
        infowindow.open(map, this);
      });
    }

  }, [location])


  const success = (pos) => {
    setLocation({
      lat: pos.coords.latitude,
      long: pos.coords.longitude
    })
    setMachine("loaded")
  }

  const error = () => {
    window.alert('No worky')
  }
  
  return(
    <div className="map-wrapper">
      <div id="map"></div>
    </div>
  )
}

export default Map;
