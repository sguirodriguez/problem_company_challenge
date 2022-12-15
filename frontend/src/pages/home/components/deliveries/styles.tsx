import styled from "styled-components";
import { colors, TextDefault } from "../../../../styles/globalStyles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
