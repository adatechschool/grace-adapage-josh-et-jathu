import { Outlet } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import './styles/globals.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
