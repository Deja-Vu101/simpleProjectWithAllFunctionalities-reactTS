import { ThreeDots } from "react-loader-spinner";

const BigLoader = () => {
  return (
    <div className="overlay">
      <div className="centred_div">
        <ThreeDots />
      </div>
    </div>
  );
};

export default BigLoader;
