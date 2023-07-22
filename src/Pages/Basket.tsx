import Headers from '../Components/Headers';
import useStore from '../Zustand/Products';
export default function Basket() {
    const { products } = useStore();
    return (
        <>
            <Headers />
            <div className=' w-full max-h-max'>
                <div className=' block gap-5 p-3'>
                    {products.map((product) => {
                        return (
                            <div key={product.id} className=' w-full m-3 max-h-max flex relative gap-4 justify-between items-center border border-gray-600 p-1 rounded-md'>
                                <div className=' w-3/12'>
                                    <img className=' w-48 h-48' src={product.image} alt=".." />
                                </div>
                                <div className='w-8/12'>
                                    <h1 className=' font-bold'>{product.title}adfd</h1>
                                    <h1 className='text-green-400 font-light'>{product.price}</h1>
                                    <h1>{product.category}</h1>
                                    <h1 className=' text-yellow-500'>{product.rating.rate}</h1>
                                    <p className=' '> {product.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
