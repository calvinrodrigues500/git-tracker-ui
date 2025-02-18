const StatTile = ({ title, value }) => {
  return (
    <div className="flex flex-col border border-gray-200 p-4 flex-auto rounded-lg">
      <h2 className="font-medium text-lg">{title}</h2>
      <p className="font-semibold text-3xl">{value}</p>
    </div>
  );
};

export default StatTile;
