
import React from "react";
import "../styled/Home.css";
import Logout from "../components/Logout";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Fuse Clock</h1>
        <p className="text-muted">A simple way for you and your team to track time for a project</p>
      </div>
      <Logout>Where am i</Logout>
    </div>
  );
}