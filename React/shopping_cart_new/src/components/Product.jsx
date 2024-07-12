import React from 'react';
import toast from 'react-hot-toast';
import {useDispatch, useSelector} from 'react-redux'
import { add ,remove} from '../redux/Slices/CartSlice';
import { NavLink } from 'react-router-dom';

function Product(props) {
    let product = props.product;
    const {cart} = useSelector((state) => state);
    const dispacth = useDispatch();

    function removeFromCart() {
        dispacth(remove(product.id));
        toast.error("Item removed from cart")
    }

    function addToCart() {
        console.log("add to cart");
        dispacth(add(product));
        toast.success('Item added to cart');
    }
    return (
        <div className='flex flex-col justify-between items-center hover:scale-110 transition-all duration-300 ease-in bg-white border-2 rounded-xl
         p-4 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 ml-5 mt-10 group min-h-[55vh] border-slate-500'>
            <NavLink to={`/product/${product.id}`}>
                <p className=' text-gray-700 font-bold text-lg text-left truncate w-40 mt-1'>{product.title}</p>
            </NavLink>
            <NavLink to={`/product/${product.id}`}>
                <p className=' text-gray-500 text-[12px] font-normal text-left'>{product.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </NavLink>
            <NavLink to={`/product/${product.id}`} className=' h-[180px]'>
                <img src={product.image} alt="" className='w-full h-full'/>
            </NavLink>

            <div className=' flex justify-center gap-x-16 w-full mt-5'>
                <p className=' font-bold text-green-600'>${product.price}</p>
                <div >
                    {
                        cart?.some( (p) => p.id === product.id) ? 
                        <button onClick={removeFromCart}
                        className='outline rounded-xl px-3 py-1 text-[12px] uppercase font-semibold group-hover:bg-slate-900 group-hover:text-white'
                        >Remove Item</button> : 
                        <button onClick={addToCart}
                        className=' outline rounded-xl px-3 py-1 text-[12px] uppercase font-semibold group-hover:bg-slate-900 group-hover:text-white'
                        >Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Product;