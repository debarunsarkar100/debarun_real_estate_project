import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">

{/* Left side */}
<div className="flexColStart f-left">
    <img src="./Images/logo2.png" alt="logo2" width={120} />

    <span className="secondaryText">
        Our Vision is to make all people<br/>
        the best place to live for them.
    </span>
</div>


{/* Right side */}
<div className="flexColStart f-right">
 
  <span className='primaryText'>Information</span>
  <span className='secondaryText'>145 New York, 4571, USA</span>

  <div className="flexCenter f-menu">
    <span>Property</span>
    <span>Services</span>
    <span>Product</span>
    <span>About Us</span>
  </div>


</div>



    </div>
   </section>
  )
}

export default Footer