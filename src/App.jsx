
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import './styles/App.css';
import Prop from './components/Props';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/dashboard';
import Register from './components/register';
function App(){
  return(
    <Router>
      <nav>
      <Link to = '/' id ='logo'>
      <img id='logo' src = "https://img.freepik.com/free-vector/flat-design-library-logo-design_23-2149324478.jpg?t=st=1740915974~exp=1740919574~hmac=7676595f86a55dc8da6417be5ca3d2160c9326a0844d318af1ab4bc5ff9f7f10&w=1060" alt='logo'/>
      </Link>
      <div id='links'>
        <Link to='/' id='link'>Home</Link>
        <Link to ='/props' id='link'>Props</Link>
        <Link to ='/login' id='link'>Login</Link>
        <Link to ='/register' id='link'>Register</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/props' element = {<Prop/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path = '/register' element = {<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/dashboard/*" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}
export default App;
