import React from 'react';
import './list.css'

const SearchList = props =>{
  console.log(props)
  return (
        <div className="col-sm-3">
          <div className="card-image">
            <img src={props.photo} />
          </div>
      </div>

    )
}

export default SearchList
