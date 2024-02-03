import React, { useState } from "react";

const defaultVal = { lat: 17.4065,long: 78.4772 }
export const LocationContext = React.createContext(defaultVal);

export const LocationProvider = ({children}) =>{
  const [location, setLocation] = useState({
    ...defaultVal
  });

  return (<LocationContext.Provider value={{
    ...location,
    setLocation
  }}>
    {children}
  </LocationContext.Provider>
  )
};
