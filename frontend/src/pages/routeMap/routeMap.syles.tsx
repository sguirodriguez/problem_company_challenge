import styled from "styled-components";
import { colors } from "../../styles/globalStyles";

export const Direction = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const GoBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .go-back {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    color: ${colors.primaryColor};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 600px;
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
  }
`;
