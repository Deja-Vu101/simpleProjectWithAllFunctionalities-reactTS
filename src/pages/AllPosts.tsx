import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IPost } from "../types";
import List from "../components/List";
import PostItem from "../components/PostItem";
import Header from "../components/Header";
import Pages from "../components/Pages";
import EmptyList from "../components/EmptyList";
import BigLoader from "../components/loaders/BigLoader";

const AllPosts: React.FC = () => {
  const { posts, error, loading, page, limit } = useTypedSelector(
    (state) => state.post
  );

  const { fetchPosts, setPostsPage } = useActions();

  useEffect(() => {
    fetchPosts(page, limit);
  }, [page]);

  return (
    <div className="AllPosts">
      <Header />
      {!error ? (
        loading ? (
          <BigLoader />
        ) : (
          <>
            <div className="AllPostItem">
              <List
                items={posts}
                renderItem={(posts: IPost) => (
                  <PostItem key={posts.id} post={posts} hiddenStatus={false} />
                )}
              />
            </div>
            {posts.length == 0 ? <EmptyList title="No more posts!" /> : null}
            <Pages length={posts.length} page={page} setPage={setPostsPage} />
          </>
        )
      ) : (
        error
      )}
    </div>
  );
};

export default AllPosts;
