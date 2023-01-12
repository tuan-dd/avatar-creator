import React from 'react'

function List({handleClick,listOfPart,handleClickRandom}) {
  return (
    <div className="container-avatar-list">
          {listOfPart.map((item, index) =>
          (<button onClick={handleClick} key={index} className="btn btn-name-list">
            {item}</button>))}
      </div>
  )
}

export default List