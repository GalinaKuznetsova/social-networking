import React, { ComponentType } from 'react'
import {Profile} from "./Profile"
import { AppRootState } from '../../redux/redux-store';
import { ProfileType, getStatusThunkCreator, getUserProfileThunkCreator, updateStatusThunkCreator} from '../../redux/profile-reducer';
import { connect } from "react-redux"
import { WithRouterHOC } from '../WithRouter';
import { compose } from 'redux';
import { withAutnRedicer } from '../../hoc/withAuthRedirect';




export class ProfileAPIComponent extends React.Component<MyProfilePropsType>{
    componentDidMount() {
       let userId= this.props.params.userId
       if(!userId) {
        userId = 2
       }
       this.props.getUserProfile(userId)
       this.props.getUserStatus(userId)
    }
 
    render(){
        return (<div>
            <Profile {...this.props}  profile={this.props.profile} status= {this.props.status} updateStatus = {this.props.updateStatus} />
            {/* profile={this.props.profile} status= {this.props.status} 
            getUserProfile={this.props.getUserProfile}
            getStatus={this.props.getStatus}
            updateStatus = {this.props.updateStatus} */}
</div>
        )
    }
}



type MapStatePropsType = {
 profile:ProfileType
 isAuth: boolean
 status:string

  }
type MapDispatchPropsType = {
    getUserProfile:(userId:number)=>void  
    getUserStatus:(userId:number)=>void
    updateStatus:(status:string)=>void
  }

  export type MyProfilePropsType = MapStatePropsType & MapDispatchPropsType & { params:any}

let mapStateToProps = (state:AppRootState):MapStatePropsType =>{
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status:state.profilePage.status
      
}}


export const ProfileContainer = compose<ComponentType>(
  connect(mapStateToProps,
    {getUserProfile:getUserProfileThunkCreator,
      getUserStatus:getStatusThunkCreator,
    updateStatus:updateStatusThunkCreator}
 ),
  WithRouterHOC,
  withAutnRedicer)
  (ProfileAPIComponent)