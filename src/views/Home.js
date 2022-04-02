import React from "react";
import "../styled/css/Home.css";
import Logout from "../components/Logout";
import Logo from '../styled/Logo.png'


export default function Home() {


  return (
    <div className="Home">
      <div className="lander">
        <h1>Fuse Clock</h1>
        <h3 className="text-muted">
          A simple way for you and your team to track time for a project
        </h3>
        <img src={Logo} />
      </div>
    </div>
  );
}
