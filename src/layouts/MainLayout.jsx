import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

export function MainLayout() {
  return (
    <div className="app-container">
      
      <Sidebar />

      <main>
        <Navbar />
        <Outlet />
      </main>
      
    </div>
  );
}