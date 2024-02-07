
import React from 'react'
import { connect } from "react-redux"
import {Dispatch } from "redux"
import { Users } from "./Users"
import { AppRootState } from "../../redux/redux-store"

import axios from "axios";

import { FollowActionCreator, SetCurrentPageActionCreator, SetUsersActionCreator, UnfollowActionCreator, UserType, UsersPageType, setIsFetchingActionCreator, setTotalUsersCountActionCreator } from "../../redux/users-reduer"
import { Preloader } from '../common/Preloader/Preloader'

export type T_UsersProps = {
  onPageChanged:(PageNumber:number)=>void
}


export class UsersAPIComponent extends React.Component<MyPostPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = (PageNumber:number)=>{
    this.props.setCurrentPage(PageNumber)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${PageNumber}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items)
    })
  }
  render() {
    return <>
    {this.props.isFetching 
    ? <Preloader/> 
    : <Users usersPage={this.props.usersPage} 
    follow={this.props.follow}
    unfollow={this.props.unfollow }
    setUsers={this.props.setUsers} 
    pageSize = {this.props.pageSize}
    totalCount={this.props.totalCount}
    currentPage={this.props.currentPage}
    onPageChanged = {this.onPageChanged}
    setCurrentPage={this.props.setCurrentPage}
    setTotalUsersCount={this.props.setTotalUsersCount}
    toggleIsFetching = {this.props.toggleIsFetching}
    isFetching={this.props.isFetching}
 />}
    
    </>
    //  <Users {...this.props}  />;
}
}

export type UsersAllTypeProps = MyPostPropsType &  {onPageChanged:(PageNumber:number)=>void}

type MapStatePropsType = {
  usersPage: UsersPageType | undefined,
  pageSize:number | undefined,
  totalCount:number| undefined
  currentPage:number | undefined
  isFetching:boolean  | undefined
}

 type MapDispatchPropsType = {
   follow:(usersId:number)=>void
   unfollow:(usersId:number)=> void
   setUsers:(users:UserType[])=>void
   setCurrentPage:(PageNumber:number)=>void
   setTotalUsersCount:(totalCount:number)=>void  
   toggleIsFetching:(isFetching:boolean)=>void
 }
 export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType 

let mapStateToProps = (state:AppRootState):MapStatePropsType =>{
    return {
       usersPage: state.usersPage,
       pageSize: state.usersPage?.pageSize,
       totalCount: state.usersPage?.totalCount,
       currentPage: state.usersPage?.currentPage,
       isFetching: state.usersPage?.isFetching
}}

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

export const UsersContainer = connect(mapStateToProps,{
  follow:FollowActionCreator,
  unfollow:UnfollowActionCreator,
  setUsers:SetUsersActionCreator,
  setCurrentPage:SetCurrentPageActionCreator,
  setTotalUsersCount:setTotalUsersCountActionCreator,
  toggleIsFetching:setIsFetchingActionCreator
})(UsersAPIComponent)
