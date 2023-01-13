import React from 'react'

function Item({ itemOfPart, handleClickOption }) {
    return (
        <div className="itemOfPart">
            <h1>{itemOfPart.id}</h1>
            <ul className="itemOfPart-warp">
                {itemOfPart?.map((item, index) => (<li className="item-part-img" key={index} >
                    <button className={item.className}><img
                        className="part-avatar"
                        src={item.src}
                        alt={item.alt}
                        onClick={handleClickOption}
                        id={item.id} />
                    </button>
                </li>))}
            </ul>
        </div>
    )
}

export default Item