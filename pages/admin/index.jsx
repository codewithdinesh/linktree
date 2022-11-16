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
            <div>Hi bro</div>
        </Container>

    )


}

export default admin;

