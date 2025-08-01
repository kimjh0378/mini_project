import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Header () {


  const navigate = useNavigate();


  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>🔥오운완짐🔥</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/food')}>🍖식단정보🍖</Nav.Link>
            <Nav.Link onClick={() => navigate('/logo')}>🏋️‍♂️헬스장 머신정보🏋️‍♂️</Nav.Link>
            <Nav.Link onClick={() => navigate('/contest')}>🥇수상경력🥇</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>   
  )
}

export default Header;