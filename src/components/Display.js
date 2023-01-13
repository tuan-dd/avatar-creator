import React from 'react'
import Gender from './Gender'
import Avatar from './Avatar'
function Display({chooses, handleClickGender, handleClickRandom,setClickSave, handleClickDelete }) {
    return (
        <div className="container-avatar">
            <Gender handleClickGender={handleClickGender} />
            <Avatar chooses={chooses} />
            <div className="select-avatar">
                <button className="btn btn-select" onClick={()=> setClickSave(true)}>Save</button>
                <button className="btn btn-select" onClick={handleClickRandom} >Random Avatar </button>
                <button className="btn btn-select" onClick={handleClickDelete} >Delete</button>
            </div>
            {/* <div className="save-avatar">
                <div className="avatar-stored one"></div>
                <div className="avatar-stored two"></div>
                <div className="avatar-stored three"></div>
            </div> */}
        </div >
    )
}

export default Display