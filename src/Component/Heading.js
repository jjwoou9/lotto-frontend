import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

function Heading() {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">로또 당첨되게 해주세요</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Heading;
