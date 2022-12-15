import { Accordion, AccordionDetails } from "@mui/material";
import styled from "styled-components";
import { colors, TextDefault } from "../../styles/globalStyles";

export const Container = styled(Accordion)`
  border: 1px solid ${colors.gray};
  box-shadow: none;
  margin-top: 10px;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: none;
  gap: 10px;
`;

export const AvatarAndName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const Title = styled(TextDefault)`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.68rem;
  color: ${colors.textColor};
`;

export const Text = styled(Title)`
  font-weight: 400;
`;

export const DetailsAccordion = styled(AccordionDetails)`
  height: 60px;
  display: flex;
  flex-direction: row;
  padding-top: 0;
  padding-bottom: 0;
`;

export const DetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 2px;
`;

export const DetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 2px;
`;
