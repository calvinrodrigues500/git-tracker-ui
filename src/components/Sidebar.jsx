const Sidebar = () => {
  return (
    <div className="flex flex-col flex-1 pr-4 h-screen">
      <h1 className="font-semibold text-2xl">GitTrack</h1>
      <nav className="flex flex-col gap-2 border-r border-gray-200 my-4 h-full">
        <h3>Dashboard</h3>
        <h3>Issues</h3>
        <h3>Contributions</h3>
        <h3>Settings</h3>
      </nav>
    </div>
  );
};

export default Sidebar;
