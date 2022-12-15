import styled from "styled-components";
import { colors, TextDefault } from "../../styles/globalStyles";

export const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: ${colors.white};
  box-shadow: 4px 0px 8px 0px ${colors.backgroundShadow};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .react-datetime-picker__wrapper {
    height: 50px;
    border-radius: 5px;
    margin-top: 10px;
    border-color: ${colors.grayDark};
    padding-left: 10px;
  }
`;

export const Text = styled(TextDefault)`
  font-size: 1rem;
  color: ${colors.white};
  font-weight: bold;
  text-transform: none;
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
`;
