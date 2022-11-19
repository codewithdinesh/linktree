import Link from 'next/link'
import React from 'react'

const NavElement = ({ name, link }) => {
    return (
        <Link href={link}>
            <li className="block p-2 list-none text-black ml-1 rounded-full font-semibold  mb-2 mx-auto sm:mb-0 hover:bg-gray-300">{name}</li>

        </Link>
    )
}

export default NavElement