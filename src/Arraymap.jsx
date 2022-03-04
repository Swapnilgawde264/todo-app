import React from "react";

export default function Arraymap() {

    const student = [
        {
            name: 'swapnil',
            Age: 20,
        },
        {
            name:"dj",
            Age : 37
        }
    ];

    // student.map((item) => {
    //     console.log("My Name is=", item.name );
    //     console.log("My Age is=", item.Age);
    // })

    return (
        <div>
            {
                student.map((data,i) =>
                <div>
                        <h1 key={i}>{data.name} {i}</h1>
                        <h3>{data.Age}</h3>
                   </div>
                )
            }
        </div>
    )
}