import React from 'react';
import '../CSS/Notifications.css';
import { Typography,Divider} from "@mui/material"

const NOTIFICATIONS = [
  {
    id: 1,
    description: 'Your payment was successful Your order has shipped Your order has shipped',
    buttonText1: 'Request Approved',
    buttonText2: 'Dismiss'
  },
  {
    id: 2,
    description: 'Your account password has been changed Your order has shipped Your order has shipped',
    buttonText1: 'Request Approved',
    buttonText2: 'Dismiss'
  },
  {
    id: 3,
    description: 'You have a new message from John Your order has shipped Your order has shipped',
    buttonText1: 'Request Approved',
    buttonText2: 'Dismiss'
  },
  {
    id: 4,
    description: 'Your order has shipped Your order has shipped Your order has shipped',
    buttonText1: 'Request Approved',
    buttonText2: 'Dismiss'
  },
  {
    id: 5,
    description: 'Your order has shipped Your order has shipped Your order has shipped',
    buttonText1: 'Request Approved',
    buttonText2: 'Dismiss'
  }
];

const Notifications = () => {
  return (
    <div className="notifications">
      <h1> 
               <Typography sx={{mb: "44px",mt: "110px", alignContent: "center",ml:"17%"}} component="h2" variant="h2">Students Requests</Typography>
               <Divider sx=
        {{mt: "50px", mb: "40px",ml:"3ch",mr:"2ch", color: "black", borderColor: "#434F53",
        background: "transparent"}} variant="middle"/>
               </h1>
      <ul className="notifications-list">
        {NOTIFICATIONS.map((notification) => (
          <li key={notification.id}>
            <div className="card">
              <div className="card-description">{notification.description}</div>
              <div className="card-buttons">
                <button className="card-button card-button-1">{notification.buttonText1}</button>
                <button className="card-button card-button-2">{notification.buttonText2}</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;