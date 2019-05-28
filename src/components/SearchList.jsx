import React from 'react';

const SearchList = props =>{
  console.log(props)
  return (
      <div>
        <img
          alt="photo"
          src={props.photo}

        />
      </div>

    )
}

export default SearchList
