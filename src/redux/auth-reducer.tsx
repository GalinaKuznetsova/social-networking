import { Dispatch } from "react"
import { authAPI } from "../api/api"
import { AppRootState } from "./redux-store"

  export type AuthType = {
    userId:number | null,
    email:string | null,
    login:string | null,
    isAuth:boolean
  }

  let initialState:AuthType={
    userId:null,
    email:null,
    login:null,
    isAuth:false
    }
  
  export const authReducer = (state:AuthType = initialState,action:ActionsPostTypes):AuthType => {
      switch(action.type) {
          case 'SET-USER-DATA':{
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
         
  }
    
     
  
  default : return state
      }
  }
  export type setUserDataActionType = ReturnType<typeof setUserDataActionCreator>
 
  export type ActionsPostTypes = setUserDataActionType 
  export const setUserDataActionCreator=(data: AuthType)=>{
      return {
          type :'SET-USER-DATA',
          data: data
      }as const
    }
    export  const getAuthUserDataThunkCreator = ()=> (dispatch: Dispatch<ActionsPostTypes>, getState: () => AppRootState) =>{
      authAPI.me()
          .then((response) => {
            if(response.data.resultCode === 0) {
              dispatch(setUserDataActionCreator(response.data.data))
            }
         
         });
      }