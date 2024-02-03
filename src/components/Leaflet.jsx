import React, { useContext } from "react"
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { LocationContext } from "../contexts/LocationContext"


const LeafletMap = () => {
  const { lat, long } = useContext(LocationContext);
  const position = [lat, long]
  return (<MapContainer
    center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </MapContainer>)

}

export default LeafletMap;
