import React from "react"

export default function Summary (props) {
    
    return (
        <div>
        <h1>Summary</h1>
        <ul>
            <li>Username: {props.user.username}</li>
            <li>Email: {props.user.email}</li>
            <li>Gender: {props.user.gender}</li>
        </ul>
        </div>
    )

}