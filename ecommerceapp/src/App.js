
import Login from './Component/Auth/Login';
import Registraion from "./Component/Auth/Registraion"
import Home from "./Component/Dashboard/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Registraion/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
   </>
  );
}

export default App;
