import React, {useState, useEffect} from 'react';
import './Map.css'

const google = window.google

const Map = () => {
  const [location, setLocation] = useState({
    lat: "",
    long: ""
  })

  const [machine, setMachine] = useState("")
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
    setMachine("loading")
  }, []);

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
  
  if (machine === "loaded") {
    return (
      <div className="map-wrapper">
        <div id="map">{console.log(window.google)}</div>
      </div>
    );
  }

  if (machine === "loading") {
    return (
      <div className="bg">
        Retrieving location, please wait...
      </div>
    )
  }

  return null;
}

export default Map;
