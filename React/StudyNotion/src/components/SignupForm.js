import React from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SignupForm=({setIsLoggedIn})=>
{
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [accountType,setaccountType]=useState("student");
    function changeHandler(event)
    {
        setFormData((prevData)=>(
            {
            ...prevData,
            [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event)
    {
        event.preventDefault();
        if(formData.password!=formData.confirmPassword)
        {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }
    return(
        <div>
            {/* student-Instructor tab */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button 
                className={`${accountType==="student"
                ?"bg-richblack-900 text-richblack-5"
                : "bg-trasparent text-richblack-200"
                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setaccountType("student")}
                >
                    Student
                </button>
                <button
                className={`${accountType==="instructor"
                ?"bg-richblack-900 text-richblack-5"
                : "bg-trasparent text-richblack-200"
                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setaccountType("instructor")}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>
                {/* first name-last name */}
                <div className="flex gap-x-2 mt-4">
                <label  className="w-full mt-4">
                    <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                    <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] box-shadow-10px"
                    />
                </label>
                <label  className="w-full mt-4">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                    <input
                        required
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] box-shadow-10px"
                    />
                </label>
                </div>
                {/* email add */}
                <label className="w-full mt-4">
                    <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4">Email Address<sup className="text-pink-200">*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        value={formData.email}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] box-shadow-10px"
                    />
                </label>
                {/* createPassword and Conform Password */}
                <div className="flex gap-x-2">
                    <label className="w-full relative mt-4">
                    <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text"):("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter password here"
                        value={formData.password}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] box-shadow-10px"
                    />
                    <span 
                     className="absolute right-3 top-[38px] cursor-pointer"
                    onClick={()=>setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                    </label>
                    
                    <label className="w-full relative mt-4">
                    <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Conform Password<sup className="text-pink-200">*</sup></p>
                    <input
                        required
                        type={showConfirmPassword ? ("text"):("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Enter conform password"
                        value={formData.confirmPassword}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] box-shadow-10px"
                    />
                    <span 
                    className="absolute right-2 top-[38px] cursor-pointer"
                    onClick={()=>setShowConfirmPassword((prev)=> !prev)}>
                    {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                    </label>
                </div>
                <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                    Create Account
                </button>
            </form>
        </div>
    )
}
export default SignupForm;