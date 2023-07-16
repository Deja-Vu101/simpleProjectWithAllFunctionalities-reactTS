import { IPost } from "../types";

interface DropDownPostUserProps {
  posts: IPost;
  hiddenStatus: any;
}

const DropDownPostUser: React.FC<DropDownPostUserProps> = ({
  posts,
  hiddenStatus,
}) => {
  return (
    <div className="PostItem" hidden={hiddenStatus?.posts}>
      <div className="post">
        <h4 className="post_title">{posts.title}</h4>
        <div>{posts.body}</div>
      </div>
    </div>
  );
};

export default DropDownPostUser;
