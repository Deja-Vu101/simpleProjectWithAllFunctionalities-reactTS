import { IPost } from "../types";
import List from "./List";
import PostItem from "./PostItem";
import BigLoader from "./loaders/BigLoader";

interface PostSectionProps {
  showPostDiv: boolean;
  error: any;
  loading: boolean;
  posts: any;
  hiddenStatus: any;
}

const PostSection: React.FC<PostSectionProps> = ({
  showPostDiv,
  error,
  loading,
  posts,
  hiddenStatus,
}) => {
  return (
    <>
      {showPostDiv ?? !error ? (
        loading ? (
          <BigLoader />
        ) : (
          <List
            items={posts}
            renderItem={(posts: IPost) => (
              <PostItem
                key={posts.id}
                post={posts}
                hiddenStatus={hiddenStatus}
              />
            )}
          />
        )
      ) : (
        error
      )}
    </>
  );
};

export default PostSection;
