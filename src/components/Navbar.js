import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; 
import { ButtonContainer } from "./Button";
import "../App.css";


export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <div className="logo">
          <img src=
          "https://i.ibb.co/998V6Ff/iconlogocrop.png" width="100px" alt="store" className="navbar-brand"/>
          <h1>Winter Garden</h1>
          </div>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <p>GAME</p>
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/About" className="nav-link">
              <p> ABOUT</p>
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/Contact" className="nav-link">
               <p> CONTACT</p>
            </Link>
          </li>
        </ul>

        <Link to="/SignUp" className="ml-auto">
          <div className="icon">
            <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-plus" />
            </span>
            
            sign up
            
          </ButtonContainer>
          </div> 
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: #210002 !important;
  max-height: 100px;
  font-family:'Alegreya Sans SC'; 
  font-color: var(--mainYellow)!important;
  .nav-link {
    color: var(--mainGreen) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
