import { useEffect, useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import "./sass/main.scss";

import Loader from './components/loader';
import Nav from './components/nav';
import Home from './components/home';

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
          <>
            <div className="app">
              <Nav/>
              <Home loading={loading}/>
            </div>
          </> 
        )
        }
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
 
export default App;
