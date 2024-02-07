import Post from "./Post/Post";
import React, { ChangeEvent } from "react";
import s from "./Post/Post.module.css";
import { MyPostPropsType } from "./MyPostsContainer";

// type MyPostType = {
//   post: PostType[];
//   updateNewPostText: (text: string) => void;
//   addPost: (newPostText: string) => void;
//   newPostText: string;
// };
export const MyPosts = (props: MyPostPropsType) => {
  let postElements = props.post.map((p) => (
    <Post
      message={p.message}
      like={p.like}
      name={p.name}
      title={p.title}
      src={p.src}
    />
  ));

  const onAddPost = () => {
    props.addPost(props.newPostText);
  };
  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    props.updateNewPostText(text);
  };
  return (
    <div>
      <h3> My Posts</h3>
      <div>
        <div className={s.mypostContent}>
          <textarea onChange={onPostChange} value={props.newPostText} />
          <button onClick={onAddPost}>Add post</button>
        </div>
        <div>{postElements}</div>
      </div>
    </div>
  );
};
