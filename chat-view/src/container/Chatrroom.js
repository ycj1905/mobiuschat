import React from 'react';
import axios from 'axios';

const handleClick = () => {
    axios.post('http://localhost:8080/api/createuser', {
        facebookId: 'Matt'
    }).then(
        (s) => {console.log(s)},
        (s) => {console.error(s)}
    )
}
const Chatroom = () => {
    return (
        <div>
            <button onClick={handleClick}>post</button>
        </div>
    )
}

export default Chatroom;