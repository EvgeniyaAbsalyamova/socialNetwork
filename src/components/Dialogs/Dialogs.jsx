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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        <DialogItem name="Evgeniya" id="1" />
        <DialogItem name="Eva" id="2" />
        <DialogItem name="Zhenya" id="3" />
      </div>

      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="I love you" />
      </div>
    </div>
  );
};

export default Dialogs;
