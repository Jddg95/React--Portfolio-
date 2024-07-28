import React, { useState } from "react";
import "./UserProfile.css";
import defaultPhoto from "../assets/images/1704292126044.jpg"; // Adjust the path as necessary

function UserProfile() {
  const [photo, setPhoto] = useState(defaultPhoto);
  const name = "Juan Garcia";
  const description = `Hi there! My name is Juan, and I'm a budding web developer currently completing a rigorous coding bootcamp at the University of Texas in Austin. I have experience in SQL, NoSQL, Node.js, HTML, CSS, React, and more. I'm passionate about building user-friendly, responsive web applications. Growing up, I faced financial challenges, which fueled my determination to succeed through technology. I'm excited to bring my skills to a dynamic team and contribute to meaningful projects. Let's connect and create something amazing together!`;

  return (
    <div className="user-profile-container">
      <div className="photo-upload-button">
        <img src={photo} alt="User" className="profile-photo" />
      </div>
      <h1 className="user-name">{name}</h1>
      <p className="user-description">{description}</p>
    </div>
  );
}

export default UserProfile;
