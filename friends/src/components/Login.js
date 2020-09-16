import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initForm = {
    username: '',
    password: ''
}

const Login = props => {
    const [login, setLogin] = useState(initForm);
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', login)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/Friends');
        })
        .catch(err => console.log(err));
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type='text' name="username" value={login.username} onChange={handleChange}/>
                <label>Password: </label>
                <input type='password' name="password" value={login.password} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;