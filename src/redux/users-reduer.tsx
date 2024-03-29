import { Dispatch } from "redux";
import { usersAPI } from "../api/api";
import { AppRootState } from "./redux-store";


export type UserType = {
  id: number;
  name: string;
  photos:{
    small:string,
    large:string
  }
  status:string;
  followed:boolean;
  location?:{
    city:string,
    country:string
  }
 
};

export type UsersPageType = {
users:UserType[],
pageSize:number, 
totalCount:number,
currentPage:number,
isFetching:boolean,
followingInProgrees:Array<number>
};

const inisialState: UsersPageType = {
  users:[],
  pageSize:5,
  totalCount:0,
  currentPage:1,
  isFetching:false,
  followingInProgrees:[]
}; 

export const usersReducer = (
  state: UsersPageType = inisialState,
  action: ActionUsersTypes
): UsersPageType => {
  switch (action.type) {

    case "FOLLOW": {
  
   return {
    ...state,
    users:state.users.map((u)=>u.id === action.id ? {...u,followed:true} : u)
   }
    }
    case "UNFOLLOW": {
    
      return {
        ...state,
        users:state.users.map((u)=>u.id === action.id ? {...u,followed:false} : u)
       }
    }
    case "SET_USERS": {
     
      return {...state, users:[...action.users]}
        }
        case "SET_CURRENT_PAGE": {
          return {...state, currentPage:action.currentPage}
        }
        case "SET_TOTAL_USER_COUNT": {
          return {...state, totalCount:action.totalCount}
        }
        case "TOGGLE_IS_FETCHING":{
          
          return {...state, isFetching:action.isFetching}
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':{
        
          return {...state, 
            followingInProgrees:action.isFetching
            ? [...state.followingInProgrees,action.id]
            :  state.followingInProgrees.filter(id => id !== action.id)}
        }
        

    default:
      return state;
  }
};
export type FollowActionType = ReturnType<typeof FollowActionCreator>;
export type UnfollowActionType = ReturnType< typeof UnfollowActionCreator>;
export type SetUsersActionType = ReturnType< typeof SetUsersActionCreator>;
export type SetCurrentPageActionType = ReturnType<typeof SetCurrentPageActionCreator>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountActionCreator>
export type setIsFetchingActionType = ReturnType<typeof setIsFetchingActionCreator>
export type toggleIsFollowingProgressActionType = ReturnType<typeof toggleIsFollowingProgressActionCreator>

export type ActionUsersTypes = SetUsersActionType
  | FollowActionType
  | UnfollowActionType
  | SetCurrentPageActionType 
  | setTotalUsersCountActionType
  | setIsFetchingActionType
  | toggleIsFollowingProgressActionType;

export const FollowActionCreator = (userId: number) => {
  return {
    type: "FOLLOW",
    id: userId,
  } as const;
};
export const UnfollowActionCreator = (userId: number) => {
  return {
    type: "UNFOLLOW",
    id: userId,
  } as const;
};
export const SetUsersActionCreator = (users:UserType[]) => {
  return {
    type: "SET_USERS",
    users:users
  } as const;
};
 export const SetCurrentPageActionCreator = (currentPage:number)=>{
  return {
    type: "SET_CURRENT_PAGE",
    currentPage:currentPage
  } as const
 }
 export const setTotalUsersCountActionCreator = (totalCount:number)=>{
  return {
    type: "SET_TOTAL_USER_COUNT",
    totalCount:totalCount
  } as const
 }

 export const setIsFetchingActionCreator = (isFetching:boolean)=>{
  return {
    type: "TOGGLE_IS_FETCHING",
    isFetching:isFetching,
    
  } as const
 }

 ///Thunk
 export const toggleIsFollowingProgressActionCreator = (userId: number,isFetching:boolean)=>{
 
  return {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    id:userId,
    isFetching:isFetching,
  } as const
 }

 export  const getUsersThunkCreator = (currentPage:number ,pageSize?:number)=> (dispatch: Dispatch<ActionUsersTypes>, getState: () => AppRootState) =>{
  dispatch(setIsFetchingActionCreator(true))
  usersAPI.getUsers(currentPage,pageSize)
    .then((data) => {
      dispatch(setIsFetchingActionCreator(false))
      dispatch(SetUsersActionCreator(data.items))
      dispatch(setTotalUsersCountActionCreator(data.totalCount))
    });
 }

 export  const unfollowThunkCreator = (id:number)=> (dispatch: Dispatch<ActionUsersTypes>, getState: () => AppRootState) =>{

  dispatch(toggleIsFollowingProgressActionCreator(id,true))
  usersAPI.unfollow(id)
      .then((response) => {
        if(response.data.resultCode === 0){
          dispatch(UnfollowActionCreator(id));
        }
        dispatch(toggleIsFollowingProgressActionCreator(id,false))
      });
      console.log(getState().usersPage.users[1].id)
 }
 export  const followThunkCreator = (id:number)=> (dispatch: Dispatch<ActionUsersTypes>, getState: () => AppRootState) =>{
  dispatch(toggleIsFollowingProgressActionCreator(id,true))
  usersAPI.follow(id)
      .then((response) => {
        if(response.data.resultCode === 0){
          dispatch(FollowActionCreator(id));
        }
        dispatch(toggleIsFollowingProgressActionCreator(id,false))
      });
  console.log(getState().usersPage.users[2].id)
 }