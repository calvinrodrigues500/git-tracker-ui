import { OverviewTile, StatTile } from '../components';
import { DASHBOARD_TILES } from '../constants/dashboardTiles';

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-5 gap-4">
      <h1 className="font-semibold text-2xl">Dashboard</h1>
      <div className="flex gap-8 justify-between items-center">
        {DASHBOARD_TILES.map((item, key) => {
          return <StatTile key={key} title={item.title} value={item.value} />;
        })}
      </div>
      <div className="flex gap-4 flex-auto">
        <OverviewTile />
        <OverviewTile />
      </div>
    </div>
  );
};

export default Dashboard;
