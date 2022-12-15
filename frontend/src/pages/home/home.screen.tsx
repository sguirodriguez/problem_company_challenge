import React from "react";
import Layout from "../../components/layout";
import { Title } from "../../styles/globalStyles";
import { Container } from "./home.styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SellerComponent from "./components/sellers";
import ClientsComponent from "./components/clients";
import ProductsComponent from "./components/products";
import DeliveriesComponent from "./components/deliveries";
import { useTranslateContext } from "../../context/translate";

const HomeScreen = ({ handlers }: any) => {
  const { handleChange, tabValue } = handlers;
  const { home } = useTranslateContext();
  const translatorForTabs: any = {
    sellers: <SellerComponent />,
    clients: <ClientsComponent />,
    products: <ProductsComponent />,
    deliveries: <DeliveriesComponent />,
  };

  return (
    <Layout
      title={home.home_title}
      contentStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Container>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={<Title style={{ fontSize: "1rem" }}>{home.sellers}</Title>}
            value="sellers"
          />
          <Tab
            label={<Title style={{ fontSize: "1rem" }}>{home.clients}</Title>}
            value="clients"
          />
          <Tab
            label={<Title style={{ fontSize: "1rem" }}>{home.products}</Title>}
            value="products"
          />
          <Tab
            label={
              <Title style={{ fontSize: "1rem" }}>{home.deliveries}</Title>
            }
            value="deliveries"
          />
        </Tabs>

        {translatorForTabs[tabValue]}
      </Container>
    </Layout>
  );
};

export default HomeScreen;
