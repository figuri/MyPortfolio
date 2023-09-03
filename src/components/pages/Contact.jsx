import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section id='contact'>
            <h2 className="header">Contact</h2>
            {/* confirm message on form submit */}
            {isSubmitted && <p>Thank you for your message!</p>}
            {/* contact form */}
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor='message'>Message:</label>
                <textarea
                    name='message'
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}