import React from 'react';
import { Button, Carousel } from 'antd';
import Header from '../Const/Header';
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import image7 from "../Images/image7.jpg";
import mall from "../Images/mall.webp"; 
import temp from "../Images/website.webp";
import cart from "../Images/cart.jpeg";
import signup from "../Images/signup.avif";
import { Container, Row, Col, Card } from 'react-bootstrap';
import  Footer  from "../Const/Footer.js";
const HomePage = () => (
  <div style={{backgroundColor:"#2E2A50", height:"600px"}}>
   
    <Header />
    
    <div className="container-fluid p-0" style={{ position: 'relative' }}>
      {/* Carousel Component */}
      <Carousel autoplay autoplaySpeed={3000}>
        <div>
          <div className="d-flex justify-content-center" style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              src={image1}
              alt="Image 1"
              className="img-fluid" // Bootstrap's responsive image class
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        {/* Repeat for other carousel images */}
        <div>
          <div className="d-flex justify-content-center" style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              src={image2}
              alt="Image 2"
              className="img-fluid"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center" style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              src={image3}
              alt="Image 3"
              className="img-fluid"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center" style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              src={image4}
              alt="Image 4"
              className="img-fluid"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center" style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              src={image5}
              alt="Image 5"
              className="img-fluid"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center" style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
            <img
              src={image6}
              alt="Image 6"
              className="img-fluid"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </Carousel>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%', // Adjust height to cover the entire carousel
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Content on top of the images */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          color: 'white',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bolder',
          padding: '0 20px',
        }}
      >
        <h1>Welcome To Mallify</h1>
        <p>Where Shopping Meets Convenience</p>

        <button
          style={{
            backgroundColor: '#131120',
            marginTop: '20px',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            fontSize: '29px',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s, box-shadow 0.3s',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
          }}
          onMouseEnter={e => {
            e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.6)';
          }}
          onMouseLeave={e => {
            e.target.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.3)';
          }}
        >
          Explore
        </button>
      </div>
    </div>
    
    <div className="container-fluid d-flex justify-content-center py-5">
  <div
    className="card text-white rounded-3 "
    style={{ width: '100%', maxWidth: '1200px', height: '355px',backgroundColor:"#131120" }}
  >
    <div className="card-body">
      <h1 className="fw-bold ms-4 mt-4" style={{ fontSize: '2.5rem' }}>
        Discover the Latest Trends
      </h1>
      <div className="row mt-5 ms-4">
      <div className="col-lg-5 col-12 mb-4 mb-lg-0 pe-lg-5">
          <h3 className="fw-bold mb-3">Stay Up-to-Date</h3>
          <p style={{ fontSize: '19px' }}>
            Discover the newest styles and trends in fashion, tech, and more. Our curated
            selection ensures you're always ahead of the curve.
          </p>
        </div>
        <div className="col-lg-5 col-12" style={{ marginLeft: '30px' }}>
          <h3 className="fw-bold mb-3" >Explore Our Collections</h3>
          <p style={{ fontSize: '19px' }}>
            Browse our curated collections, featuring hand-picked items from top brands and emerging designers.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div style={{ backgroundColor: "#131120",height:"500px",display:"flex", alignItems:"center",alignContent:"center",justifyContent:"center"}}>
   
    <img src={temp} style={{height:"390px",width:"420px",marginLeft:"20px",borderRadius:"20px"}}></img>

   
 
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "200px" }}>
  <h1
    style={{
      color: "white",
      marginBottom: "30px",
      width: "100px",
      fontWeight:"bold"
    }}
  >
    Personalized Recommendations
  </h1>
  
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    {/* First card */}
    <div
      className="card"
      style={{
        width: "300px", 
        height: "200px",
        backgroundColor: "#273157",
        color: "white",
        borderRadius: "20px",
        marginRight: "20px", 
      }}
    >
     <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "10px" }}>
  <h4 style={{ fontWeight: "bold" }}>Tailored to You</h4>
  <p>Enjoy a personalized shopping experience based on your interests, browsing history, and past purchases.</p>
</div>
    </div>

   
    <div
      className="card"
      style={{
        width: "300px", 
        height: "200px", 
        backgroundColor: "#273157",
        color: "white",
        borderRadius: "20px",
      }}
    >
    <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "10px" }}>
        <h4 style={{fontWeight:"bold"}}>Discover Hidden Gems</h4>
        <p>Uncover new products you'll love based on your unique taste and style.</p>
        </div>
    </div>
  </div>
