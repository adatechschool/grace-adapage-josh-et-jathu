
import './App.css'
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Timeline } from './pages/Timeline';
import { Testimonial } from './pages/Testimonial';
import  Navbar  from './components/layout/Navbar'
import NotFoundPage from './pages/NotFoundPage';


function App() {


  return (
    <>
    
    
    <Navbar />
    <Home />
    <Features />
    <Timeline />
    <Testimonial />
    <NotFoundPage />
    

    </>
  );
}

export default App;
