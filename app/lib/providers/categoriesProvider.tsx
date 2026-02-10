"use client";

import { ReactNode, createContext, useContext } from "react";

import { Category } from "@/app/types";

interface CategoriesContextType {
  categoriesPromise: Promise<Category[]>;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};

export function CategoriesProvider({
  categoriesPromise,
  children,
}: {
  categoriesPromise: Promise<Category[]>;
  children: ReactNode;
}) {
  return (
    <CategoriesContext.Provider value={{ categoriesPromise }}>
      {children}
    </CategoriesContext.Provider>
  );
}