</div>
  </div>

  <div style={{backgroundColor:"#131120", height:"800px", display:"flex", justifyContent:"center", alignItems: "center"}}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%",marginBottom:"200px" }}>
    
    {/* Cards Section */}
    <div style={{marginLeft:"100px"}}>
      <h1 style={{ color: "white", width: "490px", marginTop:-50, fontWeight:"bolder" }}>
        Explore Shops All Over the Mall
      </h1>
      <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "10px" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          
          {/* First Card */}
          <div
            className="card"
            style={{
              width: "300px", 
              height: "200px", 
              backgroundColor: "#131120",
              color: "white",
             marginLeft:-14,
            }}
          >
            <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: 0 }}>
              <i className="bi bi-shop-window" style={{ fontSize: "50px", color: "#8C98CA", marginBottom: "10px" }}></i>
              <h4 style={{ fontWeight: "bold" }}>Shop by Category</h4>
              <p>Browse by category or search for specific items from top brands and independent shops.</p>
            </div>
          </div>

          {/* Second Card */}
          <div
            className="card"
            style={{
              width: "300px", 
              height: "200px", 
              backgroundColor: "#131120",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: 0 }}>
              <i className="bi bi-crosshair" style={{ fontSize: "50px", color: "#8C98CA", marginBottom: "10px" }}></i>
              <h4 style={{ fontWeight: "bold" }}>Find What You Need</h4>
              <p>Discover the best deals and promotions across a wide range of stores.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <div style={{ flexShrink: 0 }}>
      <img 
        src={mall} 
        style={{
          height: "450px", 
          width: "450px", 
          borderRadius: "10px",
          marginRight:"200px"
        }} 
      />
    </div>
  </div>
</div>


<div style={{backgroundColor:"#131120", height:"500px", display:"flex", justifyContent:"center", alignItems: "center"}}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%", marginBottom: "200px" }}>
    
    {/* Cards Section */}
    <div style={{ marginLeft: "100px" }}>
      <h1 style={{ color: "white", width: "490px", marginTop: -50,fontWeight:"bolder" }}>
        Add to Cart
      </h1>
      <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "10px" }}>
        
        {/* Container for cards */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
          {/* First Card */}
          <div
            className="card"
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "#131120",
              color: "white",
              marginBottom: "10px", // Adds space between the cards
            }}
          >
            <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: 0 }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <i className="bi bi-1-square-fill" style={{ fontSize: "50px", color: "#8C98CA", marginRight: "10px" }}></i>
                <h4 style={{ fontWeight: "bold", margin: 0 }}>Save for Later</h4>
              </div>
              <p>Create a wishlist of items you love, so you can purchase them later when you're ready.</p>
            </div>
          </div>

          {/* Second Card */}
          <div
            className="card"
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "#131120",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: 0 }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <i className="bi bi-2-square-fill" style={{ fontSize: "50px", color: "#8C98CA", marginRight: "10px" }}></i>
                <h4 style={{ fontWeight: "bold", margin: 0 }}>Review and Edit</h4>
              </div>
              <p>Discover the best deals and promotions across a wide range of stores.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div style={{ flexShrink: 0 }}>
      <img 
        src={cart} 
        style={{
          height: "450px", 
          width: "450px", 
          borderRadius: "10px",
          marginRight: "200px",
        }} 
      />
    </div>

  </div>
</div>

    
<div style={{backgroundColor:"#131120", height:"700px", display:"flex", justifyContent:"center", alignItems: "center"}}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%", marginBottom: "200px" }}>
    
    {/* Cards Section */}
    <div style={{ marginLeft: "100px" }}>
  <h1 style={{ color: "white", width: "490px", marginTop: -50,fontWeight:"bolder" }}>
    Secure Sign-Up and Login
  </h1>
  <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "10px" }}>
    
    {/* Container for cards */}
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
      {/* First Card */}
      <div
        className="card"
        style={{
          width: "330px",
          height: "200px",
          backgroundColor: "#131120",
          color: "white",
          marginBottom: "10px", // Adds space between the cards
        }}
      >
        <div className="card-body" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", marginTop: 0 }}>
          {/* Icon to the left */}
          <i className="bi bi-arrow-down-square-fill" style={{ fontSize: "50px", color: "#8C98CA", marginRight: "15px",marginTop:-7 }}></i>
          
          {/* Column for h4 and p */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ fontWeight: "bold", margin: 0 }}>Create an Account</h4>
            <p style={{ marginTop: "5px" }}>
              Enjoy a seamless shopping experience with personalized recommendations, order history, and more.
            </p>
          </div>
        </div>
        </div>
 


          {/* Second Card */}
          <div
            className="card"
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "#131120",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <div className="card-body" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", marginTop: 0 }}>
          {/* Icon to the left */}
          <i className="bi bi-arrow-down-square-fill" style={{ fontSize: "50px", color: "#8C98CA", marginRight: "15px",marginTop:-7 }}></i>
          
          {/* Column for h4 and p */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ fontWeight: "bold", margin: 0 }}>Secure Login</h4>
            <p style={{ marginTop: "5px" }}>
            Rest assured your information is safe with our secure login and encrypted data protection.
            </p>
          </div>
        </div>
        </div>
 
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div style={{ flexShrink: 0 }}>
      <img 
        src={signup} 
        style={{
          height: "450px", 
          width: "450px", 
          borderRadius: "10px",
          marginRight: "200px",
        }} 
      />
    </div>

  </div>
