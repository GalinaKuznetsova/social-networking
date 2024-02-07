import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
width: 200px;
display: flex;
flex-direction: column;
padding-left: 20px;
 padding-right: 20px;
/* margin: 0 0 40px 0;*/` 
const Profile = styled(NavLink)`

text-decoration:none;
color: #6d6e71;
font-size: 18px;
margin-right: 15px;
float: left;`
const News =styled(NavLink)`
text-decoration:none;
color: #6d6e71;
font-size: 18px;
margin-right: 15px;
float: left;
`
const Music = styled(NavLink)`
text-decoration:none;
color: #6d6e71;
font-size: 18px;
margin-right: 15px;
float: left;`
const Setting = styled(NavLink)`
text-decoration:none;
color: #6d6e71;
font-size: 18px;
margin-right: 15px;
float: left;`
const Users = styled(NavLink)`
text-decoration:none;
color: #6d6e71;
font-size: 18px;
margin-right: 15px;
float: left;`


export const S = {
  Navbar, 
  Profile,
  News,
  Music,
  Setting,
  Users
}