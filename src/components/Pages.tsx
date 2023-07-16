import { IoArrowBack, IoArrowForward } from "react-icons/io5";

interface PagesProps {
  page: number;
  setPage: (page: number) => void;
  length: number;
}

const Pages: React.FC<PagesProps> = ({ page, setPage, length }) => {
  return (
    <div className="Pages">
      <button disabled={page == 1} onClick={() => setPage(page - 1)}>
        <IoArrowBack />
      </button>

      <div className="page_number">{page}</div>

      <button onClick={() => setPage(page + 1)} disabled={length == 0}>
        <IoArrowForward />
      </button>
    </div>
  );
};

export default Pages;
