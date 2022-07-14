import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}> {props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Evgeniya" },
    { id: 2, name: "Eva" },
    { id: 3, name: "Zhenya" },
  ];

  let dialogElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "I love you" },
  ];

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>{dialogElements}</div>

      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
