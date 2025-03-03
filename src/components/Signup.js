import React from 'react';
import '../styles/Signup.css';
function Signup(){
    const signup = function(event){
        event.preventDefault();
        const username = document.getElementById("username").value.trim(); 
        const email = document.getElementById("email").value.trim();
        const password =document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const usernameError = document.getElementById("usernameError");
        const emailerror = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");
        const submitError = document.getElementById("submitError");
        if(!username){
            usernameError.textContent = "Please enter a username";
            usernameError.style.display = "block";
            usernameError.style.color = "red";
            emailerror.style.display = "none";
            passwordError.style.display = "none";
            confirmPasswordError.style.display = "none"
            submitError.style.display = "none";
            document.getElementById("username").style.borderColor = "red";
            document.getElementById("email").style.borderColor = "#ccc";
            document.getElementById("password").style.borderColor = "#ccc";
            document.getElementById("confirmPassword").style.borderColor = "#ccc"; 
            return;
        }
        else if(username.length <=2){
            usernameError.textContent = "Entaer a valid username";
            usernameError.style.display = "block";
            usernameError.style.color = "red";
            emailerror.style.display = "none";
            passwordError.style.display = "none";
            confirmPasswordError.style.display = "none"
            submitError.style.display = "none";
            document.getElementById("username").style.borderColor = "red";
            document.getElementById("email").style.borderColor = "#ccc";
            document.getElementById("password").style.borderColor = "#ccc";
            document.getElementById("confirmPassword").style.borderColor = "#ccc"; 
            return;
        }
        else if(!email){
            usernameError.style.display = "none";
            emailerror.style.display = "block";
            emailerror.style.color = "red";
            emailerror.textContent = "Email can not be Empty.";
            passwordError.style.display = "none";
            confirmPasswordError.style.display = "none"
            submitError.style.display = "none";
            document.getElementById("username").style.borderColor = "#ccc";
            document.getElementById("email").style.borderColor = "red";
            document.getElementById("password").style.borderColor = "#ccc";
            document.getElementById("confirmPassword").style.borderColor = "#ccc"; 
            return;
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            usernameError.style.display = "none";
            emailerror.style.display = "block";
            emailerror.style.color = "red";
            emailerror.textContent = "Enter a valid email address.";
            passwordError.style.display = "none";
            confirmPasswordError.style.display = "none"
            submitError.style.display = "none";
            document.getElementById("username").style.borderColor = "#ccc";
            document.getElementById("email").style.borderColor = "red";
            document.getElementById("password").style.borderColor = "#ccc";
            document.getElementById("confirmPassword").style.borderColor = "#ccc"; 
            return;
        }
        else if(!password){
            usernameError.style.display = "none";
            emailerror.style.display = "none";
            passwordError.style.color = "red";
            passwordError.textContent = "Password is required.";
            passwordError.style.display = "block";
            confirmPasswordError.style.display = "none"
            submitError.style.display = "none";
            document.getElementById("username").style.borderColor = "#ccc";
            document.getElementById("email").style.borderColor = "#ccc";
            document.getElementById("password").style.borderColor = "red";
            document.getElementById("confirmPassword").style.borderColor = "#ccc"; 
            return;
        }
        else if(!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/^[a-zA-Z0-9]/.test(password) || !/[0-9]/.test(password)){
            usernameError.style.display = "none";
            emailerror.style.display = "none";
            passwordError.style.color = "red";
            passwordError.textContent = "Password must be strong and valid.";
            passwordError.style.display = "block";
            confirmPasswordError.style.display = "none"
            submitError.style.display = "none";
            document.getElementById("username").style.borderColor = "#ccc";
            document.getElementById("email").style.borderColor = "#ccc";
            document.getElementById("password").style.borderColor = "red";
            document.getElementById("confirmPassword").style.borderColor = "#ccc"; 
            return;
        }
        else if(!confirmPassword){
            usernameError.style.display = "none";
            emailerror.style.display = "none";
            confirmPasswordError.style.color = "red";
            confirmPasswordError.textContent = "Confirm password First";
            passwordError.style.display = "none";
            confirmPasswordError.style.display = "block"
            submitError.style.display = "none";
            document.getElementById("username").style.borderColor = "#ccc";
            document.getElementById("email").style.borderColor = "#ccc";
            document.getElementById("password").style.borderColor = "#ccc";
            document.getElementById("confirmPassword").style.borderColor = "red"; 
            return;
        }
        else if(confirmPassword !== password){
            usernameError.style.display = "none";
            emailerror.style.display = "none";
            confirmPasswordError.style.color = "red";
            confirmPasswordError.textContent = "Passwords do not match";
            passwordError.style.display = "none";
            confirmPasswordError.style.display = "block"
            submitError.style.display = "none";
            document.getElementById("username").style.borderColor = "#ccc";
            document.getElementById("email").style.borderColor = "#ccc";
            document.getElementById("password").style.borderColor = "#ccc";
            document.getElementById("confirmPassword").style.borderColor = "red"; 
            return;
        }
        fetch("https://blogs-authentication.onrender.com/user/register",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify ({
                username: username,
                email: email,
                password: password, 
            }),
        })
        .then(function(response){
            if(!response.ok){
                if(response.status === 404){
                    usernameError.style.display = "none";
                    emailerror.style.display = "none";
                    passwordError.style.display = "none";
                    submitError.textContent = "Could not register the user";
                    confirmPasswordError.style.display = "none";
                    submitError.style.display = "block";
                    submitError.style.color = "red";
                    document.getElementById("username").style.borderColor = "#ccc";
                    document.getElementById("email").style.borderColor = "#ccc";
                    document.getElementById("password").style.borderColor = "#ccc";
                    document.getElementById("confirmPassword").style.borderColor = "none";
                    setTimeout(function(){
                        submitError.style.display = "none";
                    },5000) 
                    throw new Error("Could not register the user");
                }
                else if(response.status === 500){
                    usernameError.style.display = "none";
                    emailerror.style.display = "none";
                    passwordError.style.display = "none";
                    submitError.textContent = "Internaml server error";
                    confirmPasswordError.style.display = "none";
                    submitError.style.display = "block";
                    submitError.style.color = "red";
                    document.getElementById("username").style.borderColor = "#ccc";
                    document.getElementById("email").style.borderColor = "#ccc";
                    document.getElementById("password").style.borderColor = "#ccc";
                    document.getElementById("confirmPassword").style.borderColor = "none";
                    setTimeout(function(){
                        submitError.style.display = "none";
                    },5000) 
                    throw new Error("Internal server error");
                }
                else if(response.status === 409){
                    usernameError.style.display = "none";
                    emailerror.style.display = "none";
                    passwordError.style.display = "none";
                    submitError.textContent = "User already exists.";
                    confirmPasswordError.style.display = "none";
                    submitError.style.display = "block";
                    submitError.style.color = "red";
                    document.getElementById("username").style.borderColor = "#ccc";
                    document.getElementById("email").style.borderColor = "#ccc";
                    document.getElementById("password").style.borderColor = "#ccc";
                    document.getElementById("confirmPassword").style.borderColor = "none";
                    setTimeout(function(){
                        submitError.style.display = "none";
                    },5000) 
                }
            }
            return response.json();
        })
        .then(function(data){
            if(data.ok)
{                        usernameError.style.display = "none";
                emailerror.style.display = "none";
                passwordError.style.display = "none";
                submitError.textContent = "User registered successfully";
                confirmPasswordError.style.display = "block";
                submitError.style.display = "block";
                submitError.style.color = "green";
                document.getElementById("username").style.borderColor = "#ccc";
                document.getElementById("email").style.borderColor = "#ccc";
                document.getElementById("password").style.borderColor = "#ccc";
                document.getElementById("confirmPassword").style.borderColor = "none";
                setTimeout(function(){
                    submitError.style.display = "none";
                },5000) 
            
    }})
        .catch(function(error){
            console.error("Failed to submit the form: ",error);
            usernameError.style.display = "none";
            emailerror.style.display = "none";
            passwordError.style.display = "none";
            submitError.textContent = "Failed to submit the form";
            confirmPasswordError.style.display = "none";
            submitError.style.display = "block";
            submitError.style.color = "red";
            document.getElementById("username").style.borderColor = "#ccc";
            document.getElementById("email").style.borderColor = "#ccc";
            document.getElementById("password").style.borderColor = "#ccc";
            document.getElementById("confirmPassword").style.borderColor = "none";
            setTimeout(function(){
                submitError.style.display = "none";
            },5000) 
        });
    }
    return(
        <form id='signupForm' onSubmit={signup}>
            <h1 id='signUpHeader'>Signup Form</h1>
            <p id='submitError'></p>
            <label htmlFor ='Username'>Username</label>
            <input type='text' id='username' name='Username' placeholder='Enter a username here'/>
            <p id='usernameError'></p>
            <label htmlFor ='Email'>Email</label>
            <input type='email' id='email' name='Email' placeholder='Enter oyur email here'/>
            <p id='emailError'></p>
            <label htmlFor = 'Password'>Password</label>
            <input type = 'password' id='password' name='password' placeholder='Enter the password to be used here'/>
            <p id='passwordError'></p>
            <label htmlFor ='ponfirmpassword'>Confirm password</label>
            <input type='password' id='confirmPassword' name = 'Confirmpassword' placeholder=' Re-type your password'/>
            <p id='confirmPasswordError'></p>
            <button type='submit' id='submitButton' name='submit'>Submit</button>

        </form>
    )
}
export default Signup;