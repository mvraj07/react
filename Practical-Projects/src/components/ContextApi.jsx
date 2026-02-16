import { createContext, useContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BioDetailsContext = createContext();

export const BioDetailsProvider = ({ children }) => {
  const myName = "Raj Mahajan";
  const myAge = 21;
  const output = () => {
    console.log(`My name is ${myName} and i am ${myAge} years old.`);
  };

  return (
    <BioDetailsContext.Provider value={{ myName, myAge, output }}>
      {children}
    </BioDetailsContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useBioDetailsContext = () => {
  const context = useContext(BioDetailsContext);
  return context;
};
