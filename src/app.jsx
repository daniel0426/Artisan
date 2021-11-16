import { useEffect, useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {Routes, Route} from 'react-router-dom'

import "./sass/main.scss";

import Loader from './components/loader';
import Nav from './components/nav';
import Home from './components/home';
import Gallery from './components/gallery';
import About from './components/about';
import Contact from './components/contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    loading 
    ? document.querySelector('body').classList.add('loading') 
    : document.querySelector('body').classList.remove('loading')
  }, [loading]);

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading}/>
          </motion.div>
        ): (
            <div className="app">
              <Nav/>
              <Routes>
                <Route path="/" element={ <Home loading={loading}/>}> </Route>
                <Route path="/gallery" element={<Gallery/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/gallery:id' ></Route>
              </Routes>
            </div>
        )
        }
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
 
export default App;
