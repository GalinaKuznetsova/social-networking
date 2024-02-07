import s from './Post.module.css'


type PostTypeProps = {
  name:string
  title: string;
  src: string;
  message: string;
  like: number;
};
const Post: React.FC<PostTypeProps> = (props) => {
  return (
    <div className={s.mypost}>
      <div className={s.mypostTextContent}>
        <div className= {s.mypostAva}>
        <img className={s.mypostPhoto} src = {props.src} />
      <span className={s.name}>{props.name}</span>
        </div>
      <span><img className= {s.mypostIcons} src="https://catherineasquithgallery.com/uploads/posts/2023-02/thumbs/1676524263_catherineasquithgallery-com-p-znachki-na-zelenom-fone-48.png"/>{props.like}</span>
      </div>
      <div className={s.mypostMessage}>
        <div>
        {props.message}
        </div>
        <div>
       {props.title}
      </div>
        </div>
    </div>
  );
};
export default Post;
