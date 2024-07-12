import React from "react";
import signupImg from "../assets/signup.png"
import Template from "../components/Template";
const Signup=({setIsLoggedIn})=>{
    return(
        <Template
        title="Join tha millions learning to code with StudyNotion for free"
        desc1="Build skills for today,tomarrow,and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default Signup;