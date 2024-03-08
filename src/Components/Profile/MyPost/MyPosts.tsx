import Post from "./Post/Post";
import React from "react";
import s from "./Post/Post.module.css";
import { MyPostPropsType } from "./MyPostsContainer";
import { InjectedFormProps,Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/valodators";
import { Textarea } from "../../FormControls/FormsControls";

// type MyPostType = {
//   post: PostType[];
//   updateNewPostText: (text: string) => void;
//   addPost: (newPostText: string) => void;
//   newPostText: string;
// };

export const MyPosts = (props: MyPostPropsType) => {
  let postElements = props.post.map((p) => (
    <Post
    key={p.id}
      message={p.message}
      like={p.like}
      name={p.name}
      title={p.title}
      src={p.src}
    />
  ));


  const onSubmit = (formData:AddPostFormValueType) => {
    props.addPost(formData.message);
 }
  return (
    <div>
      <h3> My Posts</h3>
      <div>
      <ReduxAddMessageForm onSubmit={onSubmit}/>
        <div>{postElements}</div>
      </div>
    </div>
  );
};




type AddPostFormValueType = {
  message:string
}


let maxLength10 = maxLengthCreator(10)



export const AddPostForm:React.FC<InjectedFormProps<AddPostFormValueType>>=(props)=>{ 
  return (
  <form onSubmit={props.handleSubmit} className= {s.dialogsSendMessage}>
    <div>
    <Field  placeholder={"Post message"} className={s.dialogTextarea} name={'message'} 
    component = {Textarea} validate={[required,maxLength10]}/>
    </div>
    <div>
    <button className={s.dialogsBtn}>Add post</button>
    </div>
      </form>
  )
}

const ReduxAddMessageForm = reduxForm<AddPostFormValueType>({ form: 'ProfileAddNewPost' })(AddPostForm)