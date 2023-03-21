import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

function Dialogs(props) {
  let state = props.dialogsPage;
  // let newMessageBody = state.newMessageBody;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id++} />
  ));

  if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElements}</div>
      <div className={s.messages}>
        <div> {messagesElements}</div>
        <AddMessageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  );
}

export default Dialogs;
