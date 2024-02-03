import React, { useState } from "react";

const defaultVal = { lat: 17.4065,lng: 78.4772 }
export const LocationContext = React.createContext(defaultVal);

export const LocationProvider = ({children}) =>{
  const [location, setLocation] = useState({
    ...defaultVal
  });

  const changeLocation = (x,y) => {
    console.log({
      x, y
    })
    setLocation({
      lat:x,
      lng:y
    })
  }

  return (<LocationContext.Provider value={{
    ...location,
    changeLocation
  }}>
    {children}
  </LocationContext.Provider>
  )
};
