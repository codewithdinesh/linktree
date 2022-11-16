import React, { useState } from 'react'
import { db } from '../../lib/firebase';

const Username = () => {

    const [newUsername, setNewUsername] = useState("");



    const onCreateUsername = () => {
        if (newUsername) {

            // store username name along with user email,name,uid,etc;

            // const userDoc =

        }
    }

    return (
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Custom Link</h5>
                <p className="text-gray-700 text-base mb-4">
                    create your own linktree web link
                </p>


                <div className='flex-col items-center sm:flex'>

                    <div className='flex  bg-slate-300 rounded-full  my-2 sm:mx-2 p-1 px-2  '>

                        <span className='font-semibold text-blue-900 '>localhost.com/</span>
                        <input
                            className='input outline-none bg-slate-200 rounded-full placeholder:text-gray-500 text-blue-600 font-semibold'
                            placeholder='yourlink'
                            onChange={(e) => {
                                e.preventDefault();
                                setNewUsername(e.target.value);
                            }}
                            value={newUsername}
                            type={"text"}></input>

                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            onCreateUsername()
                        }}
                        type="button"
                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Username