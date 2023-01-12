import React from 'react'

function Avatar({chooses}) {
    return (
        <div className="display-avatar">
            {chooses?.map((item, index) =>
                (<div className={`avatar-part ${item.className}`} key={item.key} ><img className="img-avatar-part" src={item.src} alt={item.alt} style={{ display: item.display }} /></div>))}
        </div>
    )
}

export default Avatar