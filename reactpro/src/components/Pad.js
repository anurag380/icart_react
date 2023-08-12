import React from 'react'
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Pad = () => {
  return (
    <div className='pad'>
        <br></br>
        <br></br>
<div className='d-flex align-item-center justify-content-center'>
<div className='d-flex'>
<img src="https://www.apple.com/v/ipad/home/cc/images/overview/hero/ipad_hero__d0tgmaq6shm6_large.jpg" width="80%"/>
</div>

<div style={{marginTop:'12%'}}>
    <p className='text-danger'>New</p>
    <h1>iPad</h1>
    <h3>Lovable. Drawable. Magical.</h3>
    <p>From ₹44900.00*</p>
</div>
<br></br>
</div>
<br></br>
<div className='d-flex align-item-center justify-content-center' style={{background:'black' , color:'white'}}>
<div style={{marginTop:'12%' , marginLeft:'12%'}}>
    <p className='text-danger'>New</p>
    <h1>iPad Pro</h1>
    <h3>Supercharged</h3>
    <p>From ₹81900.00*</p>
</div>
<div className='d-flex'>
<img src="https://www.apple.com/in/ipad/home/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg" width="90%"/>
</div>
<br></br>
</div>
<br></br>
<br></br>
<h1 className='text-center'>Which iPad is right for you?</h1>
<br></br>
<div className='d-flex text-center justify-content-center'>
<Card style={{ width: '18rem',marginRight:"0.3%" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>iPad Pro</Card.Title>
        <Card.Text>
        The ultimate iPad experience with the most advanced technology.
        </Card.Text>
        <Card.Text>
            Price
        </Card.Text>
        <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
</Card>
<Card style={{ width: '18rem' ,marginRight:"0.3%"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>iPad Air</Card.Title>
        <Card.Text>
        Serious performance in a thin and light design.
        </Card.Text>
        <Card.Text>
            Price
        </Card.Text>
        <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
</Card>
<Card style={{ width: '18rem' ,marginRight:"0.3%"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>iPad<br></br>
        10th generation</Card.Title>
        <Card.Text>
        The all‑new colourful iPad for the things you do every day.
        </Card.Text>
        <Card.Text>
            Price
        </Card.Text>
        <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
</Card>
<Card style={{ width: '18rem' ,marginRight:"0.3%"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>iPad<br></br>
        9th generation</Card.Title>
        <Card.Text>
        All the essentials in the most affordable iPad.
        </Card.Text>
        <Card.Text>
            Price
        </Card.Text>
        <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>iPad mini</Card.Title>
        <Card.Text>
        The full iPad experience designed to fit in one hand.
        </Card.Text>
        <Card.Text>
            Price
        </Card.Text>
        <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
</Card>
</div>
<br></br>
<br></br>
<h1 className='text-center'><u>iPad essentials</u></h1>
<div className='d-flex text-center mt-5'>
<div>
    <h1 className='mt-3'>Apple Pencil</h1>
    <p>Dream it up. Jot it down.</p>
<br></br>
<img src="https://www.apple.com/v/ipad/home/cc/images/overview/apple_pencil__ekq506kmmys2_large.jpg"/>
</div>
<div>
  <img src="https://www.apple.com/in/ipad/home/images/overview/smart_keyboard_folio__b8j0ydqvjq2q_large.jpg"/>
  <h1 className='mt-3'>Keyboards for iPad</h1>
  <p>Keyboards that have you covered.</p>
</div>
</div>
</div>
  )
}

export default Pad