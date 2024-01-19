import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div className='main-body'>
      <Routes>
        {/* <Route path="/" element={ <Layout/>}> */}
          <Route path='/' element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        {/* </Route> */}
      </Routes>
    </div>
    </>
  );
}

export default App;
