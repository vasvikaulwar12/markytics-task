import React from 'react';
import './services.css'

const EventDetails = () => {

    const events = [
        {
          id: 1,
          title: 'Community Clean-up',
          description: 'Join us for a day of cleaning up the local park!',
          date: '2024-09-25',
          time: '10:00',
          location: 'City Park',
          status: 'upcoming',
        },
        {
          id: 2,
          title: 'Music Concert',
          description: 'Enjoy a night of live music with local bands.',
          date: '2024-10-05',
          time: '19:00',
          location: 'Downtown Amphitheater',
          status: 'upcoming',
        },
        {
          id: 3,
          title: 'Book Club Meeting',
          description: 'Discuss this month’s book and enjoy some snacks.',
          date: '2024-09-30',
          time: '18:00',
          location: 'Local Library',
          status: 'completed',
        },
      ];
      
    
  return (
    <>
            <div className="about" style={{backgroundImage:"URL('./images/about.png')"}}>
        <div className="about-content">
        <h1><b><i>Event Details</i></b></h1>
        </div>
    </div>
    <div className="events-list">
        {
            events.map((val)=>{
                return(
                    <>
                     <div className="event-details-card">
                        <h5>Title:{val.title}</h5>
                        <p><strong>Description:</strong> {val.description}</p>
                        <p><strong>Date:</strong> {val.date}</p>
                        <p><strong>Time:</strong>{val.time}</p>
                        <p><strong>Location:</strong>{val.location}</p>
                        <p><strong>Status:</strong>{val.status}</p>
                    </div>
                    </>
                )
            })
        }
       
    </div>
    
    </>
    
    
  );
};

export default EventDetails;
