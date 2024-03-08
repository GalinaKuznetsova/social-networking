// let rerenderEntireTree = () => {
//   console.log("State changed");
// };

import { ActionsDialogsTypes, dialogsReducer } from "./dialogs-reduer";
import { ActionsPostTypes,profileReducer } from "./profile-reducer";
import { ActionsSidebarTypes, sidebarReducer } from "./sidebar-reducer";

type DialogsType = {
  id: number;
  name: string;
  img: string;
};
type MessageType = {
  id: number;
  message: string;
};
type PostType = {
  id: number;
  src: string;
  name: string;
  title: string;
  message: string;
  like: number;
};
type DialogsPageType = {
    message:MessageType[],
    newMessage: string,
    dialogs:DialogsType[]
}
 type FriendsType = {
    id: number,
    name: string,
    img: string
}
 type ProfilePageType = {
  post: PostType[],
newPostText:string
};
 type SideBarType = {
  friends: FriendsType[];
};
export type StateType = {
  ProfilePage: ProfilePageType;
  DialogsPage: DialogsPageType;
  Sidebar: SideBarType;
};

export type StoreType = {
  _state:StateType,
  _callSubscriber:(_state:StateType)=>void,
  subscribe:(callback:()=>void)=>void,
  getState:()=>StateType,
  dispatch:(action:any)=>void
}
export type ActionType = ActionsPostTypes | ActionsDialogsTypes | ActionsSidebarTypes

// // export const state: StateType = {
// //   ProfilePage: {
// //     post: [
// //       {
// //         id: 1,
// //         src: "https://i.pinimg.com/originals/8e/8a/55/8e8a558f305f3f1bb6aec1d0a2a24e52.jpg",
// //         name: "Alex Lee ",
// //         title: "post1",
// //         message: "Hello",
// //         like: 10,
// //       },
// //       {
// //         id: 2,
// //         src: "https://mykaleidoscope.ru/x/uploads/posts/2023-05/1685075304_mykaleidoscope-ru-p-krasivii-zhenskii-profil-42.jpg",
// //         name: "Linda Lohan ",
// //         title: "post 2",
// //         message: "Bye",
// //         like: 5,
// //       },
// //       {
// //         id: 3,
// //         src: "https://mykaleidoscope.ru/x/uploads/posts/2023-05/1685075304_mykaleidoscope-ru-p-krasivii-zhenskii-profil-42.jpg",
// //         name: "Galina Kuznetsova",
// //         title: "post 3",
// //         message: "Like",
// //         like: 10,
// //       },
// //     ],
// //     newPostText: "",
// //   },
// //   DialogsPage: {
// //     message: [
// //       { id: 1, title: "Hi" },
// //       { id: 2, title: "Hi! What is your name" },
// //       { id: 3, title: "My name is Sasha" },
// //     ],
// //     newMessage: "",
// //     dialogs: [
// //       {
// //         id: 1,
// //         name: "Dimych",
// //         img: "https://img.razrisyika.ru/kart/49/1200/194297-avatarka-9.jpg",
// //       },
// //       {
// //         id: 2,
// //         name: "Anna",
// //         img: "https://img.razrisyika.ru/kart/49/194291-avatarka-3.jpg",
// //       },
// //       {
// //         id: 3,
// //         name: "Victor",
// //         img: "https://sneg.top/uploads/posts/2023-06/1687659366_sneg-top-p-avatarka-dlya-gitkhaba-krasivo-36.jpg",
// //       },
// //       {
// //         id: 4,
// //         name: "Vika",
// //         img: "https://otkritkis.com/wp-content/uploads/2021/10/ava-111.jpg",
// //       },
// //     ],
// //   },
// //   Sidebar: {
// //     friends: [
// //       {
// //         id: 1,
// //         name: "Alina",
// //         img: "https://www.charlescameron.ru/netcat_files/556/797/9d8ddd3d_3f11_420b_aba6_695eb86f7f9b_1.jpg",
// //       },
// //       {
// //         id: 2,
// //         name: "Mishail",
// //         img: "https://i.pinimg.com/originals/0d/29/08/0d2908f2b696795c7df67dda5993fcb1.jpg",
// //       },
// //       {
// //         id: 3,
// //         name: "Karina",
// //         img: "https://img.goodfon.ru/original/2000x1485/5/80/doutzen-kroes-dautcen-krez-2332.jpg",
// //       },
// //     ],
// //   },
// // };

