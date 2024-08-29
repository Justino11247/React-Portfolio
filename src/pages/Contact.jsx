import React, { useState } from "react";

function Contact() {
  // State variables for form inputs, validation errors, and submission feedback
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Handles form submission 
  function handleSubmit(e) {
    e.preventDefault();8
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setSubmissionMessage("Your message has been successfully submitted!");
    }
  }


  // Updates name state, clears any associated error
  function handleNameChange(e) {

    setName(e.target.value);
    setErrors({ ...errors, name: "" });
  }

  // Updates email state, clears any associated error
  function handleEmailChange(e) {

    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  }

  // Updates message state, clears any associated error
  function handleMessageChange(e) {

    setMessage(e.target.value);
    setErrors({ ...errors, message: "" });
  }

  // Validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

  

// JSX structure for the contact form
return (
  <div className="">
    <h1>Contact Me</h1>

    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={handleNameChange} required className="" />
        {errors.name && <p className="">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email"  value={email} onChange={handleEmailChange} required className="" />
        {errors.email && <p className="">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea value={message} onChange={handleMessageChange} required className="" ></textarea>
        {errors.message && <p className="">{errors.message}</p>}
      </div>
      {Object.keys(errors).length > 0 && (
        <p className="">Please complete all required fields.</p>
      )}
      {submissionMessage && <p>{submissionMessage}</p>}

      <button type="submit" className="">
        Submit
      </button>
    </form>
  </div>
);
}

export default Contact;