'use client'
import React, { useEffect, useState } from 'react'



export default function editId({ params }) {
    const [user, setUser] = useState({
        "id": 0,
        "fname": "",
        "lname": "",
        "username": "",
        "avatar": ""
    })
    console.log(user);
    useEffect(() => {
        fetch(` https://www.melivecode.com/api/users/${params.id}`).then(res => res.json()).then(result => {
            setUser(result.user)

        })

    }, [])


    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`https://www.melivecode.com/api/users/update`,{
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(result => {
            console.log(result);
            window.location.href='/user'
        })
      
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className="">
                    <input
                        value={user.fname}
                        type='text'
                        placeholder='First Name'
                        id='fname'
                        name='fname'
                        onChange={(e) => {
                            setUser((user) => ({
                                ...user,fname:e.target.value 
                            }))
                        }}
                    />
                </div>
                <div className="">
                    <input
                        value={user.lname}
                        type='text'
                        placeholder='Last Name'
                        id='lname'
                        name='lname'
                        onChange={(e)=>{
                            setUser((user)=>({
                                ...user,lname:e.target.value
                            }))
                        }}
                    />
                </div> <div className="">
                    <input
                        value={user.username}
                        type='text'
                        placeholder='UserName'
                        id='username'
                        name='username'
                        onChange={(e)=>{
                            setUser((user)=>({
                                ...user,username:e.target.value
                            }))
                        }}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
