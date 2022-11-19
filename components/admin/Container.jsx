import Link from 'next/link'
import React from 'react'
import NavElement from '../Header/NavElement'
import Sidebar from './Sidebar'

export default function Container({ children }) {
    return (
        <div>

            <div className='flex'>
                {/* <h1> Hello {user?.displayName}</h1> */}

                {/* Side bar */}
                <div className='bg-slate-50 w-14 relative left-0 top-0 bottom-0 h-screen border-r border-gray-300  shadow-slate-200 shadow-inner' >
                    <Sidebar />
                </div>

                <div className='flex-1 shadow-xl bg-white'>

                    {/* Top Bar */}
                    <div className="flex-row  sm:flex">
                        {/* Menu bar : links , appearence, analytics, settings*/}
                        {/* Menu */}

                        <div className='flex-1 flex  bg-slate-50 p-2 h-14 border-b border-gray-300  shadow-slate-200 shadow-inner'>
                            <NavElement name={"Links"} link={"/admin"} />
                            <NavElement name={"Appearence"} link={"/admin/appearence"} />
                            <NavElement name={"Analytics"} link="/admin/analytics" />
                            <NavElement name={"Settings"} link="/admin/settings" />

                        </div>

                        {/* user linktree */}
                        <div className='flex-1 bg-slate-50 p-4 h-14 border-b  border-l  border-gray-300  shadow-slate-200 shadow-inner '>
                            <span className='font-semibold text-black'> My Linktree: </span>

                            <Link href={""}>
                                <span className='text-red-700'> abc</span>
                            </Link>
                        </div>

                    </div>

                    {/* render Children  */}

                    <div className='flex-row  sm:flex bg-slate-100  border-b border-gray-300 '>
                        <main className='flex-1 text-black p-2  border-b border-r   border-gray-300  shadow-slate-200 shadow-inner'>{children}</main>
                        {/* Preview */}
                        <div className='flex-1 text-black p-4 max-w-sm'>
                            Hi
                        </div>
                    </div>

                </div>


            </div>


        </div >
    )
}


// server side rendering to fetching initial admin/user details and more

