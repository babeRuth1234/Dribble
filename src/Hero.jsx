import React from "react";

export default function Hero(){
    let Age = 33
    Age> 30 ? console.log("you are older than expected") : console.log("you are younger ")
    // 1. create a variable called password 
    // and assign the value "mypassword" to it
    let password = "mypassword"
    password = "mypassword" 
    // 2.use a ternary operator to check if the value of 
    // the password value is equal to "mypassword" 
    // and log any coresponding message to the console
    return(
        <div className="hero">
            <div className="animated-box">
            Over 3 million ready-to-work creatives!
            </div>
            <div className="h1s">The world’s destination <br /> for design</div>
            <div className="subTitle">Get inspired by the work of millions of top-rated designers & agencies around the world.</div>
            <div className="get-started">Get started</div>
        </div>
    )
}

// condition1 || condtion2 ? ifexpression is true :  ifexpression is false