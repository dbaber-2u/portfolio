import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // JSX
    return (
        <section className="container">
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="contact-row">
                    <label className="contact-label" htmlFor="name">Name: </label>
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>
                <div className="contact-row">
                    <label className="contact-label" htmlFor="email">Email address: </label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>
                <div className="contact-row">
                    <label className="contact-label" htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <br />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;