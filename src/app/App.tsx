import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Menu from "../pages/Menu/Menu";
import { useAuth } from "../pages/Auth/AuthContext";
import SignUp from "../pages/Auth/SignUp/SignUp";
import SignIn from "../pages/Auth/SignIn/SignIn";

function App() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated)

  
  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Menu />} />
        ) : (
          <>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/sign-in" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
