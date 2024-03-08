import React, { ChangeEvent } from "react";
import { DialogsItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import  s  from "./Dialogs.module.css";
import { MyPostPropsType } from "./DialogsContainer";
import { InjectedFormProps, reduxForm, Field } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/valodators";
import { Textarea } from "../FormControls/FormsControls";





// type DialogsTypeProps = {
//   message: MessageType[];
//   dialogs: DialogsType[];
//   updateNewMessageText: (text: string) => void;
//   sendMessage: (newMessage: string) => void;
//   newMessageText: string;
// };

export const Dialogs: React.FC<MyPostPropsType> = (props) => {
  // const onSendMessageClick = () => {
  //   props.sendMessage(props.newMessageText);
  // };
  // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   console.log(e.currentTarget.value);
  //   let text = e.currentTarget.value;
  //   props.updateNewMessageText(text);
  // };
  const onSubmit = (formData:AddMessageFormValueType) => {
    console.log(formData)
    // props.updateNewMessageText(formData.message);
    props.sendMessage(formData.message);
 }
  

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
      <ReduxLogiForm onSubmit={onSubmit}/>
    </div>
  );
};
type AddMessageFormValueType = {
  message:string
}




let maxLength10 = maxLengthCreator(10)

export const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormValueType>>=(props)=>{ 
  return (
  <form onSubmit={props.handleSubmit} className= {s.dialogsSendMessage}>
    <div>
    <Field  placeholder={"message"} className={s.dialogTextarea} name={'message'} 
    component = {Textarea} validate={[required,maxLength10]}/>
    </div>
    <div>
    <button className={s.dialogsBtn}>Send</button>
    </div>
      </form>
  )
}

const ReduxLogiForm = reduxForm<AddMessageFormValueType>({ form: 'login' })(AddMessageForm)