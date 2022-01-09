import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Learn" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/learn">Counter</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/learn2">{"To do list (create, move, delete)"}</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/learn3">{"To do list (edit open)"}</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/learn4">{"To do list (edit close)"}</NavDropdown.Item>

          {/* <NavDropdown.Divider /> */}
        </NavDropdown>
    </Nav>
    // <div>
    //   <div>
    //     <Link to="/home">Home</Link> |<Link to="/about">About</Link>
    //   </div>
    //   <Outlet/>
    // </div>
  );
}
