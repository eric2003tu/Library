import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';  // ✅ Correct imports
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import About from './about';
import Notifications from './notifications';
import Profile from './profile';
import '../styles/App.css';
import Posts from './Posts';
import Greeting from './Greeting';
import Fetchusers from './Fetchusers';
import DashHome from './dashHome';
function Dashboard(){
    const navigate = useNavigate();
    if(localStorage.getItem("isLogedIn") !== 'true'){
        navigate('/');
        return;
    }
    else{
return(
    <>
    <nav>
        
        <div id='links'>
        <Link to='/dashboard' id='home'><MdOutlineHome />
        </Link>
        <Link to = '/dashboard/notifications' id='notifications'>
        <IoNotificationsOutline />
        </Link>
        <Link  id='profile' onClick={function(){
            return(
                <div id='pofileLinks'>
                    
                </div>
            )
        }}>
        <CgProfile />
        </Link>
        <div id='dash'>
        <Link to = '/dashboard/about' id='link'>About</Link>
        <Link to='/dashboard/users' id='link'>Users</Link> 
        <Link to ='/dashboard/posts' id='link'>Posts</Link>
        </div>
        <Link to ='/' id='logout' className='logout' onClick={function(event){
            localStorage.setItem("isLogedIn",false);
            navigate('/');
        }}><IoMdLogOut />
        </Link>
        </div>
    </nav>
    <Routes>
        <Route index element = {<DashHome/>}/>
        <Route path ='about' element = {<About/>}/>
        <Route path = 'notifications' element = {<Notifications/>}/>
        <Route path=' profile' element = {<Profile/>}/>
        <Route path = 'users' element = {<Fetchusers/>}/>
        <Route path = 'posts' element = {<Posts/>}/>
        <Route path ='greeting' element = {<Greeting/>}/>
    </Routes>
    </>
);}

}
export default Dashboard;