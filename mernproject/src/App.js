import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Filter from "./Component/FilterExample/Filter";
import Home from "./Component/Home";
import TourPlan from "./Component/DataBindExample/TourPlan";
import FormBasic from "./Component/Form/FormBasic";


function App() {

  return (
   <>
 <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/databinding" element={<TourPlan />}/>
          <Route path="/filter-example" element={ <Filter />}/>
          <Route path="/form-basic" element={<FormBasic />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
 
     
      
   </>
  );
}

export default App;
