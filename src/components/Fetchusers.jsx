import React, { useState,useEffect } from 'react';
function Fetchusers(){
    const [user,setUser] = useState([]);
    useEffect(function(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        if(!response.ok){
          if(response.status === 404){
            throw new Error("No users");
          }
          else if(response.status === 500){
            throw new Error("internal server error");
          }
        }
        return response.json();
      })
      .then(function(data){
        setUser(data);
      })
      .catch(function(error){
        console.error("an error occured", error);
      })
    },[]);
    return(
      <div>
        <h1>Users</h1>
        <ul>
          {user.map(function(user){
            return(
            <li key={user.id}><strong>{user.name}</strong><br/>
            <span>Email :</span>{user.email}<br/>
            <span>Address</span>${user.address.city},${user.address.street}, ${user.address.zipcode},${user.address.suite}
            </li>);
          })}
        </ul>
      </div>
    )
  }
  export default Fetchusers;