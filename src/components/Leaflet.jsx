import React, { useContext } from "react"
import { MapContainer, TileLayer, Popup, Marker, useMapEvents } from 'react-leaflet'
import { LocationContext } from "../contexts/LocationContext"


const LeafletMap = () => {
  const { lat, lng, changeLocation } = useContext(LocationContext);
  console.log({
    leflet:"",
    lat, lng, changeLocation
  })
  const position = [lat, lng]

  return (<MapContainer
    center={position} zoom={13}>
      <Innermap position={position} setPosition={changeLocation} />
    </MapContainer>)

}

const Innermap = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng.lat, e.latlng.lng);
    },
  })

  return (<>
   <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </>)
}

export default LeafletMap;
