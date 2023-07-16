interface EmptyListProps {
  title: string;
}

const EmptyList: React.FC<EmptyListProps> = ({ title }) => {
  return <div className="EmptyList">{title}</div>;
};

export default EmptyList;
