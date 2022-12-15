import React, { ReactNode } from "react";
import { FaPencilAlt, FaFileAlt, FaUserAlt } from "react-icons/fa";
import { TextDefault } from "../../styles/globalStyles";
import { Container, Content, Main, Row, SideBar } from "./styles";
import { Link } from "react-router-dom";
import { useTranslateContext } from "../../context/translate";
import LanguageSelect from "../LanguageSelect";

interface LayoutProps {
  title?: string;
  children?: ReactNode;
  contentStyle?: any;
}

const Layout = ({ title = "", children, contentStyle }: LayoutProps) => {
  const { sidebar } = useTranslateContext();
  return (
    <Container>
      <head>
        <title>{title}</title>
      </head>

      <Main>
        <SideBar>
          <div
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <LanguageSelect />
          </div>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Row>
              <FaPencilAlt className="icon" />
              <TextDefault className="text">{sidebar.register}</TextDefault>
            </Row>
          </Link>

          <Link to="/lista-de-entregas" style={{ textDecoration: "none" }}>
            <Row>
              <FaFileAlt className="icon" />
              <TextDefault className="text">{sidebar.deliveries}</TextDefault>
            </Row>
          </Link>

          <Link to="/vendedores" style={{ textDecoration: "none" }}>
            <Row>
              <FaUserAlt className="icon" />
              <TextDefault className="text">{sidebar.sellers}</TextDefault>
            </Row>
          </Link>
        </SideBar>

        <Content style={contentStyle}>{children}</Content>
      </Main>
    </Container>
  );
};

export default Layout;
