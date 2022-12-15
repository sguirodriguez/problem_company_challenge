import React, { SetStateAction, useState } from "react";
import HomeScreen from "./home.screen";

const HomeController: React.FC = () => {
  const [tabValue, setTabValue] = useState<SetStateAction<string>>("sellers");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const handlers: any = {
    handleChange,
    tabValue,
  };

  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
