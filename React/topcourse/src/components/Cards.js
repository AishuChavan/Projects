
import { useState } from "react";
import Card from './Card';

const Cards=(props)=>{
    let courses=props.courses;
    let category=props.category;
    const [LikedCourse,setLikedcourses]=useState([]);
    //this function is applya on object which is received from the api call is conbertet insto array
    //first data is in key value format we want inly the value so through object.value we get values of 4 oject the 2nd time loop is for from 4oject value iterate on eacg oject value one by one
    function getCourses(){
        console.log(courses);
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach(array=>{
                array.forEach(coursesData => {
                    allCourses.push(coursesData);
                });
            })
            return allCourses;
        }
        else{
            //main sirf specific category ka data pass karuga
            return courses[category];
        }
        }
       
    
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course)=>{
                    return(
                        <div className="relative flex  flex-wrap">
                    <Card key={course.id} course={course} likedCourses={LikedCourse} setLikedcourses={setLikedcourses}/>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Cards;
