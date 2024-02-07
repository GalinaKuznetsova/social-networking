import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

type MessagePropsType = {
  title: string;
};
export const Message: React.FC<MessagePropsType> = (
  props: MessagePropsType
) => {
  return (
    <div>
      <div className={s.message}>{props.title}</div>
    </div>
  );
};
