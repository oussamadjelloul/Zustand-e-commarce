import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useUser from '../Zustand/User'
interface Props {
    children: React.ReactNode
}
export default function ProtectRoute({ children }: Props) {
    const { email, password, login } = useUser();
    const location = useLocation();
    const dd: string | null = window.localStorage.getItem('user');
    type User = {
        email: string,
        password: string
    }
    const user: null | User = dd ? JSON.parse(dd) : null;
    if (email !== "" && password !== "") {
        return children
    }
    if (user && Object.keys(user).length > 0) {
        login(user.email, user.password);
        if (location.pathname === '/Signin') {
            return <Navigate to='/' />
        } else
            return children
    }
    if (location.pathname === '/Signin') {
        return children
    }
    return <Navigate to='/Signin' />
}
