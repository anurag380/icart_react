import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link} from 'react-router-dom';
import API from '../API';


const Phone = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('http://127.0.0.1:8000/home/iphone')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (

    <div className='phn'>
        <p className='text-center bg-warning p-2'>Get up to ₹6000 instant savings on orders over ₹41900 with HDFC Bank credit cards. Plus No Cost EMI from most leading banks.</p>
    <div className='text-center p-3'>
        <p className='text-danger'>New</p>
        <h1>iPhone 14</h1>
        <h3>Big and bigger.</h3>
        <p>With superfast 5G3 , From ₹79900.00*</p>
    </div>
<br></br>
<div className='d-flex align-item-center justify-content-center'>
<img src="https://www.apple.com/in/iphone/home/images/overview/hero/iphone_14_hero__ceub5xriecgi_large.jpg" width="30%"/>
</div>
<br></br>
<div style={{background:'black' , color:'white'}}>
<br></br>
<div className='text-center p-3'>
    <p className='text-danger'>New</p>
    <h1>iPhone 14 Pro</h1>
    <h3>Pro. Beyond.</h3>
    <p>With superfast 5G3 , From ₹129900.00*</p>
</div>
<br></br>
<div className='d-flex align-item-center justify-content-center'>
<img src="https://www.apple.com/v/iphone/home/bk/images/overview/hero/iphone_14_pro_hero__e4ivycyx40k2_large.jpg" width="40%"/>
</div>
</div>
<br></br>
<br></br>
<h1 className='text-center'>Which iPhone is right for you?</h1>
<br></br>
<div className='d-flex text-center justify-content-center'>

{posts.map((post) => {
         return (
            // <div className="post-card" key={post.name}>
            //    <h2 className="post-title">{post.descri}</h2>
            //    <p className="post-body">{post.price}</p>
            //    <p className="post-body">{post.display}</p>
            //    <p className="post-body">{post.camera}</p>
            //    <p className="post-body">{post.battery}</p>
            //    <p className="post-body">{post.image}</p>
            // </div>
        
 <Card style={{ width: '25rem' ,marginRight:"0.5%" }}>
      {/* <Card.Img variant="top" src="url.{post.image}" /> */}
      <Card.Body>
        <Card.Title>{post.name}</Card.Title>
        <Card.Text>
        {post.descri}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>{post.price}</ListGroup.Item>
        <ListGroup.Item>{post.display}</ListGroup.Item>
        <ListGroup.Item>{post.camera}</ListGroup.Item>
        <ListGroup.Item>{post.battery}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
    </Card>

    );
  })}



{/* <Card style={{ width: '25rem' ,marginRight:"0.5%"}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>14</Card.Title>
        <Card.Text>
        A total powerhouse.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Price</ListGroup.Item>
        <ListGroup.Item>Resolution</ListGroup.Item>
        <ListGroup.Item>Camera</ListGroup.Item>
        <ListGroup.Item>Battery</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
    </Card>

<Card style={{ width: '25rem' ,marginRight:"0.5%"}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>13</Card.Title>
        <Card.Text>
        As amazing as ever.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Price</ListGroup.Item>
        <ListGroup.Item>Resolution</ListGroup.Item>
        <ListGroup.Item>Camera</ListGroup.Item>
        <ListGroup.Item>Battery</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
    </Card>

<Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>se</Card.Title>
        <Card.Text>
        Serious power. Serious value.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price</ListGroup.Item>
        <ListGroup.Item>Resolution</ListGroup.Item>
        <ListGroup.Item>Camera</ListGroup.Item>
        <ListGroup.Item>Battery</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link><Button variant="outline-primary"><Link to="/cart" style={{textDecoration:"none" ,color:"black"}}>BUY NOW</Link></Button></Card.Link>
      </Card.Body>
    </Card> */}



</div>
<br></br>
<div className='d-flex text-center mt-3'>
<div style={{background:'black' , color:'white'}}>
    <h1 className='mt-3'>Privacy. That’s iPhone.</h1>
<br></br>
<img src="https://www.apple.com/v/iphone/home/bk/images/overview/why-iphone/privacy_update__cc6s1lqakkk2_large.jpg" width="80%"/>
</div>
<div>
    <h1 className='mt-3'>Switching to iPhone is<br></br> super simple.</h1>
<br></br>
<img src="https://www.apple.com/in/iphone/home/images/overview/why-iphone/ios16__b66zg2a3322q_large.jpg"/>
</div>
</div>
</div>
  )
}

export default Phone