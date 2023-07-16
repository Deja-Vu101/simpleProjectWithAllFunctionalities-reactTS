import { useEffect } from "react";
import Users from "./Users";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import Header from "./Header";
import BigLoader from "./loaders/BigLoader";

const Main: React.FC = () => {
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  const { error, loading, users } = useTypedSelector((state) => state.user);

  return (
    <div>
      <Header />
      {loading ? <BigLoader /> : <Users users={users} />}
    </div>
  );
};

export default Main;
