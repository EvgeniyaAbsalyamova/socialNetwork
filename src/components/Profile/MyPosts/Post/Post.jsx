import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJT6y1iQjNwau1yDm6PUAYeSg-VDw-7UaJjQgsSCuwcOD4HXsNNOd0w_ViDOAkCw71F0&usqp=CAU" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};
export default Post;
