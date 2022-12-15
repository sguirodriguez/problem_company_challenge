import React, { SetStateAction } from "react";
import { useEffect } from "react";
import { useState } from "react";
import RouteMapScreen from "./routeMap.screen";
import { useParams } from "react-router-dom";

const RouteMapController = () => {
  const params: any = useParams();
  const [directionsResponse, setDirectionsResponse] = useState<any>(null);
  const [distance, setDistance] =
    useState<SetStateAction<string | undefined>>("");
  const [duration, setDuration] =
    useState<SetStateAction<string | undefined>>("");

  const center = { lat: -23.469803474797096, lng: -47.486174258411744 };

  const calculateRoute = async () => {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: params?.origin,
      destination: params?.destiny,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results?.routes[0]?.legs[0]?.distance?.text);
    setDuration(results?.routes[0]?.legs[0]?.duration?.text);
  };

  useEffect(() => {
    calculateRoute();
  }, []);

  const handlers = {
    center,
    directionsResponse,
    distance,
    duration,
  };

  return <RouteMapScreen handlers={handlers} />;
};

export default RouteMapController;
