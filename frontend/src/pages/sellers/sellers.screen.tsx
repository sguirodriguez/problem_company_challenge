import { CircularProgress } from "@mui/material";
import React from "react";
import Accordion from "../../components/accordionSellers";
import Layout from "../../components/layout";
import { useTranslateContext } from "../../context/translate";
import { Title } from "../../styles/globalStyles";
import { Container, Loading } from "./sellers.styles";

const SellersScreen = ({ handlers }: any) => {
  const { sellers, loading } = handlers;
  const { sellers_screen } = useTranslateContext();
  return (
    <Layout
      title={sellers_screen.title}
      contentStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Container>
        <Title>{sellers_screen.title}</Title>
        {loading ? (
          <Loading>
            <CircularProgress />
          </Loading>
        ) : (
          <Accordion data={sellers} />
        )}
      </Container>
    </Layout>
  );
};

export default SellersScreen;
