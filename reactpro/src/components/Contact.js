import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <br></br>
            <div className='text-center'>
            <h1 className='text-danger'>CONTACT US</h1><br></br>
            <div className='d-flex text-center justify-content-center mb-4'>
            <img src="https://th.bing.com/th/id/R.ef0060cdd18902117c6cf1547c752e35?rik=%2f39qdD0UTRKF0Q&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fphone-png-phone-png-file-1969.png&ehk=nu7XnV%2bKqiLV3YpguKMwlHuqPmmrXN1azO52CXCu868%3d&risl=&pid=ImgRaw&r=0" width="3%" height="3%"/>
            <h3 style={{marginLeft:"2%"}}>CALL US ON - 7012798288</h3>
            </div>
            <div className='d-flex text-center justify-content-center mb-4'>
            <img src="https://i2.wp.com/tech-ish.com/wp-content/uploads/2015/01/WhatsApp-Logo.png?fit=1150%2C1163&ssl=1" width="3%" />
            <h3 style={{marginLeft:"2%"}}>WHATSAPP - 9995800380</h3>
            </div>
            <div className='d-flex text-center justify-content-center'>
            <img src="https://th.bing.com/th/id/R.fe236b58506b49412826d0193efa1547?rik=JND2PKmC%2fxzB1w&riu=http%3a%2f%2fpngimg.com%2fuploads%2femail%2femail_PNG11.png&ehk=6sNwAjueFilXp3tCehLPbXDGgZgsYZdR7y6dZ3vpSk4%3d&risl=&pid=ImgRaw&r=0" width="3%" />
            <h3 style={{marginLeft:"2%"}}>E-MAIL - <Link to="#" style={{textDecoration:"none"}}>icart@gmail.com</Link></h3>
            </div>
        </div>
    </div>
  )
}

export default Contact