import { CircularProgress } from "@mui/material";
import React, { SetStateAction, useEffect, useState } from "react";
import ButtonComponent from "../../../../components/button";
import request from "../../../../utils/request";
import { Container, Loading, Text } from "./styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useAlert } from "react-alert";
import { useTranslateContext } from "../../../../context/translate";

const DeliveriesComponent: React.FC = () => {
  const alert = useAlert();
  const { home } = useTranslateContext();
  const [products, setProducts] = useState<SetStateAction<any>>("");
  const [product, setProduct] = useState<SetStateAction<any>>(0);
  const [idProduct, setIdProduct] = useState<SetStateAction<number | null>>();
  const [clients, setClients] = useState<SetStateAction<any>>("");
  const [client, setClient] = useState<SetStateAction<any>>(0);
  const [idClient, setIdClient] = useState<SetStateAction<number | null>>();

  const [loading, setLoading] = useState<SetStateAction<boolean>>();

  const handleSubmit = async () => {
    if (!product) {
      return alert.error(home.alert.product);
    }

    if (!idClient) {
      return alert.error(home.alert.seller);
    }

    setLoading(true);
    const { error } = await request({
      method: "POST",
      path: "/delivery",
      body: {
        idProduct,
        idClient,
      },
    });
    setLoading(false);

    if (error) {
      return alert.error(error);
    }

    setProduct(null);
    setIdClient(null);

    return alert.success(home.success);
  };

  const handleChangeProduct = (event: SelectChangeEvent) => {
    setIdProduct(Number(event.target.value));
    setProduct(event.target.value as string);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setIdClient(Number(event.target.value));
    setClient(event.target.value as string);
  };

  const requestGetProducts = async () => {
    const { data, error } = await request({
      method: "GET",
      path: "/product",
    });

    if (error) {
      alert.error(error);
    }

    setProducts(data);
  };

  const requestGetClients = async () => {
    const { data, error } = await request({
      method: "GET",
      path: "/client",
    });

    if (error) {
      alert.error(error);
    }

    setClients(data);
  };

  useEffect(() => {
    requestGetClients();
    requestGetProducts();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        <>
          <FormControl fullWidth style={{ marginTop: 10 }}>
            <InputLabel id="demo-simple-select-label">
              {home.label.product}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={product}
              label={home.label.product}
              onChange={handleChangeProduct}
            >
              {!products && (
                <MenuItem value={0}>
                  {home.label.product_not_avalaible}
                </MenuItem>
              )}
              {products &&
                products?.map((item: any, index: number) => (
                  <MenuItem value={Number(item?.id)} key={index}>
                    {item?.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <FormControl fullWidth style={{ marginTop: 10 }}>
            <InputLabel id="demo-simple-select-label">
              {home.label.client}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={client}
              label={home.label.client}
              onChange={handleChange}
            >
              {!clients && (
                <MenuItem value={0}>{home.label.client_not_avalaible}</MenuItem>
              )}
              {clients &&
                clients?.map((item: any, index: number) => (
                  <MenuItem value={Number(item?.id)} key={index}>
                    {item?.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <ButtonComponent
            onClick={() => handleSubmit()}
            style={{ marginTop: 20, maxWidth: 280 }}
          >
            <Text>{home.label.button}</Text>
          </ButtonComponent>
        </>
      )}
    </Container>
  );
};

export default DeliveriesComponent;
