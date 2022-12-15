import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useCookies } from "react-cookie";
import { Container } from "./styles";

const LanguageSelect = () => {
  const [cookies, setCookie] = useCookies(["language"]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const translatorFlag: any = {
    pt_BR:
      "https://www.gov.br/mre/pt-br/embaixada-seul/arquivos/imagens/BRASIL.png/@@images/image",
    en_US:
      "https://www.gov.br/agricultura/pt-br/assuntos/relacoes-internacionais/agro-mais-investimentos/imagens/bandeira-dos-estados-unidos.png/@@images/image.png",
  };

  const [language, setLanguage] = useState(
    cookies?.language && cookies?.language !== undefined
      ? translatorFlag[cookies?.language]
      : "https://www.gov.br/mre/pt-br/embaixada-seul/arquivos/imagens/BRASIL.png/@@images/image"
  );

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectLanguage = (value: any) => {
    setLanguage(translatorFlag[value]);
    setCookie("language", value);
    setAnchorEl(null);
  };

  return (
    <Container>
      <button onClick={handleClick}>
        <img
          src={language}
          style={{ width: 30, height: 20, marginBottom: 3 }}
          alt=""
        ></img>
      </button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{ marginTop: 10 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={() => handleSelectLanguage("pt_BR")}>
          <img
            src={
              "https://www.gov.br/mre/pt-br/embaixada-seul/arquivos/imagens/BRASIL.png/@@images/image"
            }
            style={{ width: 28, height: 20 }}
            alt="Português"
          ></img>
        </MenuItem>
        <MenuItem onClick={() => handleSelectLanguage("en_US")}>
          <img
            src={
              "https://www.gov.br/agricultura/pt-br/assuntos/relacoes-internacionais/agro-mais-investimentos/imagens/bandeira-dos-estados-unidos.png/@@images/image.png"
            }
            style={{ width: 28, height: 20 }}
            alt="Português"
          ></img>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default LanguageSelect;
