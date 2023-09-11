import React from 'react'
import "./Related.css"

const Related = () => {
  return (
    <div className='rel'>
      <h2 className='head'>Related Products</h2>
      <div className="allCard">
      <div className="cards">
         <img className="imgCard" src="../src/assets/app.jpeg" alt="" />
         <div className="box">
          <h3>Mobile Gaming</h3>
          <h4>₹ 3000</h4>
          <button className='btnH'>Add To Cart</button>
         </div>
      </div>
      <div className="cards">
      <img className="imgCard" src="../src/assets/app.jpeg" alt="" />
         <div className="box">
          <h3>Mobile Gaming</h3>
          <h4>₹ 3000</h4>
          <button className='btnH'>Add To Cart</button>
         </div>
      </div>
      <div className="cards">
      <img className="imgCard" src="../src/assets/app.jpeg" alt="" />
         <div className="box">
          <h3>Mobile Gaming</h3>
          <h4>₹ 3000</h4>
          <button className='btnH'>Add To Cart</button>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Related
