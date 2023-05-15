import React, { useState } from "react";
import SupervisorlabelsDropdown from "./SupervisorNamesDrpdown";
import Card from "./IdeaCard";
function Ideas()
//create an array of cards for applying
{
    const [cards,setcards]=useState([
    {
        title:"Idea 1",
        description:"This is a great idea that will change the world.",
        imageSrc:"https://picsum.photos/id/1015/400/250",
        buttonLabel1:"Description",
        // buttonLabel2:"Description",
    },
    {
        title:"Idea 2",
        description:"This is a great idea that will change the world.",
        imageSrc:"https://picsum.photos/id/1016/400/250",
        buttonLabel1:"Description",
    },
    {
            title:"Idea 3",
            description:"This is a great idea that will change the world.",
            imageSrc:"https://picsum.photos/id/1018/400/250",
            buttonLabel1:"Description",
     },
     {
        title:"Idea 4",
        description:"This is a great idea that will change the world.",
        imageSrc:"https://picsum.photos/id/1020/400/250",
        buttonLabel1:"Description",
    },
    {
        title:"Idea 5",
        description:"This is a great idea that will change the world.",
        imageSrc:"https://picsum.photos/id/1022/400/250",
        buttonLabel1:"Description",
    },
    {
            title:"Idea 6",
            description:"This is a great idea that will change the world.",
            imageSrc:"https://picsum.photos/id/1024/400/250",
            buttonLabel1:"Description",
     }
])
    return(
        <div style={{alignContent:"center"}}>
             <div className="card-container" style={{ display:"flex", 
                                                flexWrap: "wrap",
                                                margin:"5px",
                                                // justifyContent:"space-between",
                                                alignItems: "center",
                                               justifyContent: "center",
                                                padding:"3%"}}>
            <SupervisorlabelsDropdown/>

                                                </div>
            <div className="Ideas" >
            <div className="card-container" style={{ display:"flex", 
                                                flexWrap: "wrap",
                                                margin:"5px",
                                                justifyContent:"space-evenly",
                                                alignItems: "center",
                                                }}>
                 {
                    cards.map((card) =>{return ( <Card title={card.title} description={card.description} 
                    imageSrc={card.imageSrc}  buttonLabel1={card.buttonLabel1}/> )})

                 }                                   
                {/* <Card
                title="Idea 1"
                description="This is a great idea that will change the world."
                imageSrc="https://picsum.photos/id/1015/400/250"
                buttonLabel1="Description"
                // buttonLabel2="Get Involved"
                />
                <Card
                title="Idea 2"
                description="This is another great idea that will also change the world."
                imageSrc="https://picsum.photos/id/1016/400/250"
                buttonLabel1="Description"
                // buttonLabel2="Get Involved"
                />
                <Card
                title="Idea 3"
                description="This is a great idea that will change the world."
                imageSrc="https://picsum.photos/id/1018/400/250"
                buttonLabel1="Description"
                // buttonLabel2="Get Involved"
                />
                <Card
                title="Idea 4"
                description="This is another great idea that will also change the world."
                imageSrc="https://picsum.photos/id/1020/400/250"
                buttonLabel1="Description"
                // buttonLabel2="Get Involved"

                />
                <Card
                title="Idea 5"
                description="This is a great idea that will change the world."
                imageSrc="https://picsum.photos/id/1022/400/250"
                buttonLabel1="Description"
                // buttonLabel2="Get Involved"
                />
                <Card
                title="Idea 6"
                description="This is another great idea that will also change the world."
                imageSrc="https://picsum.photos/id/1024/400/250"
                buttonLabel1="Description"
                // buttonLabel2="Get Involved"
                /> */}
            </div>


                </div>
                </div>
    )
};
export default Ideas