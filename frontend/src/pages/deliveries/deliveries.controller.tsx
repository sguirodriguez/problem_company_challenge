import React, { SetStateAction, useEffect, useState } from "react";
import request from "../../utils/request";
import DeliveriesScreen from "./deliveries.screen";
import { useAlert } from "react-alert";

type DeliveriesTyping = Array<object> | any;

const DeliveriesController = () => {
  const alert = useAlert();
  const [deliveries, setDeliveries] =
    useState<SetStateAction<DeliveriesTyping>>();
  const [filterDeliveries, setFilterDeliveries] = useState<string>();
  const [filteredValues, setFilteredValues] =
    useState<SetStateAction<DeliveriesTyping>>();
  const [loading, setLoading] = useState<SetStateAction<boolean>>();

  const requestDeliveries = async () => {
    setLoading(true);
    const { data, error } = await request({
      method: "GET",
      path: "/delivery",
    });
    setLoading(false);
    console.log("o que vem", data);
    if (error) {
      alert.error(error);
    }

    setDeliveries(data);
  };

  const handleSearchDeliveries = (value: string) => {
    setFilterDeliveries(value);
    const filteredDeliveries = deliveries?.filter(
      (item: any, index: number) => {
        if (item?.name.includes(value) || item?.product.includes(value)) {
          return item;
        }
        return;
      }
    );

    setFilteredValues(filteredDeliveries);
  };

  useEffect(() => {
    requestDeliveries();
  }, []);

  const handlers = {
    deliveries,
    filterDeliveries,
    handleSearchDeliveries,
    filteredValues,
    loading,
  };

  return <DeliveriesScreen handlers={handlers} />;
};

export default DeliveriesController;
