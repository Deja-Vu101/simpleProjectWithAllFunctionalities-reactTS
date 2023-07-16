import { useRef, useState } from "react";
import { IUser } from "../types";
import DropDownUser from "./DropDownUser";
import { useNavigate } from "react-router-dom";
interface UserItemProps {
  user: IUser;

  showPosts: (id: number) => void;
  showTodos: (id: number) => void;
  hiddenStatus: any;
  showTodoDiv: boolean;
  //handleCheckBoxTodo: (id: number) => void;
}

const UserItem: React.FC<UserItemProps> = ({
  user,
  showPosts,
  showTodos,
  hiddenStatus,
  showTodoDiv,
}) => {
  const [hiden, setHiden] = useState(true);

  const refdrop = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== refdrop.current) {
      setHiden(true);
    }
  });

  const navigate = useNavigate();

  const onClickTodoBtn = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    setHiden(!hiden);
    showTodos(id);
  };

  const onClickPostBtn = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    setHiden(!hiden);
    showPosts(id);
  };

  const onClickUser = (id: number) => {
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <div className="userItem_wrapper ">
        <div className="user" onClick={() => onClickUser(user.id)}>
          {user.id} {user.name} live in {user.address.city}. Work in{" "}
          {user.company.name}
          <div className="User_btns">
            <button
              className="custom-btn btn-16"
              onClick={(e) => onClickTodoBtn(user.id, e)}
            >
              Todos
            </button>
            <button
              className="custom-btn btn-16"
              onClick={(e) => onClickPostBtn(user.id, e)}
            >
              Posts
            </button>
          </div>
        </div>
      </div>

      <div className="drop">
        <DropDownUser
          id={user.id}
          hiden={hiden}
          refdrop={refdrop}
          hiddenStatus={hiddenStatus}
          showTodoDiv={showTodoDiv}
        />
      </div>
    </div>
  );
};

export default UserItem;
