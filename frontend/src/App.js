// files
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Landing/Landing';
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register';
import Layout from './Layout';
// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
function App() {
  axios.defaults.baseURL = "https://things-we-like-api.vercel.app"
  axios.defaults.withCredentials = true;

  return (
    <BrowserRouter>
      <Routes>
          {/* user not logged in yet */}
          <Route path = "/" element = {<Landing />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          {/* end of user not logged in yet */}

          {/* user logged in */}
          <Route element = {<Layout />}>

          </Route>
          {/* end of user logged in */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
