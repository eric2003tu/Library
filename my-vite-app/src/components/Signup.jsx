import React, { useState } from 'react';
import '../styles/Signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [submitError, setSubmitError] = useState('');
    const [emailBorder, setEmailBorder] = useState('#ccc');
    const [passwordBorder, setPasswordEBorder] = useState('#ccc')

    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset errors
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setSubmitError('');

        // Validation logic
        if (!username) {
            setUsernameError('Please enter a username');
            return;
        } else if (username.length <= 2) {
            setUsernameError('Enter a valid username');
            return;
        }

        if (!email) {
            setEmailError('Email cannot be empty');
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Enter a valid email address');
            return;
        }

        if (!password) {
            setPasswordError('Password is required');
            return;
        } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            setPasswordError('Password must be strong and valid');
            return;
        }

        if (!confirmPassword) {
            setConfirmPasswordError('Confirm password first');
            return;
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            return;
        }

        // Submit form
        fetch('https://blogs-authentication.onrender.com/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Could not register the user');
                    } else if (response.status === 500) {
                        throw new Error('Internal server error');
                    } else if (response.status === 409) {
                        throw new Error('User already exists');
                    }
                }
                return response.json();
            })
            .then((data) => {
                setSubmitError('User registered successfully');
                setTimeout(() => setSubmitError(''), 5000);
            })
            .catch((error) => {
                setSubmitError(error.message);
                setTimeout(() => setSubmitError(''), 5000);
            });
    };

    return (
        <form id="signupForm" onSubmit={handleSubmit}>
            <h1 id="signUpHeader">Signup Form</h1>
            {submitError && <p id="submitError" style={{ color: submitError.includes('successfully') ? 'green' : 'red' }}>{submitError}</p>}
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter a username here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <p id="usernameError" style={{ color: 'red' }}>{usernameError}</p>}
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p id="emailError" style={{ color: 'red' }}>{emailError}</p>}
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter the password to be used here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p id="passwordError" style={{ color: 'red' }}>{passwordError}</p>}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-type your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <p id="confirmPasswordError" style={{ color: 'red' }}>{confirmPasswordError}</p>}
            <button type="submit" id="submitButton" name="submit">
                Submit
            </button>
        </form>
    );
}

export default Signup;