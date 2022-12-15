import React, { SetStateAction, useEffect, useState } from "react";
import request from "../../utils/request";
import SellersScreen from "./sellers.screen";
import { useAlert } from "react-alert";

type DeliveriesTyping = Array<object> | any;

const SellersController: React.FC = () => {
  const alert = useAlert();
  const [sellers, setSellers] = useState<SetStateAction<DeliveriesTyping>>();
  const [loading, setLoading] = useState<SetStateAction<boolean>>();

  const requestSellers = async () => {
    setLoading(true);
    const { data, error } = await request({
      method: "GET",
      path: "/seller",
    });
    setLoading(false);

    if (error) {
      alert.error(error);
    }

    setSellers(data);
  };

  useEffect(() => {
    requestSellers();
  }, []);

  const handlers: any = {
    sellers,
    loading,
  };
  return <SellersScreen handlers={handlers} />;
};

export default SellersController;
