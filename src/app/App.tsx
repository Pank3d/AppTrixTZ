import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../pages/Auth/SignUp/SignUp";
import SignIn from "../pages/Auth/SignIn/SignIn";
import Menu from "../pages/Menu/Menu";

function App() {
  return <>
  <Router>
    <div>
      <Routes>
        <Route path="/sign-up" element = {<SignUp/>}/>
        <Route path="/sign-in" element = {<SignIn/>}/>
        <Route path="/" element = {<Menu/>} />
      </Routes>
    </div>
  </Router>
  </>;
}

export default App;
