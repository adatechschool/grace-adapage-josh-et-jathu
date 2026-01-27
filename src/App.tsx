import './App.css'
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Timeline } from './pages/Timeline';
import { Testimonial } from './pages/Testimonial';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/layout/Footer';


function App() {
  return (
    <>
    <Home/>
    {/* <Features/>
    <Timeline/>
    <Testimonial/> */}
    <Footer/>

    </>
  );
}

export default App;
