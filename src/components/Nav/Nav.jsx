import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className="nav">
       <div className="left">
            <img className="img" src="../src/assets/img.png" alt="img"/>
            <li className="products"> <h2>Geekyness</h2></li>
            <div className="search">
            <input className="in" type="text" placeholder='Search Here' />
            <input className="out" type="submit" value={"🔍"}/>
             </div>
        </div>
        <div className="right">
          <div className="right-left">
            <h5 className='write'>Cart</h5>
            <img className='photu' src="../src/assets/cart.png" alt="" />
          </div>
          <div className="right-right">
          <h5 className='write'>Log In</h5>
            <img className='photu' src="../src/assets/profile.png" alt="" />
          </div>
        </div>
       </div>
  )
}

export default Nav
