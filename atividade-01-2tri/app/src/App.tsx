import { useState } from "react";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";

export default function () {
  const [route, setRoute] = useState("login")

  return <>
    {route == "login" ? <Login setRoute={setRoute} /> : ""}
    {route == "cadastro" ? <Cadastro setRoute={setRoute} /> : ""}
  </>
}