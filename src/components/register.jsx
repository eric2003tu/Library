import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Register(){
        const [Fname, setFname] = useState('');
        const [Lname, setLname] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [phone, setPhone] = useState('');
        const [gender , setGender] = useState('');
        const [confirmpassword,setConfirmpassword] = useState('');
        const [FnameBorder , setFnameBorder] = useState('#ccc');
        const [LnameBorder, setLnameBorder] = useState('#ccc');
        const [emailBorder, setEmailBorder] = useState('#ccc');
        const [passwordBorder, setPasswordEBorder] = useState('#ccc');
        const [phoneBorder, setPhoneBorder] = useState('#ccc');
        const [confirmpasswordBorder, setConfirmpasswordBorder] = useState('#ccc');
        const [FnameError , setFnameError] = useState('');
        const [LnameError , setLnameError] = useState('');
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [confirmpasswordError, setConfirmpasswordError] = useState('');
        const [phoneError, setPhoneError] = useState('');
        const [genderError, setGenderError] = useState ('');
        const [registerMessage, setRegisterMessage] = useState('');
        const [errorColor, setErrorColor] = useState('red');
        const navigate = useNavigate();

    const handleRegister = function(event){
        event.preventDefault();
        if(!Fname){
            setFnameError('Please this field must be filled first!');
            setLnameError('');
            setFnameBorder('red');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if(!Lname){
            setFnameError('');
            setLnameError('Please this field must be filled first!');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('red');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return; 
        }
        else if(!email){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('Please this field must be filled first!');
            setEmailBorder('red');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return; 
        }
        else if((!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('Enter a valid Email address!');
            setEmailBorder('red');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return; 
        }
        else if(!password){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('Please this field must be filled first!');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if (!/[a-z]/.test(password)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('You are missing a lower case letter in your password.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if (!/[A-Z]/.test(password)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('You are missing an uppercase letter in your password.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if(!/[0-9]/.test(password)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('You are missing atleast one digit in your password.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('You are missing a special character in your password.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if(password.length < 6){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('password must be at least 6 characters long.');
            setPasswordEBorder('red');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if(!phone){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('Please this field must be filled first!');
            setPhoneBorder('red');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if (!/^\+?\d{10,15}$/.test(phone)){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('Enter a valid phone number');
            setPhoneBorder('red');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if(!confirmpassword){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('Confirm password first');
            setConfirmpasswordBorder('red');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if(confirmpassword !== password){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('Password do not match, re-type your password correctly!');
            setConfirmpasswordBorder('red');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        else if(!gender){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('select the gender first.');
            setRegisterMessage('');
            setErrorColor('red');
            return;
        }
        fetch('https://library-management-6x6d.onrender.com/api/user/register',{
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username: Fname,
                email: email,
                phone: phone,
                password: password,
            }),
        })
        .then(function(response){
            if(!response.ok){
                if(response.status === 404){
                    setFnameError('');
                    setLnameError('');
                    setFnameBorder('#ccc');
                    setLnameError('');
                    setLnameBorder('#ccc');
                    setEmailError('');
                    setEmailBorder('#ccc');
                    setPasswordError('');
                    setPasswordEBorder('#ccc');
                    setConfirmpasswordError('');
                    setConfirmpasswordBorder('#ccc');
                    setPhoneError('');
                    setPhoneBorder('#ccc');
                    setGenderError('');
                    setRegisterMessage('Invalid requests');
                    setErrorColor('red');
                    throw new Error("Invalid requests.");
                }
                else if(response.status === 500){
                    setFnameError('');
                    setLnameError('');
                    setFnameBorder('#ccc');
                    setLnameError('');
                    setLnameBorder('#ccc');
                    setEmailError('');
                    setEmailBorder('#ccc');
                    setPasswordError('');
                    setPasswordEBorder('#ccc');
                    setConfirmpasswordError('');
                    setConfirmpasswordBorder('#ccc');
                    setPhoneError('');
                    setPhoneBorder('#ccc');
                    setGenderError('');
                    setRegisterMessage('Internal server error');
                    setErrorColor('red');
                    throw new Error("Internal server error");
                }
                else if(response.status === 200){
                    setFnameError('');
                    setLnameError('');
                    setFnameBorder('#ccc');
                    setLnameError('');
                    setLnameBorder('#ccc');
                    setEmailError('');
                    setEmailBorder('#ccc');
                    setPasswordError('');
                    setPasswordEBorder('#ccc');
                    setConfirmpasswordError('');
                    setConfirmpasswordBorder('#ccc');
                    setPhoneError('');
                    setPhoneBorder('#ccc');
                    setGenderError('');
                    setRegisterMessage('User already Exists');
                    setErrorColor('red');
                    throw new Error("User already exists");
                }
                return;
            }
            return response.json();
        })
        .then(function(data){
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('Registration was successful!');
            setErrorColor('green');
            setTimeout(function(){
                setRegisterMessage('');
                navigate('/login');
            },7000)
            return;
        })
        .catch(function(error){
            console.error("Failed to register the user: ", error);
            setFnameError('');
            setLnameError('');
            setFnameBorder('#ccc');
            setLnameError('');
            setLnameBorder('#ccc');
            setEmailError('');
            setEmailBorder('#ccc');
            setPasswordError('');
            setPasswordEBorder('#ccc');
            setConfirmpasswordError('');
            setConfirmpasswordBorder('#ccc');
            setPhoneError('');
            setPhoneBorder('#ccc');
            setGenderError('');
            setRegisterMessage('Failed to register the user');
            setErrorColor('red');
            return;
        });
    }
    return(
        <form onSubmit={handleRegister} id="signupForm">
            <h1 id='signUpHeader'>Registration Form</h1>
            <p style={{color: errorColor}}>{registerMessage}</p>
            <label htmlFor='Fname'>FastName</label>
            <input type='text' name='Fname' value={Fname} placeholder='Enter the firstname' onChange={function(data){
                setFname(data.target.value)
            }} style={{borderColor: FnameBorder}}/>
            <p style={{color: errorColor}}>{FnameError}</p>
            <label htmlFor='Lname'>LastName</label>
            <input type='text' name='Lname' placeholder='Enter the last name' value={Lname} onChange={function(data){
                setLname(data.target.value)
            }} style={{borderColor: LnameBorder}}/>
            <p style={{color: errorColor}}>{LnameError}</p>
            <input type='email' name='email' placeholder='Enter your email' value={email} onChange={function(data){
                setEmail(data.target.value)
            }} style={{borderColor: emailBorder}}/>
            <p style={{color: errorColor}}>{emailError}</p>
            <label htmlFor='phone'>phone</label>
            <input type='tel' name='phone' placeholder='Enter your phone number' value={phone} onChange={function(data){
                setPhone(data.target.value)
            }} style={{borderColor: phoneBorder}}/>
            <p style={{color: errorColor}}>{phoneError}</p>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Enter password' value={password} onChange={function(data){
                setPassword(data.target.value)
            }} style={{borderColor: passwordBorder}}/>
            <p style={{color: errorColor}}>{passwordError}</p>
            <label htmlFor='confirmPassword'>Confirm password</label>
            <input type='password' name='confirmPassword' placeholder='Re-type your password' value={confirmpassword} onChange={function(data){
                setConfirmpassword(data.target.value)
            }} style={{borderColor: confirmpasswordBorder}}/>
            <p style={{color: errorColor}}>{confirmpasswordError}</p>
            <p><input type='radio' name='gender' value='Male' onChange={function(data){
                setGender(data.target.value)
            }}/> Male &nbsp;&nbsp; <input type='radio' name='gender' value='Female' onChange={function(data){
                setGender(data.target.value)
            }}/> Female </p>
            <p style={{color: errorColor}}>{genderError}</p>
            <button type='submit' id="submitButton" name="submit">Register</button>
        </form>
    )
    
}
export default Register;
