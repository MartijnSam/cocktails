import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Navigation() {

  const history = useHistory()

const [searchText, setSearchText] = useState("")

const navigateToSearch = () => {
  const routeParam = encodeURIComponent(searchText);
  history.push(`/search/${routeParam}`)
}

    return (
      <NavBar bg="light" expand="lg">
        <NavBar.Brand href="#home">Cocktails!!!</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        
        <Nav.Link><NavLink exact={true} activeStyle={{color:'red'}} to="/">Home  </NavLink></Nav.Link>   
        <Nav.Link><NavLink exact={true} activeStyle={{color:'red'}} to="/about">About  </NavLink></Nav.Link>
        <Nav.Link><NavLink exact={true} activeStyle={{color:'red'}} to="/categories">Categories  </NavLink></Nav.Link>
        </Nav>
        <Form inline>
          <input value={searchText} onChange={e =>setSearchText(e.target.value)} placeholder="search for a drink"/>
          <Button variant="outline-success" onClick={navigateToSearch}>Search</Button>
          </Form>
          </NavBar.Collapse>
      </NavBar>
    );
  }