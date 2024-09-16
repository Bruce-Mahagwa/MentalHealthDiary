// dependencies
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import axios from "axios";

const Layout = () => {
  // protected routes
  const [isAuth, setIsAuth] = useState("");
  const [error, setError] = useState("");
  const { user } = useSelector(state => state.users);
  const name = user?.userName;

  useEffect(() => {
    axios.get("/get-token").then((res) => {
      setIsAuth(res.data.token);
    }).catch((e) => {
      setError(e.message);
    })
  }, [isAuth])
  
  if (name || isAuth) {
    return (
      <>
        <Outlet />
      </>
    )
  }
  if (!isAuth && !name) {
    return window.location.href = "/";
  }
  if (error) {
    return window.location.href = "/";
  }
}
export default Layout;