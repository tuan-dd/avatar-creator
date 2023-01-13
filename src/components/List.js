import React from 'react'

function List({handleClickName,listOfPart}) {
  return (
    <div className="listOfPart">
          {listOfPart.map((item, index) =>
          (<button onClick={handleClickName} key={index} className="btn btn-name-list">
            {item}</button>))}
      </div>
  )
}

export default List