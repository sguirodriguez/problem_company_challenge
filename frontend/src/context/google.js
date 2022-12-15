import React from "react";
import { createContext, useContext } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
const GoogleContext = createContext();

// eslint-disable-next-line react/prop-types
export function GoogleWrapper({ children }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCot3xKKpMGiCnTx01eSyPSpT6rzGaXgio",
    libraries: ["places"],
  });

  return (
    <GoogleContext.Provider value={isLoaded}>
      {isLoaded && children}
    </GoogleContext.Provider>
  );
}

export function useGoogleContext() {
  return useContext(GoogleContext);
}
