import React from 'react'

function Avatar({chooses}) {
    return (
        <div className="display-avatar">
            {chooses?.map((item) =>
                (<div className={`avatar-frame ${item.className}`} key={item.key} ><img className="part-avatar" src={item.src} alt={item.alt} style={{ display: item.display }} /></div>))}
        </div>
    )
}

export default Avatar