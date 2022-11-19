import React from 'react'
import AccountIcon from '../icons/AccountIcon'
import Announcement from '../icons/Announcement'
import SupportIcon from '../icons/SupportIcon'
import Tree from '../icons/Tree'
import SidebarIcon from './SidebarIcon'

const Sidebar = () => {
    return (
        <div className='flex flex-col justify-between text-red-500 h-screen p-1'>

            {/* icon-  logo */}

            <SidebarIcon>
                <Tree />
            </SidebarIcon>


            <div className='flex-col items-center justify-center'>
                {/* Support and anouncement */}
                <SidebarIcon link={"support"}>
                    <SupportIcon />
                </SidebarIcon>

                {/* Announcement Icon */}
                <SidebarIcon link={"announcement"}>
                    <Announcement />
                </SidebarIcon>

                {/* Account */}
                <SidebarIcon link={"account"}>
                    <AccountIcon />
                </SidebarIcon>
            </div>

        </div>
    )
}

export default Sidebar