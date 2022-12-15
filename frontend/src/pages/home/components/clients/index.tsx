import { CircularProgress } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import React, { SetStateAction, useRef, useState } from "react";
import ButtonComponent from "../../../../components/button";
import Input from "../../../../components/input";
import { cpfMask, onlyNumbers } from "../../../../utils/maskAndValidators";
import request from "../../../../utils/request";
import { Container, InputAutoComplete, Loading, Text } from "./styles";
import { useAlert } from "react-alert";
import { useTranslateContext } from "../../../../context/translate";

const ClientComponent: React.FC = () => {
  const alert = useAlert();
  const [name, setName] = useState<SetStateAction<string>>("");
  const [email, setEmail] = useState<SetStateAction<string>>("");
  const [document, setDocument] = useState<SetStateAction<string>>("");
  const [loading, setLoading] = useState<SetStateAction<boolean>>();
  const { home } = useTranslateContext();

  const originRef: any = useRef();

  const handleSubmit = async () => {
    const validateName = String(name).split(" ");
    const validateEmail = String(email).includes("@");

    if (!name) {
      return alert.error(home.alert.name);
    }
    if (validateName?.length <= 1) {
      return alert.error(home.alert.validate_name);
    }
    if (!email) {
      return alert.error(home.alert.email);
    }
    if (!validateEmail) {
      return alert.error(home.alert.validate_email);
    }
    if (!document) {
      return alert.error(home.alert.document);
    }
    if (!originRef?.current?.value) {
      return alert.error(home.alert.address);
    }

    setLoading(true);
    const { error } = await request({
      method: "POST",
      path: "/client",
      body: {
        name,
        email,
        document: onlyNumbers(document.toString()),
        address: originRef?.current?.value,
      },
    });
    setLoading(false);

    if (error) {
      return alert.error(error);
    }

    setName("");
    setEmail("");
    setDocument("");

    return alert.success(home.success);
  };

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
            value={email}
            onChange={(event: any) => setEmail(event.target.value)}
            label={home.label.email}
          />

          <Input
            value={document}
            onChange={(event: any) => setDocument(cpfMask(event.target.value))}
            label={home.label.document}
          />

          <Autocomplete>
            <InputAutoComplete type="text" ref={originRef} />
          </Autocomplete>

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

export default ClientComponent;
