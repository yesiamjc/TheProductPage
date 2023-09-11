import React from 'react'
import Nav from '../Nav/Nav'
import Filters from '../Filters/Filters'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'
import Related from '../Related/Related'
import Riviews from '../Riviews/Riviews'
import "./ProductPage.css"

const ProductPage = () => {
  return (
    <div className='container'>
        <div className="navbar">
        <Nav />
        </div>
        <div className="main">
            <div className="filters">
              <Filters />
            </div>
            <div className="products">
               <Products />
               <Products />
               <Products />
               <Products />
               <Products />
            </div>
        </div>
        <div className="related">
          <Related />
        </div>
        <div className="rivews">
           <Riviews />
        </div>
        <div className="footer">
           <Footer />
        </div>
    </div>
  )
}

export default ProductPage
