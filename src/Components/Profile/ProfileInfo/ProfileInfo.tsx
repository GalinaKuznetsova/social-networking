import { Preloader } from "../../common/Preloader/Preloader"
import { MyProfilePropsType } from "../ProfileContainer"
import s from "./../Profile.module.css"
import userPhoto from "../../../Components/asses/img/userPhoto.jpg"
import { ProfileStatus} from "./ProfileStatus"
import { ProfileTypeProps } from "../Profile"



const ProfileInfo:React.FC<ProfileTypeProps> = (props:ProfileTypeProps) => {
    if(!props.profile) {
        return <Preloader/>
    }
   
    return (
<div>
    <div>
    <img className={s.profilePhoto} src="https://www.stanislavmironov.com/wp-content/uploads/2020/01/modelnye-testy-i-snepy-v-moskve-primery-foto-pozy-czena-za-semku.-semka-modelnyh-testov-fotograf-i-prepodavatel-stanislav-mironov.-avtorskij-blog-i-kurs-obucheniya-pozirovaniyu-dlya-foto-10.jpg"/>
    <ProfileStatus   profile = {props.profile} status={props.status} updateStatus={props.updateStatus}/>
    <div className={s.userContent}>
        <div>
        < img className={s.userPhoto} src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large}/>
        </div>
        <div className={s.abouteUsers}>
            <span>Fullname: {props.profile.fullName}</span>
            <span>{props.profile.lookingForAJob}</span>
            <span>{props.profile.lookingForAJobDescription}</span>
            <span>{props.profile.contacts.facebook}</span>
            <span>{props.profile.contacts.instagram}</span>
            <span>{props.profile.contacts.twitter}</span>
            <span>{props.profile.contacts.website}</span>
            <span>{props.profile.contacts.youtube}</span>
            <span>{props.profile.contacts.mainLink}</span>
        </div>

    </div>

        ava+description
    </div>
</div>
    )
}
 export default ProfileInfo