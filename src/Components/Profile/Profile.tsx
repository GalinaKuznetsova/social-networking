
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

import { MyPostsContainer } from "./MyPost/MyPostsContainer"
import { ProfileType } from "../../redux/profile-reducer"

export type ProfileTypeProps = {
    profile:ProfileType
    status:string,
    updateStatus:(status:string)=>void
}

export const Profile:React.FC<ProfileTypeProps> = (props:ProfileTypeProps) => {
 
   return (
<div className={s.profileContent}>
    <ProfileInfo profile = {props.profile} status= {props.status} updateStatus = {props.updateStatus}/>
    <MyPostsContainer />
</div>
    )
}
