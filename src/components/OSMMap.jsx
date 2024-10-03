import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customMarkerIcon from '../assets/marker.png';
import useMediaQuery from "@mui/material/useMediaQuery";

const OSMMap = () => {
  const mapRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:600px)"); // Customize the breakpoint as needed
  useEffect(() => {
    console.log(mapRef.current)
    //if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([52.51252421927479, 13.271941597183538], 13); // Koordinaten für die Anfangsposition der Karte
    
    const customIcon = L.icon({
      iconUrl: customMarkerIcon,
      iconSize: [32, 32], // Set the size of your custom icon
      iconAnchor: [16, 32], // Adjust the anchor point if needed
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([52.51252421927479, 13.271941597183538], { icon: customIcon }).addTo(map);

    // Popup with the address
    const addressPopup = L.popup().setContent("<p>Halmstrasse 2, 14050 Berlin</p>");
    marker.bindPopup(addressPopup).openPopup();

    return () => {
      map.remove(); // Entfernen der Karte, wenn die Komponente entladen wird
    };
  }, []);

  return <div ref={mapRef} id='map' style={{ width: isMobile ? "460px" : "500px", height: isMobile ? "260px" : "300px"}}/>;
};

export default OSMMap;
