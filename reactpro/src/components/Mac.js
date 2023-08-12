import React from 'react'
import {Card,Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link} from 'react-router-dom';

const Mac = () => {
  return (
    <div className='mac'>
        <br></br>
        <br></br>
    <div className='text-center p-3'>
        <p className='text-danger'>New</p>
        <h1>MacBook Air</h1>
        <h3>Don’t take it lightly.</h3>
        <p>From ₹119900.00*</p>
    </div>
<br></br>
<div className='d-flex align-item-center justify-content-center'>
<img src="https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_air_m2__r1jrymq4ftea_large.jpg" width="30%"/>
</div>
<br></br>
<div style={{background:'black' , color:'white'}}>
<br></br>
<div className='text-center p-3'>
    <p className='text-danger'>New</p>
    <h1>MacBook Pro 13”</h1>
    <h3>Pro anywhere.</h3>
    <p>From ₹129900.00*</p>
</div>
<br></br>
<div className='d-flex align-item-center justify-content-center'>
<img src="https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_pro_13__e3r46kd69eoi_large.jpg"/>
</div>
</div>
<br></br>
<br></br>
<h1 className='text-center'>Which Mac is right for you?</h1>
<br></br>
<div className='d-flex text-center justify-content-center'>
<Card style={{ width: '25rem' ,marginRight:"1%" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>MacBook Air</Card.Title>
        <Card.Text>
        M1 chip
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Price</ListGroup.Item>
        <ListGroup.Item>Display</ListGroup.Item>
        <ListGroup.Item>CPU</ListGroup.Item>
        <ListGroup.Item>Memory</ListGroup.Item>
        <ListGroup.Item>Battery</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
    </Card>

<Card style={{ width: '25rem' ,marginRight:"1%" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>MacBook Air</Card.Title>
        <Card.Text>
        M2 chip
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Price</ListGroup.Item>
        <ListGroup.Item>Display</ListGroup.Item>
        <ListGroup.Item>CPU</ListGroup.Item>
        <ListGroup.Item>Memory</ListGroup.Item>
        <ListGroup.Item>Battery</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
    </Card>

<Card style={{ width: '25rem',marginRight:"1%" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>MacBook Pro 13”</Card.Title>
        <Card.Text>
        M2 chip
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Price</ListGroup.Item>
        <ListGroup.Item>Display</ListGroup.Item>
        <ListGroup.Item>CPU</ListGroup.Item>
        <ListGroup.Item>Memory</ListGroup.Item>
        <ListGroup.Item>Battery</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
    </Card>

<Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>MacBook Pro
        14” and 16”</Card.Title>
        <Card.Text>
        M1 Pro chip or M1 Max chip
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Price</ListGroup.Item>
        <ListGroup.Item>Display</ListGroup.Item>
        <ListGroup.Item>CPU</ListGroup.Item>
        <ListGroup.Item>Memory</ListGroup.Item>
        <ListGroup.Item>Battery</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
    </Card>
</div>
        <br></br>
    <div className='text-center p-3'>
        <h1><u>Accessories</u></h1>
        <h3>Explore Mac accessories.</h3>
    </div>
<br></br>
<div className='d-flex align-item-center justify-content-center'>
<img src="https://www.apple.com/in/mac/home/images/overview/retail/accessories_tile__cybkm8f034uq_large.jpg" width="100%"/>
</div>

</div>
  )
}

export default Mac