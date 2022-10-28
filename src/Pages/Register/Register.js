import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hook/useTitle";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const {
    createUser,
    updateUserProfile,
    // verifyEmail
  } = useContext(AuthContext);

  useTitle("Register");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        handleUpdateProfile(name, photoURL);
        // handleEmailVerificaton();
        toast.success("Please Verify Your Email Address");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateProfile = (name, photoURl) => {
    const profile = { displayName: name, photoURL: photoURl };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  // const handleEmailVerificaton = () => {
  //   verifyEmail()
  //     .then(() => {})
  //     .catch((error) => console.error(error));
  // };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h3 className="text-center pb-3">Register Now</h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Your Photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms & Conditions</Link>
              </>
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