// export const addPost = () => {
//   const newPost: PostType = {
//     id: new Date().getTime(),
//     src: "https://img.goodfon.ru/original/2000x1485/5/80/doutzen-kroes-dautcen-krez-2332.jpg",
//     name: "Asan",
//     title: "post4",
//     message: state.ProfilePage.newPostText,
//     like: 0,
//   };
//   state.ProfilePage.post.push(newPost);
//   state.ProfilePage.newPostText = "";

//   rerenderEntireTree();
// };

// export let updateNewPostText = (newText: string) => {
//   state.ProfilePage.newPostText = newText;
//   rerenderEntireTree();
// };

// export const addMesssage = () => {
//   const newMessage: MessageType = {
//     id: new Date().getTime(),
//     title: state.DialogsPage.newMessage,
//   };
//   state.DialogsPage.message.push(newMessage);
//   state.DialogsPage.newMessage = "";
//   rerenderEntireTree();
// };

// export let updateNewMessageText = (newMessageText: string) => {
//   state.DialogsPage.newMessage = newMessageText;
//   rerenderEntireTree();
// };

// export const subscribe = (observer: any) => {
//   rerenderEntireTree = observer;
// };

// export const store:StoreType = {
//     _state:{
//         ProfilePage: {
//           post: [
//             {
//               id: 1,
//               src: "https://i.pinimg.com/originals/8e/8a/55/8e8a558f305f3f1bb6aec1d0a2a24e52.jpg",
//               name: "Alex Lee ",
//               title: "post1",
//               message: "Hello",
//               like: 10,
//             },
//             {
//               id: 2,
//               src: "https://mykaleidoscope.ru/x/uploads/posts/2023-05/1685075304_mykaleidoscope-ru-p-krasivii-zhenskii-profil-42.jpg",
//               name: "Linda Lohan ",
//               title: "post 2",
//               message: "Bye",
//               like: 5,
//             },
//             {
//               id: 3,
//               src: "https://mykaleidoscope.ru/x/uploads/posts/2023-05/1685075304_mykaleidoscope-ru-p-krasivii-zhenskii-profil-42.jpg",
//               name: "Galina Kuznetsova",
//               title: "post 3",
//               message: "Like",
//               like: 10,
//             },
//           ],
//           newPostText: "",
//         },
//         DialogsPage: {
//           message: [
//             { id: 1, message: "Hi" },
//             { id: 2, message: "Hi! What is your name" },
//             { id: 3, message: "My name is Sasha" },
//           ],
//           newMessage: "",
//           dialogs: [
//             {
//               id: 1,
//               name: "Dimych",
//               img: "https://img.razrisyika.ru/kart/49/1200/194297-avatarka-9.jpg",
//             },
//             {
//               id: 2,
//               name: "Anna",
//               img: "https://img.razrisyika.ru/kart/49/194291-avatarka-3.jpg",
//             },
//             {
//               id: 3,
//               name: "Victor",
//               img: "https://sneg.top/uploads/posts/2023-06/1687659366_sneg-top-p-avatarka-dlya-gitkhaba-krasivo-36.jpg",
//             },
//             {
//               id: 4,
//               name: "Vika",
//               img: "https://otkritkis.com/wp-content/uploads/2021/10/ava-111.jpg",
//             },
//           ],
//         },
//         Sidebar: {
//           friends: [
//             {
//               id: 1,
//               name: "Alina",
//               img: "https://www.charlescameron.ru/netcat_files/556/797/9d8ddd3d_3f11_420b_aba6_695eb86f7f9b_1.jpg",
//             },
//             {
//               id: 2,
//               name: "Mishail",
//               img: "https://i.pinimg.com/originals/0d/29/08/0d2908f2b696795c7df67dda5993fcb1.jpg",
//             },
//             {
//               id: 3,
//               name: "Karina",
//               img: "https://img.goodfon.ru/original/2000x1485/5/80/doutzen-kroes-dautcen-krez-2332.jpg",
//             },
//           ],
//         },
//       },
//       _callSubscriber (_state:StateType) {
//         console.log("State changed");
//       },
//       getState(){
//         return this._state
//       },
   
//       subscribe (callback) {
//         this. _callSubscriber = callback;
//       },   
//       dispatch(action){
//         this._state.ProfilePage = profileReducer(this._state.ProfilePage,action)
//         this._state.DialogsPage = dialogsReducer( this._state.DialogsPage,action)
//         // this._state.Sidebar = sidebarReducer(this._state.Sidebar,action)
//         this. _callSubscriber(this._state);
//       }
// }

