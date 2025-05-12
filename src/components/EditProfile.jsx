import { useState } from "react";

const EditProfile = ({ loggedInUser }) => {
  const [formData, setFormData] = useState({
    name: loggedInUser.name,
    email: loggedInUser.email,
    username: loggedInUser.username,
    location: loggedInUser.location,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      method="POST"
      encType="multipart/form-data"
      className="edit-profile__form"
    >
      <label htmlFor="avatar">Avatar</label>
      <input type="file" id="avatar" name="avatar" accept="image/*" />
      <input
        placeholder="Name"
        name="name"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <input
        placeholder="Email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <input
        placeholder="Username"
        name="username"
        type="text"
        required
        value={formData.username}
        onChange={handleChange}
      />
      <input
        placeholder="Location"
        name="location"
        type="text"
        required
        value={formData.location}
        onChange={handleChange}
      />
      <input type="submit" value="Update Profile" />
      {!loggedInUser.socialOnly && (
        <div className="edit-profile__password">
          <a href="/change-password">Change Password →</a>
        </div>
      )}
    </form>
  );
};

export default EditProfile;
