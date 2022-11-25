import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import logo from './images/logo.png'
import Home from './components/Home';
import Invest from './components/Invest';
import Team from './components/Team';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" variant="dark" expand="lg">
      <img src={logo} className="logo" alt="logo" />
            <Container>
              <Link to="/">
                <Navbar.Brand>Home</Navbar.Brand>
              </Link> 
               <Link to="/invest">
                <Navbar.Brand>What we Invest in?</Navbar.Brand>
              </Link>  
              <Link to="/team">
                <Navbar.Brand>Team</Navbar.Brand>
              </Link>
              <Link to="/contact">
                <Navbar.Brand>Contact</Navbar.Brand>
              </Link>
            </Container>
          </Navbar>
      </header>
      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route path='/invest' element={<Invest />}  />
        <Route path='/team' element={<Team />}  />
        <Route path='/contact' element={<Contact />}  />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
