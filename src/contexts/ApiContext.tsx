import { createContext } from "react";

interface ApiContextType {
  url: string;
}

export const ApiContext = createContext<ApiContextType | null>(null);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const apiUrl = "http://localhost:3000";

  const context: ApiContextType = {
    url: apiUrl,
  };

  return <ApiContext.Provider value={context}>{children}</ApiContext.Provider>;
};
