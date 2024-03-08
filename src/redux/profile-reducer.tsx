import { Dispatch } from "redux";
import { ActionUsersTypes } from "./users-reduer";
import { AppRootState } from "./redux-store";
import { profileAPI, usersAPI } from "../api/api";

export type PostType = {
  id: number;
  src: string;
  name: string;
  title: string;
  message: string;
  like: number;
};
export type ProfileType = {
aboutMe:string
contacts:{facebook: string, website: string, vk:string, twitter:string, instagram: string,youtube:string,mainLink:string}
fullName:string
lookingForAJob:boolean
lookingForAJobDescription:string
photos:{small:string, large: string}
userId: number
}
export type ProfilePageType = {
  post: PostType[],
// newPostText:string,
status:string,
profile:ProfileType
};
let initialState:ProfilePageType={
    post: [
      {
        id: 1,
        src: "https://i.pinimg.com/originals/8e/8a/55/8e8a558f305f3f1bb6aec1d0a2a24e52.jpg",
        name: "Alex Lee ",
        title: "post1",
        message: "Hello",
        like: 10,
      },
      {
        id: 2,
        src: "https://mykaleidoscope.ru/x/uploads/posts/2023-05/1685075304_mykaleidoscope-ru-p-krasivii-zhenskii-profil-42.jpg",
        name: "Linda Lohan ",
        title: "post 2",
        message: "Bye",
        like: 5,
      },
      {
        id: 3,
        src: "https://mykaleidoscope.ru/x/uploads/posts/2023-05/1685075304_mykaleidoscope-ru-p-krasivii-zhenskii-profil-42.jpg",
        name: "Galina Kuznetsova",
        title: "post 3",
        message: "Like",
        like: 10,
      },
    ],
    // newPostText: "",
    profile:{
      aboutMe:"",
  contacts:{facebook: "", website: "", vk:"", twitter:"", instagram: "",youtube:"",mainLink:""},
  fullName:"",
  lookingForAJob:true,
  lookingForAJobDescription:"",
  photos:{small:"", large: ""},
  userId: 0
    },
    status:''
  }

export const profileReducer = (state:ProfilePageType = initialState,action:ActionsPostTypes):ProfilePageType => {

  switch(action.type) {
        case 'ADD-POST':{
            const newPost: PostType = {
                id: new Date().getTime(),
                src: "https://img.goodfon.ru/original/2000x1485/5/80/doutzen-kroes-dautcen-krez-2332.jpg",
                name: "Asan",
                title: "post4",
                message: action.newPostText,
                like: 0,
              };
              return {
                ...state,
                post:[...state.post,newPost],
                // newPostText :""
              }
              
        }
    //     case 'UPDATE-NEW-POST-TEXT':{
    //       return {
    //         ...state,
    //         newPostText : action.newText
    //       }
    // }
    case 'SET-USER-PROFILE':{
      return {
        ...state,
        profile : action.profile
      }
}
case 'SET-STATUS': {
  return {
    ...state,
    status:action.status
  }
}

  
   

default : return state
    }
}
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
// export  type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>
export type SetUserProfileActionType = ReturnType<typeof setUserProfileActionCreator>
export type SetStatusActionType = ReturnType<typeof setSatusActionCreator>

export type ActionsPostTypes =
 AddPostActionType 
//  | UpdateNewPostTextType 
 | SetUserProfileActionType
 | SetStatusActionType
export const addPostActionCreator=( newPostText:string)=>{
    return {
        type :'ADD-POST',
        newPostText: newPostText
    }as const
  }
  // export const updateNewPostTextActionCreator=(text:string)=>{
  //   return {
  //       type :'UPDATE-NEW-POST-TEXT',newText:text
  //   }as const
  // }

  export const setUserProfileActionCreator=(profile:ProfileType)=>{
    return {
        type :'SET-USER-PROFILE', profile:profile
    }as const
  }

  export function setSatusActionCreator(status: string) {
  return {
    type: 'SET-STATUS', status: status
  } as const;
}

  export  const getUserProfileThunkCreator = (userId:number)=> (dispatch: Dispatch<ActionsPostTypes>, getState: () => AppRootState) =>{
   usersAPI.getProfile(userId)
      .then((response) => {
        dispatch(setUserProfileActionCreator(response.data))
      
      });
   }



  export  const getStatusThunkCreator = (userId:number)=> 
  (dispatch: Dispatch<ActionsPostTypes>, getState: () => AppRootState) =>{
    profileAPI.getStatus(userId)
       .then((response) => {
         dispatch(setSatusActionCreator(response.data))
       
       });
    }

    export  const updateStatusThunkCreator = (status:string)=> 
    (dispatch: Dispatch<ActionsPostTypes>, getState: () => AppRootState) =>{
      profileAPI.updateSatus(status)
         .then((response) => {
          if(response.data.resultCode === 0){
            dispatch(setSatusActionCreator(status))
           
          }         
         });
      }