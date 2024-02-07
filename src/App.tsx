import React from "react";
import './App.css'
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import { DialogsContainer } from "./Components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import { Music } from "./Components/Music/Music";
import { New } from "./Components/New/New";
import Navbar from "./Components/NavBar/Navbar";
import { UsersContainer } from "./Components/Users/UsersContainer";



export const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
          
            <div className='app-wrapper-content'>
            <Navbar />
            <Routes>
            
                <Route path= {'/profile'} element = {<Profile />}/>
                <Route path={'/dialogs/*'} element ={<DialogsContainer/>}/>
                <Route path={'/users'} element ={<UsersContainer/>}/>
                <Route path= {'/music'} element = {<Music/>}/>
                <Route path= {'/new'} element = {<New/>}/>
                    </Routes>
                

                
             </div> 
        </div>
    )
}