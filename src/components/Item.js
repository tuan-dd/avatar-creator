import React from 'react'

function Item({ nameOfPart, handleClickOption }) {
    return (
        <div className="container-item-part-img">
            <h1>{nameOfPart.id}</h1>
            <ul className="list-part-img-warp">
                {nameOfPart?.map((item, index) => (<li className="item-part-img" key={index} >
                    <button className={item.className}><img
                        className="img-avatar-part"
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