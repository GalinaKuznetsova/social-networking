export type PostType = {
  id: number;
  src: string;
  name: string;
  title: string;
  message: string;
  like: number;
};
export type ProfilePageType = {
  post: PostType[],
newPostText:string
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
    newPostText: "",
  }
export const profileReducer = (state:ProfilePageType = initialState,action:AddPostActionType | updateNewPostTextType ):ProfilePageType => {
    switch(action.type) {
        case 'ADD-POST':{
            const newPost: PostType = {
                id: new Date().getTime(),
                src: "https://img.goodfon.ru/original/2000x1485/5/80/doutzen-kroes-dautcen-krez-2332.jpg",
                name: "Asan",
                title: "post4",
                message: state.newPostText,
                like: 0,
              };
              return {
                ...state,
                post:[...state.post,newPost],
                newPostText :""
              }
              
        }
        case 'UPDATE-NEW-POST-TEXT':{
          return {
            ...state,
            newPostText : action.newText
          }
       
    }
default : return state
    }
}
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export  type updateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>

export type ActionsPostTypes = AddPostActionType | updateNewPostTextType
export const addPostActionCreator=( newPostText:string)=>{
    return {
        type :'ADD-POST',
        newPostText: newPostText
    }as const
  }
  export const updateNewPostTextActionCreator=(text:string)=>{
    return {
        type :'UPDATE-NEW-POST-TEXT',newText:text
    }as const
  }