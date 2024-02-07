
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

import { MyPostsContainer } from "./MyPost/MyPostsContainer"


const Profile:React.FC = () => {
    return (
<div className={s.profileContent}>
    <ProfileInfo />
    <MyPostsContainer />
</div>
    )
}
 export default Profile