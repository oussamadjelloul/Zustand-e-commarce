import React from 'react'
import { Navigate } from 'react-router-dom'
import useUser from '../Zustand/User'
interface Props {
    children: React.ReactNode
}
export default function ProtectAuth({ children }: Props) {
    const { email, password, login } = useUser();
    const dd: string | null = window.localStorage.getItem('user');
    type User = {
        email: string,
        password: string
    }
    const user: null | User = dd ? JSON.parse(dd) : null;
    if (email !== "" && password !== "") {
        return <Navigate to='/' />
    }
    if (user && Object.keys(user).length > 0) {
        login(user.email, user.password);
        return <Navigate to='/' />
    }
    return children
}
