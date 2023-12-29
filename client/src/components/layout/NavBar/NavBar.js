import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="my-3 my-lg-4 px-4 px-lg-5 flex-column">
      <Navbar.Toggle aria-controls="responsive-nav" />
      <Navbar.Collapse
        id="responsive-nav"
        className="pt-2 pt-lg-3 px-4 px-lg-5"
      >
        <NavDropdown title="SHOP" id="basic-nav-dropdown">
          <NavDropdown.Item as={NavLink} to="/shop/new" className="w-100">
            New
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={NavLink} to="/shop/all">
            All
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={NavLink} to="shop/clothes">
            Shelves
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={NavLink} to="/shop/accessories">
            Cube organizers
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="text-uppercase" as={NavLink} to="/about">
          About us
        </Nav.Link>
        <Nav.Link className="text-uppercase" as={NavLink} to="/contact">
          Contact
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
