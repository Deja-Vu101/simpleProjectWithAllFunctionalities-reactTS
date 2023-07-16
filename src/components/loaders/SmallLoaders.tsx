import { RotatingLines } from "react-loader-spinner";

const SmallLoaders = () => {
  return (
    <div className="smallLoader">
      <RotatingLines width="40px" strokeColor="green" />
    </div>
  );
};

export default SmallLoaders;
