import React from 'react';
import axios from 'axios';

const handleRegister = () => {
    axios.post('http://localhost:8080/api/user/register', {
        name: 'Matt',
        pswd: 'pswdpswd',
        gender: 'gender',
        email: 'ycj1665@gmail.com',
        city: 'Taipei',

    }).then(
        (s) => {console.log(s)},
        (s) => {console.error(s)}
    )
}
const handleLogin = () => {
    axios.post('http://localhost:8080/api/user/login', {
        name: 'Matt',
        pswd: 'pswdpswd',
        gender: 'gender',
        email: 'ycj1665@gmail.com',
        city: 'Taipei',

    }).then(
        (s) => {console.log(s)},
        (s) => {console.error(s)}
    )
}
const Chatroom = () => {
    return (
        <div>
            <button onClick={handleRegister}>register</button>
            <button onClick={handleLogin}>login</button>
        </div>
    )
}

export default Chatroom;