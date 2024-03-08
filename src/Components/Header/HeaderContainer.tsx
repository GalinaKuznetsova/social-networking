import React from "react";
import Header from "./Header";
import { AuthType, getAuthUserDataThunkCreator} from "../../redux/auth-reducer";
import { AppRootState } from "../../redux/redux-store";
import { connect } from "react-redux"


export class HeaderContainer extends React.Component <MyPostPropsType>{
  componentDidMount() {
   this.props.getAuthUserData()
  }
  render() {
    return <>
    <Header {...this.props}/>
    </>

 };

}
export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType 
type MapStatePropsType = {
  auth: AuthType,
}
type MapDispatchPropsType = {
  getAuthUserData:()=>void
}

let mapStateToProps = (state:AppRootState):MapStatePropsType =>{
  return {
     auth: state.auth
   
}}


export default connect(mapStateToProps,{ getAuthUserData:getAuthUserDataThunkCreator})(HeaderContainer)