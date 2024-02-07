
import {S} from "./Navbar_Styles"
import { SideBarType } from "../../redux/sidebar-reducer"


const Navbar:React.FC = (props) => {
    return (
  <S.Navbar>
    <S.Profile to="/profile">Profile</S.Profile>
    <S.News to="/dialogs">Messages</S.News>
    <S.Music to="/music">Music</S.Music>
    <S.Setting to="/setting">Setting</S.Setting>
    <S.Users to="/users">Users</S.Users>
    {/* <Friends friends={props.friends} /> */}
  </S.Navbar>
    )
}
 export default Navbar