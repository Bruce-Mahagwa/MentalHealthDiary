// files
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Landing/Landing';
import Layout from './Layout';
import DiaryEditor from './Components/Editor/Editor';

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
          <Route path = "/login" element = {<DiaryEditor />} />
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
