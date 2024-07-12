import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import toast from 'react-hot-toast';
import { NavLink } from "react-router-dom";
const Cart = () => {

  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalamount]=useState(0);

  useEffect(()=>{
    setTotalamount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]);
  return(
    <div>
      {
        cart.length >0?
        (
          <div>
            <div>
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item}  itemIndex={index}></CartItem>
                })
              }
            </div>
            <div>
              <div>
                Your Cart
              </div>
              <div>
                Summary
              </div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p>Total Amount:${totalAmount}</p>
              <button>Checkout Now</button>
            </div>
          </div>
        ):
        (
          <div>
          <h1>Cart Empty</h1>
          <NavLink to={"/"}>
          <button>
          Shop Now</button>
          </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
