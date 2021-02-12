import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      title: 'Taylor Gonzales',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Taylor Gonz',
        subTitle: 'Web Developer / Photographer',
        text: 'Check out my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'let\'s Chat!'
      }
    }
  }
 render() { 
   return (
    <Router>
      <Container className="p-0" fluid={true}>
      
      <Navbar className='nav-color Navbar' bg="transparent" expand="lg">
        <Navbar.Brand>Taylor Gonzales</Navbar.Brand>
        <Navbar.Toggle className='border-0' aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className='ml-auto'>
            <Link className="font-weight-bolder nav-link mr-4" to='/'> Home</Link>
            <Link className="font-weight-bolder nav-link mr-4" to='/about'> About</Link>
            <Link className="font-weight-bolder nav-link" to='/contact'> Contact</Link>

          </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}  text={this.state.home.text} />} />
      <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>} />
      <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>} />
      
      <Footer/>

      </Container>
    </Router>
  );
  }
}

export default App;
