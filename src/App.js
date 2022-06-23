import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className='d-flex flex-column h-100'>
      <Navbar sticky='top' bg="dark" expand="lg">
        <Container >
          <Navbar.Brand className='text-light' href="/">Chris Lindelof</Navbar.Brand>
          <Navbar.Toggle className='text-light' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className='text-white' target="_blank" href="https://github.com/clindelof">GitHub</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className='text-white' target="_blank" href="https://www.linkedin.com/in/christopher-lindelof">LinkedIn</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex flex-column align-items-center flex-grow-1">
        <div className="p-4">
          <FontAwesomeIcon icon={faGear} size="6x" spin/>
        </div>
        <div>Under Construction</div>
      </div>
    </div>
  );
}

export default App;
