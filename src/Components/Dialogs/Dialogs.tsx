import React, { ChangeEvent } from "react";
import { DialogsItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import  s  from "./Dialogs.module.css";
import { MyPostPropsType } from "./DialogsContainer";

// type DialogsTypeProps = {
//   message: MessageType[];
//   dialogs: DialogsType[];
//   updateNewMessageText: (text: string) => void;
//   sendMessage: (newMessage: string) => void;
//   newMessageText: string;
// };

export const Dialogs: React.FC<MyPostPropsType> = (props) => {
  const onSendMessageClick = () => {
    props.sendMessage(props.newMessageText);
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.currentTarget.value);
    let text = e.currentTarget.value;
    props.updateNewMessageText(text);
  };
  return (
    <div>
      <div className={s.dialogsContent}>
        <div>
          {props.dialogs.map((d) => (
            <DialogsItem key={d.id} id={d.id} name={d.name} img={d.img} />
          ))}
        </div>
        <div>
          {props.message.map((m) => (
            <Message key={m.id} title={m.message} />
          ))}
        </div>
      </div>
      <div className= {s.dialogsSendMessage}>
      <textarea value={props.newMessageText} onChange={onNewMessageChange} className={s.dialogTextarea} />
      <button className={s.dialogsBtn} onClick={onSendMessageClick}>Send</button>
      </div>
     
    </div>
  );
};
