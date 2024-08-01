import React, { useState } from "react";
import "./UserProfile.css";
import defaultPhoto from "../assets/images/profile-photo.jpg"; // Adjust the path as necessary

function UserProfile() {
  const [photo] = useState(defaultPhoto);
  const [description] =
    useState(`Hi there! My name is Juan, and I'm a budding web developer currently completing a rigorous coding bootcamp at the University of Texas in Austin. With my graduation just around the corner, I've immersed myself in various technologies, including SQL, NoSQL, Node.js, HTML, CSS, React, and more.

During this bootcamp, I've developed a strong foundation in both front-end and back-end development, working on diverse projects that have honed my problem-solving skills and creativity. I'm passionate about building user-friendly, responsive, and visually appealing web applications.

In addition to my technical skills, I have a background that has taught me resilience and the importance of hard work. Growing up, I faced financial challenges, but these experiences have only fueled my determination to succeed and make a positive impact through technology.

I'm excited to bring my skills to a dynamic team where I can continue to learn, grow, and contribute to meaningful projects. Let's connect and create something amazing together!`);

  const name = "Juan Garcia";

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
