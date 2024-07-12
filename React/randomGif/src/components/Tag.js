import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Tag=()=>
{
  
    const [tag,setTag]=useState('car');
    const {gif,loading,fetchData}=useGif({tag});
    function clickHandler()
    {
        fetchData(tag);
    }
    function changeHandler(event)
    {
        setTag(event.target.value);
    }
    return(
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"/>) 
            }

            <input 
                className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
                onChange={changeHandler}
                value={tag}
            />

            <button onClick={clickHandler}
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]">Generate</button>
        </div>
    )
}
export default Tag;