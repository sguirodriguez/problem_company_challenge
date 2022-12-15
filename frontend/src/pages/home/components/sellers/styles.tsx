import styled from "styled-components";
import { colors, TextDefault } from "../../../../styles/globalStyles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputAutoComplete = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${colors.grayDark};
  outline: none;
  font-size: 1rem;
  padding-left: 15px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const Text = styled(TextDefault)`
  font-size: 1rem;
  color: ${colors.white};
  font-weight: bold;
  text-transform: none;
`;

export const Loading = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
