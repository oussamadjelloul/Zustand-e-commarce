import { SlBasket } from 'react-icons/sl'
import useStore from '../Zustand/Products'
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../Zustand/User';

export default function Headers() {
    const { products } = useStore();
    const navigate = useNavigate();
    const { email, logout } = useUser();
    const logOut = () => {
        window.localStorage.removeItem('user');
        logout();
        navigate('/Signin');
    }
    return (
        <div className=' w-ful h-16 flex justify-evenly p-3'>
            <div>
                <h1>Logo</h1>
            </div>
            <nav>
                <ul className='flex justify-around gap-5'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='contact'>Contanct</Link></li>
                </ul>
            </nav>
            {/* basket  */}
            <div className=' w-16 h-16 relative cursor-pointer' onClick={() => {
                navigate('/myBasket')
            }}>
                {
                    products.length > 0 && <div className='absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex justify-center items-center text-white'>{products.length}</div>
                }
                <SlBasket size={30} />
            </div>
            <div>
                {
                    email
                }
            </div>
            <button onClick={() => { logOut() }}>
                logout
            </button>
        </div>
    )
}
