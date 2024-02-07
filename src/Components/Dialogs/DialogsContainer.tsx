import React from "react";
import { DialogsPageType, DialogsType, MessageType, sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reduer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux"
import { Dispatch } from "redux";
import { AppRootState } from "../../redux/redux-store";


type MapStatePropsType ={
  dialogs:DialogsType[]
  message:MessageType[]
  newMessageText:string
  
}
 type MapDispatchPropsType = {
  updateNewMessageText:(newMessage:string)=>void
  sendMessage:(text:string)=> void
 }

 export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType
 
let mapStateToProps = (state:AppRootState):MapStatePropsType =>{
 return {
  dialogs: state.dialogsPage.dialogs,
  message:state.dialogsPage.message,
  newMessageText:state.dialogsPage.newMessage
 }
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType=>{
  return {
    updateNewMessageText:(text:string)=>{
      let action = updateNewMessageTextActionCreator(text)
     
              dispatch(action);
    },
    
    sendMessage:(newMessageText:string)=>{
      let action = sendMessageActionCreator(newMessageText)
      dispatch(action)
    }
  }

}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
