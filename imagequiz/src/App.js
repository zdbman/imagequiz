
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
//import { Col } from 'react-bootstrap';


function App() {
  const [username, setUsername] = useState('');
  let userLoggedInHnadler = (Username) => {
    setUsername(Username);
    console.log("test")
  }

  return (
    <HashRouter>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <Menu user={username} />
          </Col>
        </Row>

        <Routes>
          <Route exact path='/register' element={<Register />}>

          </Route>
          <Route exact path='/login' element={<Login userLoggedIn={userLoggedInHnadler} />}>

          </Route>
          <Route exact path='/' element={<Home />}>

          </Route>
        </Routes>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
