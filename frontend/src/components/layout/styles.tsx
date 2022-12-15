import styled from "styled-components";
import { colors } from "../../styles/globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${colors.background};
`;

export const SideBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  z-index: 2;
  max-width: 230px;
  position: relative;
  background-color: ${colors.white};
  box-shadow: 4px 0px 8px 0px ${colors.backgroundShadow};
  padding-top: 40px;

  @media (max-width: 1000px) {
    max-width: 50px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  height: 30px;

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    color: ${colors.primaryColor};
  }
  &:hover {
    background-color: ${colors.gray};
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    padding: 10px;
    justify-content: center;
    .icon {
      margin: 0;
    }
    .text {
      display: none;
    }
  }
`;
