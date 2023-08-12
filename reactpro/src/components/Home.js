import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='hm'>      
      <br>
      </br>
      <h1 className='text-center' style={{fontSize:'400%',textShadow:"-4px 2px grey",color:"darkblue"}}>Store. The best way to buy the products you love.</h1>
      <br></br>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.apple.com/v/home/aw/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_large.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.apple.com/in/home/heroes/iphone-14/images/hero_iphone14_preorder__c4g2wjzuugqe_large.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.apple.com/v/home/aw/images/heroes/apple-watch-series-8/hero_apple_watch_series_8__bjc1ok5mkjua_large.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel><br></br>
    <div  className='text-center'>
    <h1 style={{fontSize:'300%' ,textShadow:"2px 1px grey"}}>The best experiences. Only on i-cart.</h1>
    <h4 style={{lineHeight:"40px"}}>Get the most out of the devices you love with high-quality content and services. <br></br>Award-winning series and films, amazing music in spatial audio, super-fun games and more. <br></br>And they’re only on i-cart.</h4>
    </div>
    <br></br>
    <br></br>
    <div className='d-flex' style={{fontSize:"18px" ,textAlign:"center", fontWeight:"800" }}>
    <Link style={{textDecoration:'none'}} to="/mac"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=400&hei=260&fmt=png-alpha&.v=1664664053235" width='50%'/><br></br><br></br>Mac</Link>
    <Link style={{textDecoration:'none'}} to="/iphone"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1661027786072" width='50%'/><br></br><br></br>iPhone</Link>
    <Link style={{textDecoration:'none'}} to="/ipad"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437" width='50%'/><br></br><br></br>iPad</Link>
    <Link style={{textDecoration:'none'}} to="/Watch"><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202209_GEO_IN?wid=400&hei=260&fmt=png-alpha&.v=1661796454107" width='50%'/><br></br><br></br>Watch</Link>
    </div>
    <br></br>
    <br></br>
    <div className='d-flex text-center' style={{background:"black"}}>
      <div>
      <img src="https://i.pinimg.com/736x/22/ab/df/22abdf4ffda64928dd5859637b15d94e.jpg" width="60%"/></div>
      <div>
        <br></br>
        <h1 style={{fontSize:'300%', color:"red"}}>Enjoy so much more at iStore</h1><br></br>
        <h4 style={{color:"white"}}>At i-cart we aim to provide our customers with a seamless shopping experience, <br></br>
        allowing you to pick and purchase your favourite Apple products and accessories wherever you are.<br></br>
        From contracts to iCare and Trade ins to Technical support, iStore is where you need to get your next Apple product.</h4>
      </div>
    </div>
    <br></br>
    <br></br> 
    <div className='d-flex text-center justify-content-center mt-5'>
      <div>
      <img src="https://www.pinclipart.com/picdir/big/227-2271788_package-delivery-clipart.png" width="13%"/>
      <h4>GET FREE DELIVERY</h4>
      <p>Get free delivery direct to your door.</p>
    </div>
    <div>
      <img src="https://cdn.onlinewebfonts.com/svg/img_574527.png" width="10%"/>
      <h4>WAYS TO BUY</h4>
      <p>Choose the way that's right for you.</p>
    </div><div>
      <img src="https://th.bing.com/th/id/R.252742bfe3ca40ee64669b16df33a9b4?rik=LnvmLqeSqjOOTA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_208955.png&ehk=8vgoqq1tHV%2bmWHsUiEutRChjbLAXw2JQLV6XNKYerTM%3d&risl=&pid=ImgRaw&r=0" width="13%"/>
      <h4>GET HELP BUYING</h4>
      <p>Have a question ? Call a specialist or chat online ,<br></br> Call <Link>0008000401966</Link></p>
    </div>
    </div>
    <br></br>
    <div className='text-center'>
      <h1 style={{fontSize:'300%' ,textShadow:"2px 2px grey"}}>Your friendly Apple Premium Reseller</h1>
      <h5 style={{lineHeight:"40px"}}>Our first store opened in V&A Waterfront in 2005 and since then we've grown to 25 retail stores<br></br> which are conveniently situated across the country as well as an online store, making i-cart the largest APR in Southern Africa.</h5>
    </div>
    <br></br>
    <br></br>
    <div className='text-center'>
      <h1 style={{fontSize:'300%' ,textShadow:"2px 2px grey"}}>Our Services</h1>
      <h5 style={{lineHeight:"40px"}}>i-cart offers the best possible Apple experience through expert advice and a wide range of exclusive services<br></br> 
      that ensure you get the most out of your Apple products for your personal, business and education purchases and upgrades.</h5>
    </div>
    <div className='d-flex text-center justify-content-center mt-5'>
    <div>
      <img src="https://www.istore.co.za/media/wysiwyg/AboutUs/icare-about.png" width="30%"/>
      <p>iCare Plus Extended <br></br>Warranty product</p>
    </div>
    <div>
      <img src="https://www.istore.co.za/media/wysiwyg/AboutUs/free_support-about.png" width="30%"/>
      <p>Free Tech <br></br>Support</p>
    </div><div>
      <img src="https://www.istore.co.za/media/wysiwyg/AboutUs/repair-about.png" width="30%"/>
      <p>Online Repair<br></br> Service</p>
    </div><div>
      <img src="https://www.istore.co.za/media/wysiwyg/AboutUs/verified-about.png" width="30%"/>
      <p>Apple Certified <br></br>Repairs</p>
    </div>
    </div>

    </div>
  )
}

export default Home