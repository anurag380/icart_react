import React,{useState} from 'react'
import { Button,Card } from 'react-bootstrap'
import { Outlet,Link } from 'react-router-dom'

const Cart = () => {
  var [count,setcount]=useState(1)
    const incre=()=>{
        setcount(count+1)
    }
    const decre=()=>{
      if(count>0)
        setcount(count-1)
      else
        setcount(0)
    }
  return (
    <div className='cr'>

        {/* <br></br>
        <div className='text-center'>
        <h1 style={{color:'red'}}>YOUR i-cart IS EMPTY</h1>
        <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png" width='20%'/>
        <br></br>
        <h2>Please log in to your accout for happy shoping</h2>
        <br></br>
        <hr></hr>
        </div> */}

        <div className='d-flex text-center mt-4' style={{alignItems:"center" , justifyContent:"center"}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Item Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h5 className='mt-3 text-secondary'><u>Quantity</u></h5>
        <div className='d-flex text-center justify-content-center mb-3'>
          <Button variant="light" onClick={decre}>-</Button>
          <h3 style={{color:"black" , marginLeft:"3%", marginRight:"3%"}}>{count}</h3>
          <Button variant="light" onClick={incre}>+</Button>
        </div>
        <Button variant="success">BUY</Button>
      </Card.Body>
    </Card>

        </div>

    </div>
  )
}

export default Cart