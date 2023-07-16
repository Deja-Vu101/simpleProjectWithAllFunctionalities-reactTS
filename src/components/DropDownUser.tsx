import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ITodo } from "../types/types";
import DropDownTodoUser from "./DropDownTodoUser";
import List from "./List";
import { useState } from "react";
import SmallLoaders from "./loaders/SmallLoaders";
import DropDownPostUser from "./DropDownPostUser";
import { IPost } from "../types";

interface DropDownUserProps {
  id: number;
  hiden: boolean;
  refdrop: any;
  hiddenStatus: any;
  showTodoDiv: boolean;
}

const DropDownUser: React.FC<DropDownUserProps> = ({
  id,
  hiden,
  refdrop,
  hiddenStatus,
  showTodoDiv,
}) => {
  const { todos, loading: loadingTodos } = useTypedSelector(
    (state) => state.todo
  );
  const { posts, loading: loadingPosts } = useTypedSelector(
    (state) => state.post
  );

  const handleCheckBoxTodo = (id: number) => {
    //handleTodoCheckbox(id);
  };

  return (
    <div className="dropdown_UserInfo" ref={refdrop}>
      <div className="dropdown_wrapper" hidden={hiden}>
        {loadingTodos ? (
          <SmallLoaders />
        ) : (
          <List
            items={todos}
            renderItem={(todos: ITodo) => (
              <DropDownTodoUser
                key={todos.id}
                todos={todos}
                handleCheckBoxTodo={handleCheckBoxTodo}
                hiddenStatus={hiddenStatus.todo}
              />
            )}
          />
        )}

        {loadingPosts ? (
          <SmallLoaders />
        ) : (
          <List
            items={posts}
            renderItem={(posts: IPost) => (
              <DropDownPostUser
                key={posts.id}
                posts={posts}
                hiddenStatus={hiddenStatus.posts}
              />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default DropDownUser;
