
'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'



export default function day1() {
    const [user, setUser] = useState([])
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [userUpdate, setUserUpdate] = useState({
        "id": 0,
        "fname": "",
        "lname": "",
        "username": "",
        "avatar": ""
    })
    console.log(userUpdate?.user?.fname);
    console.log(userUpdate);

    useEffect(() => {
        fetch(`https://www.melivecode.com/api/users`).then(res => res.json()).then(result => {
            setUser(result)
            console.log(result);
        })

        
    }, [open])

    const putApiHandle = (e) => {
        e.preventDefault()

        const data = {

            "fname": e.target.ffname.value,
            "lname": e.target.llname.value,
            "username": e.target.uusername.value,
            "password": "1234w",
            "email": "cat.chat@melivecode.com",
            "avatar": "https://www.melivecode.com/users/cat.png"
        }
        fetch(`https://www.melivecode.com/api/users/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            console.log(result.status);
            setOpen(false)
        })
    }

    const handleDelete = (id) => {

        fetch(`https://www.melivecode.com/api/users/delete/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        }).then(res => res.json()).then(result => {
            console.log(result.status);
        })

    }

    const UpdateApiHandleShow = async (id) => {
        setOpenEdit(true)
        const res = await fetch(`https://www.melivecode.com/api/users/${id}`)
        const data = await res.json()
        setUserUpdate(data)






    }

    return (
        <div className="">
            <div className="h-10 my-10 flex justify-between max-w-7xl mx-auto">
                <h1 className='h-full flex items-center justify-center'>User</h1>
                <h1
                    className='flex items-center justify-center p-2 border-2 rounded-lg  h-full hover:bg-white hover:text-black hover:cursor-pointer'
                    onClick={() => setOpen(true)}>
                    Create
                </h1>

            </div>

            <div className="bg-white max-w-7xl mx-auto rounded-lg my-10">
                <table className="  w-full">
                    <thead>
                        <tr className='text-black h-20 my-10 border-b-2 '>
                            <th>Avatar</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            user.map((event) => (
                                <tr key={event.id} className='text-black text-center '>
                                    <td className=' h-auto sm:h-12 w-12'>
                                        <img src={event.avatar} alt="" className='h-full' />
                                    </td>
                                    <td className="">{event.fname}</td>
                                    <td className="">{event.lname}</td>
                                    <td className="">{event.username}</td>
                                    <td className="">
                                        <button
                                            className='md:mr-10 my-2 rounded-lg border-2 py-2 px-5 hover:text-white hover:bg-black'
                                            onClick={() => UpdateApiHandleShow(event.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className='border-2 py-2 px-2 rounded-lg border-red-500 text-red-500 hover:text-white hover:bg-red-500'
                                            onClick={() => handleDelete(event.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* popup create */}
            <Dialog className="relative z-10" open={open} onClose={setOpen}>
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full sm:w-5/6 sm:mx-auto">
                                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            Deactivate account
                                        </DialogTitle>

                                        <form onSubmit={putApiHandle}>
                                            <div className="mt-2 text-white">

                                                <input
                                                    type="text"
                                                    name="fname" id="ffname"
                                                    placeholder='First Name'
                                                    className='p-2 w-full my-2'

                                                />


                                                <input
                                                    type="text"
                                                    name="lname" id="llname"
                                                    placeholder='Last Name'
                                                    className='p-2 w-full  my-2 '
                                                />


                                                <input
                                                    type="text"
                                                    name="username" id="uusername"
                                                    placeholder='UserName'
                                                    className='p-2 w-full  my-2 '
                                                />

                                                <div className="bg-gray-50  py-3 sm:flex sm:flex-row-reverse ">
                                                    <button
                                                        type='submit'
                                                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"

                                                    >
                                                        Create User
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="mt-3  w-full justify-center  bg-white px-3 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:w-auto outline-none"
                                                        onClick={() => setOpen(false)}
                                                        data-autofocus
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

            {/* popup update */}
            <Dialog className="relative z-10" open={openEdit} onClose={setOpenEdit}>
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full sm:w-5/6 sm:mx-auto">
                                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            Deactivate account
                                        </DialogTitle>

                                        <form onSubmit={UpdateApiHandleShow}>
                                            <div className="mt-2 text-white">
                                                <input
                                                    value={userUpdate?.user?.fname }
                                                    type="text"
                                                    name="fname" id="fname"
                                                    placeholder='First Name'
                                                    className='p-2 w-full my-2'
                                                    onChange={(e) => {
                                                        setUserUpdate((userupdate) => ({
                                                            ...userupdate, fname: e.target.value
                                                        }))
                                                    }}

                                                />
                                                <input
                                                    value={userUpdate?.user?.lname}
                                                    type="text"
                                                    name="lname" id="lname"
                                                    placeholder='Last Name'
                                                    className='p-2 w-full  my-2 '
                                                />
                                                <input
                                                    value={userUpdate?.user?.username}
                                                    type="text"
                                                    name="username" id="username"
                                                    placeholder='UserName'
                                                    className='p-2 w-full  my-2 '
                                                />
                                                <div className="bg-gray-50  py-3 sm:flex sm:flex-row-reverse ">
                                                    <button
                                                        type='submit'
                                                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"

                                                    >
                                                        UpDate User
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="mt-3  w-full justify-center  bg-white px-3 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:w-auto outline-none"
                                                        onClick={() => setOpenEdit(false)}
                                                        data-autofocus
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
