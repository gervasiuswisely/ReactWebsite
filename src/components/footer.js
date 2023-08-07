import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Footer = () => {
  return (
    <Navbar className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Kick.World</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Copyright Alright Reserved 2023</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Footer;
