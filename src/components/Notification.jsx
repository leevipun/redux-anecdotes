import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  console.log("Huomautus", notification);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  setTimeout(() => {
    dispatch(clearNotification());
  }, 3000);

  if (notification !== "") {
    return <div style={style}>{notification}</div>;
  }
};

export default Notification;
