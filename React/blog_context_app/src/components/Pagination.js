import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination=()=>
{
    const {page,handlePageChange,totalPages}=useContext(AppContext);
    return(
        <div className="w-full flex justify-center items-center border-2 bg-white fixed bottom-0">
            <div className="flex justify-between w-11/12 max-w-[650px] py-2">
                <div className="flex gap-x-2">
                {//for condition purpose we use curly brackets
                    page > 1 &&
                    (<button 
                     className='rounded-md border-2 px-4 py-1'
                    onClick={()=>handlePageChange(page-1)}>
                        Previous
                    </button>)
                }
                {   
                    page<totalPages &&
                    (<button 
                        className='rounded-md border-2 px-4 py-1'
                    onClick={()=>handlePageChange(page+1)}>
                        Next
                    </button>)
                }
                </div>
                <p className="font-bold text-sm">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}

export default Pagination;