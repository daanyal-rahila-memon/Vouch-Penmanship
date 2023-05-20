import React, { useState } from 'react';
import '../CSS/Notifications.css';
import { Typography, Divider } from "@mui/material"

const initialNotifications = [
  {
    id: 1,
    title: 'Vouch Penmanship',
    description: 'Your payment was successful Your order has shipped Your order has shipped ',
    mail: "f190326@cfd.nu.edu.pk",
    time: "3:01am:5/18/23",
  },
  {
    id: 2,
    title:'Vouch Penmanship',
    description: 'Your account password has been changed Your order has shipped ',
    mail:"f190326@cfd.nu.edu.pk",
   time:"3:01am:5/18/23",
  },
  {
    id: 3,   
     title:'Vouch Penmanship',
    description: 'You have a new message from John Your order has shipped ',
    mail:"f190326@cfd.nu.edu.pk",
    time:"3:01am:5/18/23",
  },
  {
    id: 4,
    title:'Vouch Penmanship',
    description: 'Your order has shipped Your order has shipped Your order has shipped',
    mail:"f190326@cfd.nu.edu.pk",
    time:"3:01am:5/18/23",

  },
  {
    id: 5,
    title:'Vouch Penmanship',
    description: 'Your order has shipped Your order has shipped Your order has shipped',
   mail:"f190326@cfd.nu.edu.pk",
   time:"3:01am:5/18/23",

  }

  // ...rest of the notifications
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [clickValues, setClickValues] = useState({});

  const handleApproveDismiss = (id, value) => {
    // Remove the clicked notification from the list
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);

    // Save the click value
    const updatedClickValues = { ...clickValues, [id]: value };
    setClickValues(updatedClickValues);
  };

  return (
    <div className="notifications">
      
    <Typography sx={{mb: "42px",mt: "110px", alignContent: "center",ml:"17%"}} component="h2" variant="h2">Approval's Request</Typography>
    <Divider sx=
{{mt: "40px", mb: "40px",ml:"8ch",mr:"10ch", color: "black", borderColor: "#434F53",
background: "transparent"}} variant="middle"/>
   
<ul className="notifications-list">
{notifications.map((notification) => (
<li key={notification.id}>
 <div className="card">
 <div className="card-title">{notification.title}</div>
   <div className="card-description">{notification.description}</div>
   <div className="card-mail">{notification.mail} &nbsp;&nbsp; {notification.time}</div>

   <div className="card-buttons">
   <button className="card-button card-button-3"  >Open Document</button>
   <button
  className="card-button card-button-1"
  onClick={() => handleApproveDismiss(notification.id, 'approved')}
>
  Approved
</button>
<button
  className="card-button card-button-2"
  onClick={() => handleApproveDismiss(notification.id, 'dismissed')}
>
  Dismiss
</button>
   </div>

 </div>
</li>
))}
</ul>
</div>
  );
};

export default Notifications;