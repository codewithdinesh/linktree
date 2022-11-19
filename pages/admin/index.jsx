import Link from 'next/link'
import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import Username from '../../components/admin/Username'
import { auth } from '../../lib/firebase'
import Container from '../../components/admin/Container'

const admin = () => {


    const [user, loading] = useAuthState(auth)


    return (

        <Container>

            {/* Add new Link container */}
            <div className='flex items-center justify-center'>

                {/* add link button */}
                <button className='button p-2 font-semibold text-white  rounded-full bg-violet-500'> &#x2b; Add Link</button>

            </div>

        </Container>

    )


}

export default admin;

