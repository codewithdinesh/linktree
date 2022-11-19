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
                    {/* Menu bar : links , appearence, analytics, settings*/}
                    {/* Menu */}
                    <div className=' flex bg-slate-50 p-2 h-14 border-b border-gray-300  shadow-slate-200 shadow-inner'>
                        <NavElement name={"Links"} link={"/admin"} />
                        <NavElement name={"Appearence"} link={"/admin/appearence"} />
                        <NavElement name={"Analytics"} link="/admin/analytics" />
                        <NavElement name={"Settings"} link="/admin/settings" />
                    </div>

                    {/* render Children  */}

                    <main>{children}</main>

                </div>

                {/* Preview */}

            </div>


        </div>
    )
}
