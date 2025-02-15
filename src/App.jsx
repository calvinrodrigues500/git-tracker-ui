import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="flex p-5 gap-2 font-redhat">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
