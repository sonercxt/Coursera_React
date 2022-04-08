import About from "./AboutComponent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
// import { useState } from "react";
// import JsonData from "../dishes.json";

const MainComponent = () => {
  // const [product, setProduct] = useState(0);
  return (
    <BrowserRouter>
      {/* <nav className="bg-primary">
        <ul className="d-flex justify-content-start list-unstyled" style={{marginLeft:"230px"}} >
          <li className="my-3" >
            <Link className="text-white text-decoration-none fs-4 " to="/">Home</Link>
          </li>
          <li className="my-3 ms-4">
            <Link  className="text-white text-decoration-none fs-4" to="/AboutComponent">About</Link>
          </li>
          <li className="my-3 ms-4">
            <Link  className="text-white text-decoration-none fs-4" to="/MenuComponent">Menu</Link>
          </li>
          <li className="my-3 ms-4">
            <Link  className="text-white text-decoration-none fs-4" to="/ContactComponent">Contact Us</Link>
          </li>
        </ul>
      </nav> */}

      <Navbar bg="primary" variant="dark" expand="lg">
  <Container>
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ms-5 fs-4 mb-3">
        <Nav.Link className="ms-5" href="/home">Home</Nav.Link>
        <Nav.Link className="ms-3" href="/AboutComponent">About</Nav.Link>
        <NavDropdown className="ms-3" title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item  href="/MenuComponent/0">Uthapizza</NavDropdown.Item>
          <NavDropdown.Item  href="/MenuComponent/1">Zucchipakoda</NavDropdown.Item>
          <NavDropdown.Item  href="/MenuComponent/2">Vadonut</NavDropdown.Item>
          <NavDropdown.Item  href="/MenuComponent/3">Elaicheese Cake</NavDropdown.Item>
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
        <Nav.Link className="ms-3" href="#link">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      <header style={{ backgroundColor: "#9477CB", position:"relative", bottom:"16px" }}>
        <div className="contianer">
          <div className="row py-5">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 text-white">
              <h1>Ristorante Con Fusion</h1>
              <p>
                We take inspiration fromn the Worlds best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses
              </p>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/MenuComponent/0" element={<MenuComponent product={0}/>} />
        <Route path="/MenuComponent/1" element={<MenuComponent product={1}/>} />
        <Route path="/MenuComponent/2" element={<MenuComponent product={2}/>} />
        <Route path="/MenuComponent/3" element={<MenuComponent product={3}/>} />
        <Route path="/AboutComponent" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainComponent;
