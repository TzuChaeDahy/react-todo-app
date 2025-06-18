import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ApiProvider } from "./contexts/ApiContext.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ApiProvider>
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </ApiProvider>
);
