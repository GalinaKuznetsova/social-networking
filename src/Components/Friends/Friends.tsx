import React from "react";

import { Friend } from "./Friend/Friend";
import { SideBarType } from "../../redux/sidebar-reducer";

type FriendsType = {
  friends:SideBarType
}

export const Friends:React.FC<FriendsType> = (props) => {
  return (
    <div >
          {/* <div className={s.friends}>
        {props.friends.friends.map((d) => (
          <Friend key={d.id} id={d.id} name={d.name} img={d.img}/>
        ))}
      </div> */}
     
    </div>
  )
}
