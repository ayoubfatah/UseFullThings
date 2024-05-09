import { createContext, useContext, useState } from "react";


//Just change name with what ever u want (notes...)
const NameContext = createContext(); 

function NameProvider({ children }) {
  const [example, setExample] = useState([]);

  return (
    <NameContext.Provider
      value={{
//values u wanna provide to your app 
     example,setExample
      }}
    >
      {children}
    </NameContext.Provider>
  );
}

function useName() {
  const context = useContext(NameContext);
  if (context === undefined)
    throw new Error("NameContext was used outside of the NoteProvider");
  return context;
}

export { NameContext, useName };