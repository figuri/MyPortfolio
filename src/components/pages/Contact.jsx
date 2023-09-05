import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    // If there are errors, set them in the state and do not submit the form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If there are no errors, submit the form
      setIsSubmitted(true);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <section id="contact">
        <h2 className="header">Contact</h2>
      <div className="contact-container">
        <p className="contact-message">
          If you would like to reach out via email, fill out the forms below.
        </p>
        {/* Confirmation message on form submit */}
        {isSubmitted && <p>Thank you for your message!</p>}
        {/* Contact form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
