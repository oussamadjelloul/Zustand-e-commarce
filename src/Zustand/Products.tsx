import { create } from 'zustand'
import { Product } from '../Pages/Home';


interface Management {
    products: Product[],
    loading: boolean,
    setProducts: (products: Product) => void,
    setLoading: (loading: boolean) => void
}

const useStore = create<Management>((set) => ({
    products: [],
    loading: false,
    setProducts: (product: Product) => set((state) => ({ products: [...state.products, product] })),
    setLoading: (loading: boolean) => set(() => ({ loading: loading }))
}))


export default useStore;