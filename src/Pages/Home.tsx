import React from 'react'

import Headers from '../Components/Headers'
import { AiFillStar } from 'react-icons/ai'
import useStore from '../Zustand/Products'

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string,
    rating: {
        rate: number,
        count: number
    }
}

export default function Home() {

    const { products, loading, setProducts, setLoading } = useStore();

    const [data, setDate] = React.useState<Product[]>([]);
    // const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')

            .then(res => res.json())
            .then(json => {
                setDate(json);
                setLoading(false);
            })
    }, [])

    const Add = (id: number): void => {
        const product = data.find((product) => product.id === id);
        if (product) {
            products.includes(product) ? alert('this product is already in the cart') :
                setProducts(product)
        }
    }

    return (
        <>
            <Headers />
            <div className=" w-full max-h-max">
                <div className="flex flex-wrap justify-between items-center gap-5 p-3">
                    {loading ? <div className="text-2xl text-center m-auto">Loading...</div> : data.map((product) => {
                        return (
                            <div key={product.id} className=' w-56 max-h-max flex relative group flex-col justify-between items-center border border-gray-600 p-1 rounded-md'>
                                <div className='group-hover:flex hidden absolute bg-yellow-100 opacity-70 justify-center items-center w-full h-full gap-5 flex-col'>
                                    <button className=' p-2 text-white bg-gray-500'>
                                        plus information
                                    </button>
                                    <button onClick={() => { Add(product.id) }} className=' p-2 text-white bg-gray-500'>
                                        add to cart
                                    </button>
                                </div>

                                <div className='w-full h-48'>
                                    <img className='w-full h-full' src={product.image} alt="..." />
                                </div>
                                <div className='w-full'>
                                    <div className='text-center font-semibold truncate'>{product.title}</div>
                                    <div className='text-center text-xl text-red-500'>{product.price}</div>
                                    <div>{product.category}</div>
                                    <div className=' flex justify-between w-12 items-center mr-0'> <AiFillStar size="" className=" text-yellow-200" /> {product.rating.rate}</div>
                                </div>

                            </div>
                        )
                    }
                    )}

                </div>
            </div >
        </>
    )
}
