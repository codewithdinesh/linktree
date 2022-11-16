import React from 'react'
import NavElement from '../Header/NavElement'
import Sidebar from './Sidebar'

export default function Container({ children }) {
    return (
        <div>

            <div className='flex'>
                {/* <h1> Hello {user?.displayName}</h1> */}

                {/* Side bar */}
                <div className='  bg-slate-200 w-14 relative left-0 top-0 bottom-0 h-screen'>
                    <Sidebar />
                </div>

                <div className='flex-1'>


                    {/* Menu bar : links , appearence, analytics, settings*/}
                    {/* Menu */}
                    <div className=' flex  bg-white p-2 h-14'>
                        <NavElement name={"Links"} link={"/admin"} />
                        <NavElement name={"Appearence"} link={"/admin/appearence"} />
                        <NavElement name={"Analytics"} link="/admin/analytics" />
                        <NavElement name={"Settings"} link="/admin/settings" />
                    </div>

                    {/* render Children  */}

                    <main>{children}</main>

                </div>

            </div>


        </div>
    )
}
