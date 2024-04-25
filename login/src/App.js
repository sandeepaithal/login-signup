import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminLogin from "./components/Adminlogin"; // Corrected import
import Employeehomepage from "./components/Employeehomepage";
import Employeesignup from "./components/Employeesignup";
import Adminsignup from "./components/Adminsignup";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHomePage from "./components/AdminHomePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employeehomepage" element={<Employeehomepage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path='/employeesignup' element={<Employeesignup/>}/>
          <Route path='/adminsignup' element={<Adminsignup/>}/>
          <Route path='/adminhomepage'element={<AdminHomePage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
