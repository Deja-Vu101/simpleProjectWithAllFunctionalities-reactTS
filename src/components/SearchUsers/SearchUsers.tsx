import React from "react";
import s from "./searchUsers.module.scss";

interface SearchUsersProps {
  inputValue: string;
  onChangeSearchUsers: (name: string) => void;
}

const SearchUsers: React.FC<SearchUsersProps> = ({
  onChangeSearchUsers,
  inputValue,
}) => {
  return (
    <div className={s.SearchUsers}>
      <div className={s.SearchUsers_wrapper}>
        <input
          className={s.SearchUsers_input}
          type="text"
          value={inputValue}
          placeholder="Search users..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeSearchUsers(e.target.value)
          }
        />
      </div>
    </div>
  );
};

export default SearchUsers;
