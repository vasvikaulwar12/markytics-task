import React, { useState } from "react";
import './eventlist.css'

const EventList =()=>{

    const event_crd_data =[
        {
            id:"1",
            img:"./images/event1.jpg",
            heading:"Wedding"
        },
        {
            id:"3",
            img:"./images/event2.jpeg",
            heading:"Night Event"
        },
        {
            id:"4",
            img:"./images/event3.jpeg",
            heading:"Open Event"
        },
        {
            id:"3",
            img:"./images/event4.jpeg",
            heading:"Night Event"
        },
        {
            id:"2",
            img:"./images/event5.webp",
            heading:"Birthday"
        },
        {
            id:"2",
            img:"./images/event6.avif",
            heading:"Birthday"
        },
        {
            id:"2",
            img:"./images/event7.jpg",
            heading:"Birthday"
        },
        {
            id:"5",
            img:"./images/event8.jpeg",
            heading:"Engagement"
        },
        {
            id:"2",
            img:"./images/event9.jpeg",
            heading:"Birthday"
        },
        {
            id:"2",
            img:"./images/event10.jpeg",
            heading:"Birthday"
        },
        {
            id:"2",
            img:"./images/event11.jpeg",
            heading:"Birthday"
        },
        {
            id:"2",
            img:"./images/event12.jpeg",
            heading:"Birthday"
        },
        {
            id:"2",
            img:"./images/event13.jpeg",
            heading:"Birthday"
        },
        {
            id:"2",
            img:"./images/event14.jpeg",
            heading:"Birthday"
        },
        {
            id:"1",
            img:"./images/event15.jpeg",
            heading:"Wedding"
        },
        {
            id:"3",
            img:"./images/event16.jpeg",
            heading:"Night Event"
        },
        {
            id:"1",
            img:"./images/event17.jpeg",
            heading:"Wedding"
        },
        {
            id:"5",
            img:"./images/event18.jpeg",
            heading:"Engagement"
        },
        {
            id:"4",
            img:"./images/event19.jpeg",
            heading:"OpenEvent"
        },
        {
            id:"4",
            img:"./images/event20.jpeg",
            heading:"Engagement"
        },
        {
            id:"3",
            img:"./images/event21.jpeg",
            heading:"Night Event"
        },
        {
            id:"5",
            img:"./images/event22.jpeg",
            heading:"Engagement"
        },
        {
            id:"3",
            img:"./images/event23.jpeg",
            heading:"Night Event"
        },
        {
            id:"5",
            img:"./images/event24.jpeg",
            heading:"Engagement"
        },
        {
            id:"3",
            img:"./images/event25.jpeg",
            heading:"Night Event"
        },
        
    ]

    const [filterid,setid] = useState("0");

    const handleId = (id)=>{
        setid(id);
    }

    return(
        <>
            <div className="about" style={{backgroundImage:"URL('./images/about.png')"}}>
                <div className="about-content">
                    <h1><b><i>Event List</i></b></h1>
                </div>
                <hr style={{border:"2px solid white",opacity:"1",margin:"20px 0px",width:"100%"}}/>
                <div className="event-filter">
                    <div className="filter">
                        <img src="./images/event15.jpeg" alt="wedding image" onClick={()=>handleId("1")}/>
                        <h5>Wedding</h5>
                    </div>
                    <div className="filter">
                        <img src="./images/event14.jpeg" alt="wedding image" onClick={()=>handleId("2")}/>
                        <h5>Birthday</h5>
                    </div>
                    <div className="filter">
                        <img src="./images/event23.jpeg" alt="wedding image" onClick={()=>handleId("3")}/>
                        <h5>Night Event</h5>
                    </div>
                    <div className="filter">
                        <img src="./images/event19.jpeg" alt="wedding image" onClick={()=>handleId("4")}/>
                        <h5>Open Event</h5>
                    </div>
                    <div className="filter">
                        <img src="./images/event18.jpeg" alt="wedding image" onClick={()=>handleId("5")}/>
                        <h5>Engagement</h5>
                    </div>
                </div>
                
            </div>
            {
                        console.log(filterid)
            }
            <div className="cards">
                {
                    event_crd_data.map((val)=>{
                        console.log(filterid,val.id)
                        if(filterid === "0" || filterid === val.id)
                            {
                                return(
                                    <>
                                        <div className="event-cards">
                                            <img src={val.img} alt="event1"/>
                                            <div className="event-details">
                                                <h5>{val.heading}</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, officiis.</p>
                                                <button>Veiw Details</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        
                    })
                }
                

            </div>
        </>
    )
}

export default EventList;