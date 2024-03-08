
import React from 'react'
import { connect } from "react-redux"
// import {Dispatch } from "redux"
import { Users } from "./Users"
import { AppRootState } from "../../redux/redux-store"



import {  SetCurrentPageActionCreator, 
  UserType, 
 followThunkCreator, getUsersThunkCreator, 
  unfollowThunkCreator} from "../../redux/users-reduer"
import { Preloader } from '../common/Preloader/Preloader'





export class UsersAPIComponent extends React.Component<MyPostPropsType> {
  componentDidMount() {

 this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

  onPageChanged = (PageNumber:number)=>{
    this.props.getUsers(PageNumber,this.props.pageSize)
  }

  render() {
    return <>
    {this.props.isFetching 
    ? <Preloader/> 
    : <Users
    {...this.props}
    onPageChanged = {this.onPageChanged.bind(this)}

 
    
 
 />}
      </>
}
}




 type MapDispatchPropsType = {
  follow:(id:number)=>void,
  unfollow:(id:number)=>void,
  setCurrentPage:(PageNumber:number)=>void,
 getUsers:(currentPage:number,pageSize?:number)=>void
  
 }
 export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType 
 type MapStatePropsType = {
  users: UserType[],
  pageSize?: number
  totalCount?:number
  currentPage:number
  isFetching:boolean 
  followingInProgrees:Array<number>
}
let mapStateToProps = (state:AppRootState):MapStatePropsType =>{
    return {
       users: state.usersPage.users,
       pageSize: state.usersPage.pageSize,
       totalCount: state.usersPage.totalCount,
       currentPage: state.usersPage.currentPage,
       isFetching: state.usersPage.isFetching,
       followingInProgrees:state.usersPage.followingInProgrees
    }
}

  //  let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType =>{
  //   return {
  //       follow:(usersId:number)=>{
  //          let action = FollowActionCreator(usersId)
  //          dispatch(action)
  //     },
  //     unfollow:(usersId:number)=>{
  //       let action = UnfollowActionCreator(usersId)
  //     dispatch(action)
  //     },
  //         setUsers:(users:UserType[])=>{
  //       let action = SetUsersActionCreator(users)
  //       dispatch(action)
  //     },
  //     setCurrentPage:(PageNumber:number)=>{
  //       let action = SetCurrentPageActionCreator(PageNumber)
  //       dispatch(action)
  //     },
  //     setTotalUsersCount:(totalCount:number)=>{
  //       let action = setTotalUsersCountActionCreator(totalCount)
  //       dispatch(action)
  //     },
  //     toggleIsFetching:(isFetching:boolean)=>{
  //       let action = setIsFetchingActionCreator(isFetching)
  //       dispatch(action)
  //     },
    
  //   }
  
  // }

export default connect(mapStateToProps,{
setCurrentPage:SetCurrentPageActionCreator,
follow:followThunkCreator,
unfollow:unfollowThunkCreator,
getUsers:getUsersThunkCreator
})(UsersAPIComponent)
