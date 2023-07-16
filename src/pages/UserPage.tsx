import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import BigLoader from "../components/loaders/BigLoader";

const UserPage = () => {
  const { id } = useParams();
  const { fetchUserPage } = useActions();
  const { user, loading } = useTypedSelector((state) => state.user);

  useEffect(() => {
    fetchUserPage(Number(id));
  }, [id]);
  return <div>{loading ? <BigLoader /> : user?.name}</div>;
};

export default UserPage;
