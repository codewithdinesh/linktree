import React, { useState } from 'react'
import NavElement from './Header/NavElement'
import Link from "next/link"
import Tree from './icons/Tree'
import Hamburger from './icons/Hamburger'
import CloseIcon from './icons/CloseIcon'

const Header = () => {

    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const onNavOpen = () => {
        setNavbarOpen(!isNavbarOpen)
    }

    // Hide and show Navbar 
    const showNavbar = "flex-1 block items-center sm:flex absolute w-screen top-16 h-52 bg-white px-2 py-2  sm:top-0 right-0 bottom-0 sm:relative sm:bg-transparent sm:w-auto  sm:h-auto sm:px-1 sm:py-0";
    const hideNavbar = "flex-1 hidden items-center sm:flex absolute w-screen top-16 h-60 bg-white 300 px-2  sm:top-0 right-0 bottom-0 sm:relative sm:bg-transparent sm:w-auto  sm:h-auto sm:px-1 sm:py-0";

    return (

        <div className="my-3 z-10 mx-auto rounded-full bg-white max-w-screen-lg h-14 w-full fixed top-0 left-0 right-0">
            <div className=" h-full w-full rounded-full flex ">

                <div className="items-center justify-between max-h-full w-full flex ">

                    {/* Logo */}
                    <div className="flex  items-center rounded-full cursor-pointer hover:bg-slate-200  ">
                        <Tree />
                        <p className="text-red-500 font-semibold mr-2 ml-0 text-xl">
                            Linktree
                        </p>
                    </div>

                    {/* Nav items */}
                    <div className={isNavbarOpen ? showNavbar : hideNavbar}>

                        <NavElement name={"Marketplace"} link={"marketplace"} />
                        <NavElement name={"Discover"} link={"discover"} />
                        <NavElement name={"Pricing"} link="pricing" />
                        <NavElement name={"Learn"} link="learn" />

                    </div>



                    <div className="flex">
                        {/* <Link href="/login">
                            <button
                                className="p-2 mx-2 bg-gray-200 rounded-md text-black font-semibold hover:bg-slate-300 hover:text-blue-700"
                            >
                                Login
                            </button>
                        </Link> */}


                        <Link href="login">

                            <button
                                className="p-3 mx-2  rounded-full bg-black font-semibold text-white hover:bg-slate-700 whitespace-nowrap"
                            >
                                Signup up free
                            </button>
                        </Link>

                        <div className=" flex  items-center  cursor-pointer rounded-full  sm:hidden  ">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavOpen()
                                }}

                                className="rounded-full hover:bg-slate-200 mx-1"
                            >

                                {
                                    isNavbarOpen ?
                                        <CloseIcon /> : <Hamburger />

                                }
                            </button>


                        </div>
                    </div>

                </div>
            </div>

        </div >

    )
}

export default Header