import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

export const useApi = () => {
  const apiContext = useContext(ApiContext);
  if (!apiContext) {
    throw new Error("useApi must be used within an ApiProvider");
  }

  return apiContext;
};
