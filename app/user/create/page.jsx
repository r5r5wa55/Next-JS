'use client'
import React from 'react'



export default function create() {


    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            "fname": event.target.fname.value,
            "lname": event.target.lname.value,
            "username": event.target.username.value,
            "password": "1234",
            "email": "cat.chat@melivecode.com",
            "avatar": "https://www.melivecode.com/users/cat.png"
        }
        fetch(`https://www.melivecode.com/api/users/create`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)

        }).then(res => res.json()).then(result => {
            if(result.status === 'ok'){
                window.location.href = '/user'
            }
            console.log(result);
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <input
                        type='text'
                        placeholder='First Name'
                        id='fname'
                        name='fname'
                    />
                </div>
                <div className="">
                    <input
                        type='text'
                        placeholder='Last Name'
                        id='lname'
                        name='lname'
                    />
                </div> <div className="">
                    <input
                        type='text'
                        placeholder='UserName'
                        id='username'
                        name='username'
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
