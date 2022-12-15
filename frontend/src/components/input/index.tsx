import React from "react";
import { TextField } from "@mui/material";
import { Container } from "./styles";

interface InputProps {
  value?: any;
  onChange?: (event: any) => any;
  label?: string;
  placeholderText?: string;
  style?: any;
  disabled?: boolean;
  ref?: any;
  type?: string;
}

const Input = ({
  value,
  onChange,
  label,
  placeholderText,
  style,
  disabled,
  ref,
  type = "text",
}: InputProps) => {
  return (
    <Container>
      <TextField
        id="outlined-basic"
        variant="outlined"
        className="input"
        label={label}
        value={value}
        onChange={onChange}
        style={style}
        placeholder={placeholderText}
        disabled={disabled}
        ref={ref}
        type={type}
      />
    </Container>
  );
};

export default Input;
