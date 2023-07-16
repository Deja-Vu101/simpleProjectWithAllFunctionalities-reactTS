import { IPost } from "../types";

interface PostItemProps {
  post: IPost;
  hiddenStatus?: any;
}

const PostItem: React.FC<PostItemProps> = ({ post, hiddenStatus }) => {
  return (
    <div className="PostItem" hidden={hiddenStatus.post} key={post.id}>
      <div className="post">
        <h4 className="post_title">
          {post.id}. {post.title}
        </h4>
        <div>{post.body}</div>
      </div>
    </div>
  );
};

export default PostItem;
