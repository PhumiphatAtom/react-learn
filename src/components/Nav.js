import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div>
        <Link to="/home">Home</Link> |<Link to="/about">About</Link>
      </div>
      <Outlet/>
    </div>
  );
}
