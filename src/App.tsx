import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import AllTodos from "./pages/AllTodos";
import AllPosts from "./pages/AllPosts";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/todos" element={<AllTodos />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  );
}

export default App;
