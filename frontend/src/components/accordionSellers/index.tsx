import React from "react";
import {
  AvatarAndName,
  Container,
  DetailsAccordion,
  DetailsLeft,
  DetailsRight,
  Summary,
  Text,
  Title,
} from "./styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdShoppingCart } from "react-icons/md";
import { truncateText } from "../../utils/maskAndValidators";
import { useTranslateContext } from "../../context/translate";

interface Props {
  data?: Array<{
    name: string;
    email: string;
    document: string;
    destiny: string;
    date: string;
  }>;
}

const Accordion = ({ data }: Props) => {
  const { accordion_component } = useTranslateContext();
  return (
    <>
      {data?.map((item: any, index: any) => {
        return (
          <Container key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Summary>
                <Title className="title-summary">
                  {truncateText(item?.name, 25)}
                </Title>
                <AvatarAndName>
                  <Title>{item?.email}</Title>
                </AvatarAndName>
              </Summary>
            </AccordionSummary>

            <DetailsAccordion>
              <DetailsLeft>
                <Title>{accordion_component.document}</Title>
                <Text>{item?.document}</Text>
              </DetailsLeft>

              <DetailsRight>
                <Title>{accordion_component.address}</Title>
                <Text>{truncateText(item?.address, 25)}</Text>
              </DetailsRight>
            </DetailsAccordion>
          </Container>
        );
      })}
    </>
  );
};

export default Accordion;
