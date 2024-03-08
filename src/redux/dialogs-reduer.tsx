export type DialogsType = {
  id: number;
  name: string;
  img: string;
};
export type MessageType = {
  id: number;
  message: string;
};

let inisialState = {
  message: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi! What is your name" },
    { id: 3, message: "My name is Sasha" },
  ] as MessageType[],
  // newMessage: "",
  dialogs: [
    {
      id: 1,
      name: "Dimych",
      img: "https://img.razrisyika.ru/kart/49/1200/194297-avatarka-9.jpg",
    },
    {
      id: 2,
      name: "Anna",
      img: "https://img.razrisyika.ru/kart/49/194291-avatarka-3.jpg",
    },
    {
      id: 3,
      name: "Victor",
      img: "https://sneg.top/uploads/posts/2023-06/1687659366_sneg-top-p-avatarka-dlya-gitkhaba-krasivo-36.jpg",
    },
    {
      id: 4,
      name: "Vika",
      img: "https://otkritkis.com/wp-content/uploads/2021/10/ava-111.jpg",
    },
  ] as DialogsType[],
};

export type DialogsPageType = typeof inisialState;  

export const dialogsReducer = (
  state: DialogsPageType = inisialState,
  action: ActionsDialogsTypes
): DialogsPageType => {
  switch (action.type) {
    case "SEND-MESSAGE": {
      const newMessage: MessageType = {
        id: new Date().getTime(),
        message: action.newMessage,
      };
      return {
        ...state,
        message : [...state.message,newMessage],
      }
    
    }
    // case "UPDATE-NEW-MESSAGE-TEXT": {
    //   return {
    //     ...state,
    //     newMessage : action.newMessageText
    //   }
    // }
    default:
      return state;
  }
};
export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>;
// export type updateNewMessageTextType = ReturnType< typeof updateNewMessageTextActionCreator>;
export type ActionsDialogsTypes =
  | SendMessageActionType
  // | updateNewMessageTextType;

export const sendMessageActionCreator = (newMessage: string) => {
  return {
    type: "SEND-MESSAGE",
    newMessage: newMessage,
  } as const;
};
// export const updateNewMessageTextActionCreator = (text: string) => {
//   return {
//     type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: text,
//   } as const;
// };
