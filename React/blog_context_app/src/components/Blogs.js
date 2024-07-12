import React from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Blogs=()=>
{
    //consume
    const {posts,loading}=useContext(AppContext);

    return(
        <div className="w-11/12 flex h-screen justify-center items-center max-w-[670px] mt-[170px] mb-[180px] py-8 flex-col gap-y-7">
        {
            loading ? (<Spinner/>) : (
                posts.length===0?(
                    <div>
                        <p>No Post Found</p>
                    </div>
                    ):
                    (
                        posts.map((post)=>(
                            <div key={post.id}>
                                <p className="font-bold font-s">{post.title}</p>
                                <p className="text-[16px] mt-[4px]">
                                    By <span className='italic'>{post.author}</span>on <span className="underline font-bold">{post.category}</span>
                                </p>
                                <p className="text-[14px] mt-4px">Posted on {post.date} </p>

                                <p className="text-[15px] mt-[14px]">{post.content}</p>
                                <div className="flex gap-x-1 flex-wrap">
                                    {post.tags.map((tag,index)=>
                                    {
                                        return <span key={index} className="text-blue-700 underline font-bold text-[12px] mt-[4px]">{`#${tag}`}</span>
                                    })}

                                </div>
                            </div>
                        ))
                    )
            )
        }
        </div>
    )
}

export default Blogs;