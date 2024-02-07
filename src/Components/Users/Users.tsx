/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../Components/asses/img/userPhoto.jpg"
import { MyPostPropsType } from "./UsersContainer";

export type T_UserContainer = MyPostPropsType & { onPageChanged:(PageNumber:number)=>void}
  



export const Users:React.FC<T_UserContainer> = (props: T_UserContainer) => {
  let pages = [];
  if (props.totalCount && props.pageSize !== undefined){
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    for(let i=1; i<=pageCount; i++){
      pages.push(i)
    }
  }
  // className={props.currentPage === p  && s.selectedPage}
  
  return (
    <div>
      <div className= {s.StylePages}>
      {pages.map(p=>
      {return  <div className={ props.currentPage  === p ? s.selectedPage : " " && s.StylePage} onClick={(e)=>{props.onPageChanged(p)}}>{p}</div>
    
      })}
    </div>
    
      {props.usersPage?.users.map(u =>  <div key={u.id} className= {s.usersContent}>
            <div className= {s.usersAva}>
              <div>
                <img src = {u.photos.small != null ? u.photos.small : userPhoto} 
                className={s.usersPhoto} />
              </div>
              {u.followed 
              ? (<button className= {s.userBtn}  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button className= {s.userBtn}  onClick={() => {
                  props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div className={s.usersTextContent}>
              <div className={s.usersName}>
                <span>{u.name}</span> 
                <span>{u.status}</span>
              </div>
              <div>
                <div>{"u.location.country"}</div> <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        
      )}
    </div>
  )
};
