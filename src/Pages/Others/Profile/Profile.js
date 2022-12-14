import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hook/useTitle";

const Profile = () => {
  const {
    user,
    // updateUserProfile
  } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);

  useTitle("Profile");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const name = handleNameChange();
    // const photoURL = photoURLRef.current.value;
    // handleUpdateProfile(name, photoURL);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //   const handleUpdateProfile = (name, photoURl) => {
  //     const profile = { displayName: name, photoURL: photoURl };
  //     updateUserProfile(profile)
  //       .then(() => {})
  //       .catch((error) => console.error(error));
  //   };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            defaultValue={user?.email}
            readOnly
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            defaultValue={name}
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            ref={photoURLRef}
            defaultValue={user?.photoURL}
            name="photoURL"
            placeholder="Your Photo URL"
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
