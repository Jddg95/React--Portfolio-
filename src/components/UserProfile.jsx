import React from 'react';
import './UserProfile.css';
import defaultPhoto from '../assets/images/default-photo.jpg'; // Adjust the path as necessary

function UserProfile() {
  const photo = defaultPhoto;
  const name = 'Your Name';
  const description = 'Your Description';

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