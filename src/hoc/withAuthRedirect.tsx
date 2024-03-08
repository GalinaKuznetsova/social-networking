 import React, { ComponentType } from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"

import { AppRootState } from "../redux/redux-store";


type MapStateProprsType = {
    isAuth:boolean
}
const  mapStateToProps = (state:AppRootState):MapStateProprsType=> {
    return {
        isAuth: state.auth.isAuth
    } 
    }

 export function withAutnRedicer<T>(Component:React.ComponentType<T>){
  const RiderectComponent=(props:MapStateProprsType)=>{
            let {isAuth,...restProps} = props

          if(!isAuth) return <Navigate to = {'/login'}/>

          return <Component  {...restProps as T & {}}/>
  }

     const ConnectAuthRedirectComponent = connect(mapStateToProps)(RiderectComponent);
      return ConnectAuthRedirectComponent
    }    
