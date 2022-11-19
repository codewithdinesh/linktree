import Link from 'next/link'
import React from 'react'

function SidebarIcon({ children, link }) {
    return (


        <div className='flex flex-col items-center justify-center my-2 ' >

            {/* icon */}
            <Link href={link ? link : "/#"}>
                {children}
            </Link>
        </div >

    )
}

export default SidebarIcon