</div>


<div style={{ backgroundColor: "white", height: "570px", display: "flex", justifyContent: "center", alignItems: "center",marginTop:"100px" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80%", marginBottom: "200px" }}>
       
        <Container className="my-5">
        <h1 style={{fontWeight:"bolder", marginBottom:"70px"}}>Track Your Orders</h1>
          {/* Top Layer */}
          <Row className="justify-content-start align-items-center">
            <Col xs={3} sm={2} className="text-center">
              <Card className="text-white border-0 shadow-lg" style={{ backgroundColor: "#080E27" }}>
                <Card.Body>
                  <h4>1</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={9} sm={10} style={{color:"#080E27"}}>
              <h4 style={{fontWeight:"bolder"}}>Order Placed</h4>
            </Col>
          </Row>

          {/* Middle Layer */}
          <Row className="justify-content-start align-items-center mt-3">
            <Col xs={5} sm={3} className="text-center">
              <Card className="text-white border-0 shadow-lg" style={{ backgroundColor: "#080E27" }}>
                <Card.Body>
                  <h4>2</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={7} sm={9} style={{color:"#080E27"}}>
            <h4 style={{fontWeight:"bolder"}}>Order Processing</h4>
            </Col>
          </Row>

          {/* Bottom Layer */}
          <Row className="justify-content-start align-items-center mt-3">
            <Col xs={6} sm={4} className="text-center">
              <Card className="text-white border-0 shadow-lg" style={{ backgroundColor: "#080E27" }}>
                <Card.Body>
                  <h4>3</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={8} style={{color:"#080E27"}}>
            <h4 style={{fontWeight:"bolder"}}>Order Shipped</h4>
            </Col>
          </Row>

          {/* Largest Layer */}
          <Row className="justify-content-start align-items-center mt-3">
            <Col xs={7} sm={5} className="text-center">
              <Card className="text-white border-0 shadow-lg" style={{ backgroundColor: "#080E27" }}>
                <Card.Body>
                  <h4>4</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={5} sm={7} style={{color:"#080E27"}}>
            <h4 style={{fontWeight:"bolder"}}>Order Delivered</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

    <div style={{ display: "flex", justifyContent: "center", height: "400px",  marginBottom:"90px", }}>
    <div
      className="card"
      style={{
        width: "1200px",
        height: "375px",
        backgroundColor: "#131120",
        color: "white",
        borderRadius: "20px",
      
      }}
    >
      <div className="card-body">
        <h1 style={{ display: "flex", justifyContent: "flex-start", fontWeight: "bold", marginLeft:"60px", marginTop:"40px" }}>
        Exclusive Member Benefits        </h1>
        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "40px",marginLeft:"60px" }}>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "400px", marginRight:"130px" }}>
            <h1 style={{ fontWeight: "bolder", marginBottom: "5px" }}>10%</h1>
            <h4 style={{fontWeight:"bold"}}>Exclusive Discounts</h4>
            <p style={{ marginTop: "5px", fontSize:"18px" }}>
            Enjoy member-only discounts and promotions on select products.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "420px"}}>
          <h1 style={{ fontWeight: "bolder", marginBottom: "5px" }}>Early Access</h1>
          <h4 style={{fontWeight:"bold"}}>Special Access</h4>
            <p style={{ marginTop: "5px", fontSize:"18px",marginLeft:"50px" }}>Get first dibs on new products and exclusive sales before they are released to the public.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 
<Footer></Footer>
  
  </div>
  
);

export default HomePage;
