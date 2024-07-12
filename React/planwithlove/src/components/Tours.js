import React from "react";
import Card from "./Card";
function Tours(props)
{
    return(
        <div className="container">
            <div className="container1">
                <h2 className="title">Plan with Us</h2>
            </div>
            <div className="cards">
                {
                    //when we pass list usig map we have to pass key=>unique identifier if unique identifier is no then pass index but 'index 'is not good practice
                    props.tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={props.removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
};
export default Tours;