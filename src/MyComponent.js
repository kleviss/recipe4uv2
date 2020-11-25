import { useAppContext } from "./context.js";
import React from "react";

const MyComponent = () => {
  const {
    company: [companyState, setCompanyState],
  } = useAppContext();

  React.useEffect(() => {
    setCompanyState((cs) => ({
      ...cs,
      name: "new company name",
    }));
  }, []);

  return <p>{companyState.name}</p>;
};
