import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
 } 
  html,body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const TextDefault = styled.span`
  color: #131f30;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
`;

export const Title = styled(TextDefault)`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 32px;
`;

export const colors = {
  white: "#FFFFFF",
  black: "#000",
  gray: "#EAEFED",
  grayDark: "#C6C6C6",
  background: "#F9FAF9",
  primaryColor: "#003db6",
  secondaryColor: "#131f30",
  backgroundShadow: "rgba(165, 171, 179, 0.16)",
  inputLabel: "#A3B8B0",
  textColor: "#000",
};
