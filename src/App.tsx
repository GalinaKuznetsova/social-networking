import React, { useEffect } from "react";
import './App.css'

import { Route, Routes } from "react-router-dom";
import { Music } from "./Components/Music/Music";
import { New } from "./Components/New/New";
import Navbar from "./Components/NavBar/Navbar";
import  UsersAPIComponent from "./Components/Users/UsersContainer";
import  HeaderContainer  from "./Components/Header/HeaderContainer";
import { Login } from "./Components/Login/Login";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import  {ProfileContainer}  from "./Components/Profile/ProfileContainer";





export const App = () => {
   
    
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
          
            <div className='app-wrapper-content'>
            <Navbar />
            <Routes>
                 <Route path= {'/login'} element = {<Login/>}/>
                 <Route path= {'/profile/:userId?'} element = {<ProfileContainer/>}/>
                <Route path={'/dialogs/*'} element ={<DialogsContainer/>}/>
                <Route path={'/users'} element ={<UsersAPIComponent/>}/>
                <Route path= {'/music'} element = {<Music/>}/>
                <Route path= {'/new'} element = {<New/>}/>
                    </Routes>
                

                
             </div> 
        </div>
    )
}