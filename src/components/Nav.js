import React from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"
import logo from "../img/logo.svg"

function Nav() {
    return (
        <StyledNav>
        <Logo>
                <img src={logo} alt=""/>
                <h1>G-Nite</h1>
        </Logo> 
        <div className="search">
            <input type="text" name="" id=""/>
            <button>Search</button>
        </div>
        </StyledNav>
    )
}
const StyledNav=styled(motion.nav)`
padding:3rem 5rem;
text-align:center;
input{
    width:30%;
    font-size:1.5rem;
    padding:0.5rem;
    border:none;
    margin-top:1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    
  }
  h1{
      font-size:22px
  }
}
`
const Logo=styled(motion.nav)`
  display: flex;
  justify-content: center;
  padding: 0rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }

`

export default Nav
