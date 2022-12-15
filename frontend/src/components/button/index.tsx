import React, { ReactNode } from "react";
import { ButtonDefault } from "./styles";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: any) => any;
  style?: any;
}

const ButtonComponent = ({ children, onClick, style }: ButtonProps) => {
  return (
    <ButtonDefault variant="contained" onClick={onClick} style={style}>
      {children}
    </ButtonDefault>
  );
};

export default ButtonComponent;
