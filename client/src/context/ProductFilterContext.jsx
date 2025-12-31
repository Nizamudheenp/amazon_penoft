import { createContext, useState } from "react";

export const ProductFilterContext = createContext();

export const ProductFilterProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <ProductFilterContext.Provider value={{ search, setSearch, category, setCategory }}>
      {children}
    </ProductFilterContext.Provider>
  );
};
