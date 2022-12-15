import styled from "styled-components";
import { colors } from "../../styles/globalStyles";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background-color: ${colors.white};
  box-shadow: 4px 0px 8px 0px ${colors.backgroundShadow};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Loading = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
