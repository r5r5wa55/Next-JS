import React from 'react'

export default function createDay1({}) {




    return (
        <div>
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
                                        <div className="mt-2 text-white">
                                            <p className="text-sm  flex justify-center">
                                                <input
                                                    type="text"
                                                    name="fname" id="fname"
                                                    placeholder='First Name'
                                                    className='p-2 w-full my-2'
                                                />
                                            </p>
                                            <p className="text-sm flex justify-center">
                                                <input
                                                    type="text"
                                                    name="lname" id="lname"
                                                    placeholder='Last Name'
                                                    className='p-2 w-full  my-2 '
                                                />
                                            </p>
                                            <p className="text-sm flex justify-center">
                                                <input
                                                    type="text"
                                                    name="username" id="username"
                                                    placeholder='UserName'
                                                    className='p-2 w-full  my-2 '
                                                />
                                            </p>
                                            <div className="bg-gray-50  py-3 sm:flex sm:flex-row-reverse ">
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                                    onClick={() => setOpen(false)}
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
