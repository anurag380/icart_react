import React from 'react'
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Watch = () => {
  return (
    <div className='wt'>
         <br></br>
    <div className='text-center p-3'>
        <p className='text-danger'>New</p>
        <h1>Watch ULTRA</h1>
        <h3>Adventure awaits.</h3>
        <p>From ₹89900.00*</p>
    </div>
<div className='d-flex align-item-center justify-content-center'>
<img src="https://www.apple.com/in/watch/images/overview/ultra/hero_ultra__bjuq9fkxb9ci_large.jpg" width="80%"/>
</div>
<br></br>
<div className='d-flex align-item-center justify-content-center' style={{background:'black' , color:'white'}}>
<div style={{marginTop:'12%' , marginRight:'10%'}}>
    <h1>Watch SERIES 8</h1>
    <h3>A healthy leap ahead.</h3>
    <p>From ₹45900.00*</p>
</div>
<div className='d-flex'>
<img src="https://www.apple.com/in/watch/images/overview/series-8/tile_s8__ck9oce5a22aa_large.jpg" width="60%"/>
</div>
<br></br>
</div>
<br></br>
<div className='d-flex align-item-center justify-content-center'>
<div style={{marginTop:'12%' , marginRight:'10%'}}>
    <h1>Watch SE</h1>
    <h3>A great deal to love.</h3>
    <p>From ₹29900.00*</p>
</div>
<div className='d-flex'>
<img src="https://www.apple.com/in/watch/home/images/overview/se/tile-watch-se__knji2d25x8qe_large.jpg"/>
</div>
<br></br>
</div>
<br></br>
<br></br>
<h1 className='text-center'>Which Watch is right for you?</h1>
<br></br>
<div className='d-flex text-center justify-content-center'>
<Card style={{ width: '18rem' ,marginRight:"2%" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Apple Watch Series 8</Card.Title>
        <Card.Text>Price</Card.Text>
        <Card.Text>Display size</Card.Text>
        <Card.Text>Always-On Retina display</Card.Text>
        <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
</Card>
<Card style={{ width: '18rem' ,marginRight:"2%" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title>Apple Watch SE</Card.Title>
        <Card.Text>Price</Card.Text>
        <Card.Text>Display size</Card.Text>
        <Card.Text>Retina display</Card.Text>
        <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title>Apple Watch Ultra</Card.Title>
        <Card.Text>Price</Card.Text>
        <Card.Text>Display size</Card.Text>
        <Card.Text>Always-On Retina display</Card.Text>
        <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
</Card>
</div>
<br></br>
    <div className='text-center p-3'>
        <h1>Health app</h1>
        <h4>Now with a healthy dose of updates..</h4>
    </div>
<div className='d-flex align-item-center justify-content-center'>
<img src="https://www.apple.com/in/watch/home/images/overview/health-app/tile_health__exde7a2pwjau_large.jpg"/>
</div>
</div>
  )
}

export default Watch