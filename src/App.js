import React, {useState, useEffect} from 'react'

import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import { commerce } from './lib/commerce';


const App = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProduct = async () => {
        const { data } = await commerce.products.list();
        
        setProduct(data);
    }
    const fetchCart = async () => {
       setCart(await commerce.cart.retrieve()); 
       
    }

    const handleAddtoCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart)
    }

    useEffect(() => {
        fetchProduct();
        fetchCart();
    }, []);

   
    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
            <Products products={products} onAddToCart={handleAddtoCart} />
             <Cart cart={cart}/>
            
        </div>
    )
} 

export default App;
