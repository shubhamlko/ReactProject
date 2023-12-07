
import './App.css';
import Main from './Component/Main';
import Navbar from './Component/Pages/Navbar';
import Registration from './Component/Auth/Registration';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Auth/Login';
import Cart from './Component/Pages/Cart';
import PageNotFound from './Component/Pages/PageNotFound';
import Protected from './Component/Routes/Protected';

function App() {
  return (
   <>
    <Navbar />

   <div className='container'>
   
       
      <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Main />} />
            <Route path="*" element={<PageNotFound />} />
      </Routes>

    
    </div>
   
       
   
   </>
  );
}

export default App;
