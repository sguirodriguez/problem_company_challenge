import React from "react";
import Layout from "../../components/layout";
import { Container, Loading } from "./deliveries.styles";
import Input from "../../components/input";
import Accordion from "../../components/accordion";
import { Title } from "../../styles/globalStyles";
import { CircularProgress } from "@mui/material";
import { useTranslateContext } from "../../context/translate";

const DeliveriesScreen = ({ handlers }: any) => {
  const {
    deliveries,
    filterDeliveries,
    handleSearchDeliveries,
    filteredValues,
    loading,
  } = handlers;
  const { deliveries_screen } = useTranslateContext();

  return (
    <Layout
      title={deliveries_screen.title}
      contentStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Container>
        <Title>{deliveries_screen.title}</Title>
        {loading ? (
          <Loading>
            <CircularProgress />
          </Loading>
        ) : (
          <>
            <Input
              type="default"
              label={deliveries_screen.title_search}
              value={filterDeliveries}
              onChange={(event: any) =>
                handleSearchDeliveries(event.target.value)
              }
            />

            <Accordion data={!filteredValues ? deliveries : filteredValues} />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default DeliveriesScreen;
