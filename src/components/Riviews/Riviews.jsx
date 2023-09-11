import React from 'react'
import "./Riviews.css"

const Riviews = () => {
  return (
    <div className='rev'>
      <div className="head">
        <h2>Reviews</h2>
      </div>
      <div className="review">
        <div className="revs">
        <img className="rate" src="../src/assets/rating.png" alt="" />
        <div className="smallBox">
        <img className="rm" src="../src/assets/profile.png" alt="" />
          <h4 className='name'>Joy Chakraborty</h4>
          <p className='rev1'>
            Loved the product ...
          </p>
          </div>
        </div>
        <div className="revs">
        <img className="rate" src="../src/assets/rating.png" alt="" />
        <div className="smallBox">
        <img className="rm" src="../src/assets/profile.png" alt="" />
        <h4 className='name'>Jhon Doe</h4>
          <p className='rev1'>
            Product was great ...
          </p>
          </div>
        </div>
        <div className="revs">
        <img className="rate" src="../src/assets/rating.png" alt="" />
        <div className="smallBox">
          <img className="rm" src="../src/assets/profile.png" alt="" />
        <h4 className='name'>Saiman Says</h4>
          <p className='rev1'>
            Say sena also liked that.
          </p>
          </div>
        </div>
        <div className="revs">
        <img className="rate" src="../src/assets/rating.png" alt="" />
        <div className="smallBox">
        <img className="rm" src="../src/assets/profile.png" alt="" />
        <h4 className='name'>PewDiePie</h4>
          <p className='rev1'>
            9 yo are liking this.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Riviews
