import React from 'react'

function Gender({handleClickGender}) {
  return (
    <div className="gender-avatar">
                <details>
                    <summary>Gender</summary>
                    <ul>
                        <li><button className="btn btn-gender-avatar" onClick={handleClickGender}>Male</button></li>
                        <li><button className="btn btn-gender-avatar" onClick={handleClickGender} >Female</button></li>
                        <li><button className="btn btn-gender-avatar" onClick={handleClickGender} >Other</button></li>
                    </ul>
                </details>
            </div>
  )
}

export default Gender