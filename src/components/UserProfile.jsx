import React, { useState } from "react";
import "./UserProfile.css";
import defaultPhoto from "../assets/images/1704292126044.jpg"; // Adjust the path as necessary

function UserProfile() {
  const [photo, setPhoto] = useState(defaultPhoto);
  const [name, setName] = useState("Your Name");
  const [description, setDescription] = useState("Your Description");

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.innerText);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.innerText);
  };

  return (
    <div className="user-profile-container">
      <label htmlFor="photo-upload" className="photo-upload-label">
        <div className="photo-upload-button">
          <img src={photo} alt="User" className="profile-photo" />
        </div>
      </label>
      <input
        id="photo-upload"
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        style={{ display: "none" }}
      />
      <h1
        contentEditable="true"
        className="user-name"
        onInput={handleNameChange}
        suppressContentEditableWarning={true}
      >
        {name}
      </h1>
      <p
        contentEditable="true"
        className="user-description"
        onInput={handleDescriptionChange}
        suppressContentEditableWarning={true}
      >
        {description}
      </p>
    </div>
  );
}

export default UserProfile;
