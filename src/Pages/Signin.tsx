import React from 'react'
import useUser from '../Zustand/User'
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const { login } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const Log = () => {
        if (email && password) {
            window.localStorage.setItem('user', JSON.stringify({ email: email, password: password }));
            login(email, password)
            navigate("/");
        }
    }
    return (
        <div className=' h-screen w-full'>
            <h1 className=' m-auto w-28 text-2xl mt-10 font-bold '>Signin</h1>
            <div className=' mt-10 border border-gray-600 rounded-lg w-10/12 max-w-2xl flex flex-col m-auto p-5 gap-5'>
                <input type="text" placeholder='email' className=' p-2 rounded-md w-60 h-10 m-auto border border-gray-600' onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder='password' className=' p-2 rounded-md w-60 h-10 m-auto border border-gray-600' onChange={(e) => { setPassword(e.target.value) }} />
                <button onClick={() => { Log() }} type='submit' className=' p-3 text-white bg-gray-500 rounded-lg w-60 m-auto h-14'>Signin</button>
            </div>
        </div>
    )
}
