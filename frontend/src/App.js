// files
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Landing/Landing';
import Layout from './Layout';
import DiaryEditor from './Components/Editor/Editor';
import Home from './Components/Home/Home';
// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
function App() { 
  axios.defaults.baseURL = "https://mental-health-diary-backend.vercel.app"
  axios.defaults.withCredentials = true;

  return (
    <BrowserRouter>
      <Routes>
          {/* user not logged in yet */}
          <Route path = "/" element = {<Landing />} />
          <Route path = "/login" element = {<DiaryEditor />} />
          {/* end of user not logged in yet */}

          {/* user logged in */}
          <Route element = {<Layout />}>
            <Route path = "/home" element = {<Home />} />
          </Route>
          {/* end of user logged in */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
