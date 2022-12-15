import React from "react";
import HomeController from "../pages/home/home.controller";
import DeliveriesController from "../pages/deliveries/deliveries.controller";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteMapController from "../pages/routeMap/routeMap.controller";
import SellersController from "../pages/sellers/sellers.controller";

export const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route path="/lista-de-entregas" element={<DeliveriesController />} />
        <Route path="/mapa/:origin/:destiny" element={<RouteMapController />} />
        <Route path="/vendedores" element={<SellersController />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
