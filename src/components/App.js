import React from "react";
import "../styles/App.css";
import { useState } from "react";
import { signUpFormValidation } from "../utils/validation";

const App = () => {
  const [name, setName] = useState("");
  const [passward, setPassward] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    // console.log("event", event.target.value, event.target.name);
    // setFormData({ ...formData, [event.target.name]: event.target.value });
    setName(event.target.value);
    setPassward(event.target.value);
    setEmail(event.target.value);
  };
  const handleChange1 = (event) => {
    // console.log("event", event.target.value, event.target.name);
    // setFormData({ ...formData, [event.target.name]: event.target.value });
    // setName(event.target.value);
    setPassward(event.target.value);
    // setEmail(event.target.value);
  };
  const handleChange2 = (event) => {
    // console.log("event", event.target.value, event.target.name);
    // setFormData({ ...formData, [event.target.name]: event.target.value });
    // setName(event.target.value);
    // setPassward(event.target.value);
    setEmail(event.target.value);
  };

  let formData = {
    name: "name",
    passward: "passward",
    email: "email"
  };

  return (
    <>
      <label>Name:</label>
      <input type="text" id="name" value={name} onChange={handleChange} />
      <br />
      <label>Email: </label>
      <input type="email" id="email" value={email} onChange={handleChange2} />
      <br />
      <label>Passward:</label>
      <input
        type="passward"
        id="password"
        value={passward}
        onChange={handleChange1}
      />
      <br />
      <label>Checkbox:</label>
      <input type="checkbox" id="consent" />
      <br />

      <button>Signup</button>
      <br />
      <signUpFormValidation formData={formData} />
    </>
  );
};

export default App;
