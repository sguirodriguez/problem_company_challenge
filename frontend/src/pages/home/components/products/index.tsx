import { CircularProgress } from "@mui/material";
import React, { SetStateAction, useEffect, useState } from "react";
import ButtonComponent from "../../../../components/button";
import Input from "../../../../components/input";
import request from "../../../../utils/request";
import { Container, Loading, Text } from "./styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import {
  handleMoneyMask,
  onlyNumbers,
} from "../../../../utils/maskAndValidators";
import { useAlert } from "react-alert";
import { useTranslateContext } from "../../../../context/translate";

const ProductsComponent: React.FC = () => {
  const alert = useAlert();
  const [sellers, setSellers] = useState<SetStateAction<any>>("");
  const [name, setName] = useState<SetStateAction<string>>("");
  const [value, setValue] = useState<SetStateAction<string>>("");
  const [idSeller, setIdSeller] = useState<SetStateAction<number | null>>();
  const [loading, setLoading] = useState<SetStateAction<boolean>>();
  const [seller, setSeller] = useState<SetStateAction<any>>(0);
  const { home } = useTranslateContext();

  const handleSubmit = async () => {
    if (!name) {
      return alert.error(home.alert.name);
    }
    if (!value) {
      return alert.error(home.alert.value);
    }
    if (!idSeller) {
      return alert.error(home.alert.seller);
    }

    setLoading(true);
    const { error } = await request({
      method: "POST",
      path: "/product",
      body: {
        name,
        value: onlyNumbers(String(value)),
        idSeller,
      },
    });
    setLoading(false);

    if (error) {
      return alert.error(error);
    }

    setName("");
    setValue("");
    setIdSeller(null);

    return alert.success(home.success);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setIdSeller(Number(event.target.value));
    setSeller(event.target.value as string);
  };

  const requestGetSeller = async () => {
    const { data, error } = await request({
      method: "GET",
      path: "/seller",
    });

    if (error) {
      alert.error(error);
    }

    setSellers(data);
  };

  useEffect(() => {
    requestGetSeller();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        <>
          <Input
            value={name}
            onChange={(event: any) => setName(event.target.value)}
            label={home.label.name}
          />

          <Input
            value={value}
            onChange={(event: any) =>
              setValue(handleMoneyMask(event.target.value))
            }
            label={home.label.value}
          />

          <FormControl fullWidth style={{ marginTop: 10 }}>
            <InputLabel id="demo-simple-select-label">
              {home.sellers}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={seller}
              label={home.sellers}
              onChange={handleChange}
            >
              {!sellers && (
                <MenuItem value={0}>{home.label.seller_not_avalaible}</MenuItem>
              )}
              {sellers &&
                sellers?.map((item: any, index: number) => (
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

export default ProductsComponent;
