import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginMessageColor, setLoginMessageColor] = useState('red');
    const [emailBorder, setEmailBorder] = useState('#ccc');
    const [passwordBorder, setPasswordEBorder] = useState('#ccc')
    const navigate = useNavigate();
    const handleLogin = function(event){
        event.preventDefault();
        if(!email){
            setLoginError("");
            setEmailError("Please fill the Email first.");
            setEmailBorder("red");
            setPasswordEBorder("#ccc");
            setPasswordError("");
            return;
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setLoginError("");
            setEmailError("invalid Email address.");
            setEmailBorder("red");
            setPasswordEBorder("#ccc");
            setPasswordError("");
            return;
        }
        else if(!password){
            setLoginError("");
            setEmailError("");            
            setEmailBorder("#ccc");
            setPasswordEBorder("red");
            setPasswordError("Fill in the password first");
            return;
        }
        fetch("https://library-management-6x6d.onrender.com/api/user/login", {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            credentials : "include",
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then(function(response){
            if(!response.ok){
                if(response.status === 404){
                    setLoginError("User does not exist! check your inputs and try again.");
                    setLoginMessageColor('red');
                    setPasswordEBorder("#ccc");   
                    setEmailError("");
                    setEmailBorder("#ccc");
                    setPasswordError("");
                    throw new Error("User does not exist! check your inputs and try again.");
            }
            else if(response.status === 500){
                setLoginError("Internal server Error!");
                setEmailError("");
                setPasswordError("");
                setPasswordEBorder("#ccc");
                setEmailBorder("#ccc");
                setLoginMessageColor('red');
                throw new Error("Internal server Error!")
            }
            else if(response.status === 401){
                setLoginError("Authorisation Error")
                setEmailError("")
                setPasswordError("");
                setPasswordEBorder("#ccc");
                setEmailBorder("#ccc");
                setLoginMessageColor('red');
                throw new Error("Authorization Error!");
            }
            return;
        }
        return response.json();
        })
        .then(function(data){
            if(!data){
                setLoginError("Wrong Credentials");
                setLoginMessageColor('red');
                setEmailError("");
                setPasswordError("");
                setPasswordEBorder("#ccc");
                setEmailBorder("#ccc");
                return;
            }
            setLoginError("Login was successfully done!!");
            localStorage.setItem("isLogedIn",true);
            setLoginMessageColor('green');
            setEmailError("");
            setPasswordError("");
            setEmailBorder("#ccc");
            setPasswordEBorder("#ccc");
            setTimeout(function(){
                navigate('/dashboard');
            },4000)
        })
        .catch(function(error){
            console.error("Failed to login: ", error);
            setLoginError("Failed to login");
            setLoginMessageColor('red');
            setEmailError("");
            setPasswordError("");
            setPasswordEBorder("#ccc");
            setEmailBorder("#ccc");
        })

    }
    return(
        <form onSubmit={handleLogin} id='loginForm'>
            <h1 id='signUpHeader' >Login Form</h1>
            <p style={{color: loginMessageColor}}>{loginError} </p>
            <label htmlFor = "Email">Email</label>
            <input type='email' id='email' name = 'email' value={email} placeholder='Enter Email address' style={{borderColor:emailBorder }} onChange={function(values){
                setEmail(values.target.value)
            }}/>
            <p style={{ color: 'red' }}>{emailError} </p>
            <label htmlFor='Passsword'>Password</label>
            <input type='password' id='password' name='password' value={password} placeholder='Enter password' style={{borderColor:passwordBorder }} onChange={function(data){
                setPassword(data.target.value)
            }}/>
            <p style={{ color: 'red' }}>{passwordError}</p>
            <button type='submit' id='submitButton'>Login</button>
        </form>
    )
}
export default Login;