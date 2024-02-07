import s from './../Friends.module.css'

type FriendProps = {
    id: number;
    name: string;
    img:string
};
export const Friend: React.FC<FriendProps> = (props) => {
  return (
    <div className={s.friend}>
      <div>
      <img className={s.img} src={props.img}/>
            <span className= {s.span}>
            {props.name}
            </span>
      </div>
    </div>
  )
}