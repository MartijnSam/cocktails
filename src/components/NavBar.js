import React from 'react';
import { NavLink } from 'react-router-dom';



export default function NavBar() {
    return (
      <div className="navbar">
        
        <NavLink exact={true} activeStyle={{color:'red'}} to="/">Home  </NavLink> {""}    
        <NavLink exact={true} activeStyle={{color:'red'}} to="/about">About  </NavLink>{""}
        <NavLink exact={true} activeStyle={{color:'red'}} to="/categories">Categories  </NavLink>{""}
           
        
      </div>
    );
  }