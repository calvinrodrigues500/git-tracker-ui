import { Button } from './';

const OverviewTile = () => {
  return (
    <div className="flex-auto border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h2>Overview</h2>
        <div className="flex gap-2">
          <Button />
          <Button />
          <Button />
        </div>
      </div>
      <h2>12000</h2>
    </div>
  );
};

export default OverviewTile;
