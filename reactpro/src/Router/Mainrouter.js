import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import {Nav,NavDropdown} from 'react-bootstrap';
import Home from '../components/Home'
import Phone from '../components/Phone'
import Mac from '../components/Mac';
import Pad from '../components/Pad';
import Watch from '../components/Watch';
import Cart from '../components/Cart';
import Log from '../components/Log';
import Signup from '../components/Signup';
import Contact from '../components/Contact';

const Mainrouter = () => {
  return (
    <div>
        <div className='d-flex align-items-center text-center justify-content-center bg-info'>
      <h1 className='hd mt-3 mb-1' style={{marginRight:"2%",fontSize:'400%',textShadow:'4px 2px white',fontWeight:'700'}}>i-cart</h1>
      <img src="https://th.bing.com/th/id/R.a56d13399ca5fce64c22ea391e352cc9?rik=wzJFcpdGxT3mkA&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f07%2fPNGPIX-COM-Apple-Logo-PNG-Transparent.png.png&ehk=zoe5eIrVTvd3R1h1YzezIboBjskG7p1VNiC3kgWWgOU%3d&risl=&pid=ImgRaw&r=0" width='4%'/>
      </div>
        <Nav className="justify-content-center bg-info p-3">
        <Nav.Item className='nav'>
          <Nav.Link><Link style={{textDecoration:'none',color:"black", fontWeight:"550"}} to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav'>
          <Nav.Link><Link style={{textDecoration:'none',color:"black", fontWeight:"550"}} to="/iphone">iPhone</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav'>
          <Nav.Link><Link style={{textDecoration:'none',color:"black", fontWeight:"550"}} to="/mac">Mac</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav'>
          <Nav.Link><Link style={{textDecoration:'none',color:"black", fontWeight:"550"}} to="/ipad">iPad</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav'>
          <Nav.Link><Link style={{textDecoration:'none',color:"black", fontWeight:"550"}} to="/watch">Watch</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav'>
          <Nav.Link><Link style={{textDecoration:'none',color:"black", fontWeight:"550"}} to="/cart">Cart</Link></Nav.Link>
        </Nav.Item>
        <NavDropdown className='nav' title="More" style={{textDecoration:'none',color:"black", fontWeight:"550", marginLeft:"8%"}}>
        <NavDropdown.Item><Link to="/log" style={{textDecoration:'none',color:"black"}}>Log in</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/sign" style={{textDecoration:'none',color:"black"}}>New user ? Sign Up</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><Link to="/contact" style={{textDecoration:'none',color:"black"}}>Contact us ☺</Link></NavDropdown.Item>
      </NavDropdown>
      </Nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='iPhone' element={<Phone/>}/>
            <Route path='Mac' element={<Mac/>}/>
            <Route path='iPad' element={<Pad/>}/>
            <Route path='Watch' element={<Watch/>}/>
            <Route path='Cart' element={<Cart/>}/>
            <Route path="Log" element={<Log/>}/>
            <Route path="Sign" element={<Signup/>}/>
            <Route path="Contact" element={<Contact/>}/>
        </Routes>
        <br></br>
    <p className='text-center mb-0 bg-info p-2' style={{fontWeight:'500'}}>Copyright © 2023 Apple Inc .  All rights reserved. Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</p>
    </div>
  )
}

export default Mainrouter