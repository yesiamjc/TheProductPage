import React from 'react'
import "./Filters.css"

const Filters = () => {
  return (
    <div className='cont'>
      <div className="catagorey">
          <div className="subheading">
            <h3>Catagorey</h3>
          </div>
          <div className="list">
            <div className="items">
            <input type="checkbox"/>
            <label className="sortP" for="items">Website</label>
            </div>
            <div className="items">
              <input type="checkbox"/>
            <label className="sortP" for="items">Android</label>
            </div>
            <div className="items">
            <input type="checkbox"/>
            <label className="sortP" for="items">IOS</label>
            </div>
            <div className="items">
            <input type="checkbox"/>
            <label className="sortP" for="items">Full Stack</label>
            </div>
          </div>
      </div>
      <div className="sort">
         <div className="subheading">
            <h3>Sort by</h3>
         </div>
         <div className="list">
            <div className="items">
            <input name="sortR" type="radio"/>
            <label className="sortP" for="items">High To Low</label>
            </div>
            <div className="items">
              <input name="sortR" type="radio"/>
            <label className="sortP" for="items">Low To High</label>
            </div>
            <div className="items">
            <input name="sortR" type="radio"/>
            <label className="sortP" for="items">Popularity</label>
            </div>
            <div className="items">
            <input name="sortR" type="radio"/>
            <label className="sortP" for="items">Relevance</label>
            </div>
          </div>
      </div>
      <div className="button">
          <input type="button" className='btn' value={"Apply Filter"} />
      </div>
    </div>
  )
}

export default Filters
