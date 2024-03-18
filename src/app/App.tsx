// App.tsx

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Menu from "../pages/Menu/Menu";
import SignUp from "../pages/Auth/SignUp/SignUp";
import SignIn from "../pages/Auth/SignIn/SignIn";
import { useAuth } from "../pages/Auth/AuthContext";
import { useEffect } from "react";

const App = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    console.log("Is authenticated:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Menu /> : <Navigate to="/sign-in" />}
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
