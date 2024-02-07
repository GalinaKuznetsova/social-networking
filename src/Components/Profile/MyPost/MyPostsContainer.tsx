import {ActionsPostTypes, AddPostActionType, PostType, addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"
import React from "react"
import { MyPosts } from "./MyPosts"
import { connect } from "react-redux"
import { AppRootState } from "../../../redux/redux-store"
import { Dispatch } from "redux"

type MapStatePropsType ={
  post:PostType[]
  newPostText:string
  
}
 type MapDispatchPropsType = {
  updateNewPostText:(text:string)=>void
  addPost:(newPostText:string)=> void
 }
 export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppRootState):MapStatePropsType =>{
    return {
        post: state.profilePage.post,
        newPostText:state.profilePage.newPostText
   }
}

   let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType =>{
    return {
        updateNewPostText:(text:string)=>{
           let action = updateNewPostTextActionCreator(text)
           dispatch(action)
      },
      addPost:(newPostText:string)=>{
        let action = addPostActionCreator(newPostText)
      dispatch(action)
      }
    }
  
  }

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
