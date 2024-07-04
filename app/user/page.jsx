'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export default function User() {
    const [user, setUser] = useState([])
    console.log(user);

    useEffect(() => {

        fetch(`https://www.melivecode.com/api/users`).then(res => res.json()).then(result => {
            setUser(result)

        })


        // const apiFetch = async () => {
        //     const res = await fetch(`https://www.melivecode.com/api/users`)
        //     const data = await res.json()
        //     setUser(data)
        //     console.log(res);
        // }
        // apiFetch()

    }, [])

    const hanldleDelete = (id) => {
        console.log(id);

        fetch(`https://www.melivecode.com/api/users/delete`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        }).then(res => res.json()).then(result => {
            console.log(result);
        })
    }
    return (
        <div >
            <Link href='/user/create'>Create</Link>
            <ul className='max-w-7xl mx-auto'>
                {
                    user.map(user => (
                        <li key={user.id} className='flex  items-center justify-around'>
                            <img src={user.avatar} alt="" className='h-24' />
                            {user.fname}  {user.lname} {user.username}
                            <div className="flex gap-3">
                                <button onClick={() => hanldleDelete(user.id)}>Delete</button>
                                <Link href={`user/edit/` + user.id}>Edit</Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <Link href='/user/day1'>Day One</Link>
        </div>
    )
}
