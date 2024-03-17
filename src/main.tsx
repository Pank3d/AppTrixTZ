import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import { AuthProvider } from "./pages/Auth/AuthContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
