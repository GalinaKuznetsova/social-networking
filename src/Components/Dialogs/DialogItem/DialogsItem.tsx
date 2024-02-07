import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

type DialogsItemType = {
  id: number;
  name: string;
  img: string;
};

export const DialogsItem: React.FC<DialogsItemType> = (
  props: DialogsItemType
) => {
  return (
    <div>
      <NavLink className={s.navlink} to={"/dialogs" + props.id}>
        <img className={s.img} src={props.img} />
        <span className={s.span}>{props.name}</span>
      </NavLink>
    </div>
  );
};
