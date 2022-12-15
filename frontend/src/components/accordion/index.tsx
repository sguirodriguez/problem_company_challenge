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
import ButtonComponent from "../button";
import { colors } from "../../styles/globalStyles";
import { Link } from "react-router-dom";
import { truncateText } from "../../utils/maskAndValidators";
import { useTranslateContext } from "../../context/translate";

interface Props {
  data?: Array<{
    name: string;
    product: string;
    origin: string;
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
                  {truncateText(item?.clientName, 25)}
                </Title>
                <AvatarAndName>
                  <MdShoppingCart />
                  <Title>{item?.productName}</Title>
                </AvatarAndName>
              </Summary>
            </AccordionSummary>

            <DetailsAccordion>
              <DetailsLeft>
                <Title>{accordion_component.initial}</Title>
                <Text>{truncateText(item?.origin, 25)}</Text>
              </DetailsLeft>

              <DetailsRight>
                <Title>{accordion_component.destiny}</Title>
                <Text>{truncateText(item?.destiny, 25)}</Text>
              </DetailsRight>
            </DetailsAccordion>

            <DetailsAccordion>
              <DetailsRight>
                <Link
                  to={`/mapa/${item?.origin}/${item?.destiny}`}
                  style={{ textDecoration: "none" }}
                >
                  <ButtonComponent
                    style={{ maxWidth: 200 }}
                    onClick={() => console.log("")}
                  >
                    <Text style={{ color: colors.white }}>
                      {accordion_component.show}
                    </Text>
                  </ButtonComponent>
                </Link>
              </DetailsRight>
            </DetailsAccordion>
          </Container>
        );
      })}
    </>
  );
};

export default Accordion;
