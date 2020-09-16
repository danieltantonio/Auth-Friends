import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';

const initFriendForm = {
    name: '',
    age: 18,
    email: ''
}

const Friends = props => {
    const [ friends, setFriends ] = useState([]);
    const [ friendForm, setFriendForm ] = useState(initFriendForm);

    useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
          setFriends(res.data)
      })
      .catch(err => console.log(err));
    }, [setFriends])

    const handleChange = e => {
        const { name, value } = e.target;
        setFriendForm({
            ...friendForm,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const cleanForm = {
            name: friendForm.name.trim(),
            email: friendForm.email.trim(),
            age: parseInt(friendForm.age)
        }

        axiosWithAuth()
        .post('/api/friends', cleanForm)
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            <h3>Become a Friend!</h3>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text' name='name' value={friendForm.name} onChange={handleChange}/>
                <label>Age: </label>
                <input type='number' name='age' min={18} max={90} value={friendForm.age} onChange={handleChange}/>
                <label>Email: </label>
                <input type='email' name='email' value={friendForm.email} onChange={handleChange}/>
                <button>Submit</button>
            </form>
            <hr />
            <h3>Friends:</h3>
            {
                friends.map(friend => {
                    return(
                        <Friend key={friend.id} friend={friend}/>
                    )
                })
            }
        </div>
    )
}

export default Friends;