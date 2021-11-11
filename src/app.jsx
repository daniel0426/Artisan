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
    <AnimateSharedLayout>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading}/>
          </motion.div>
        ): (
          <>
          <Nav/>
          <Home/>
          {!loading && (
            <>
            <div className="transitionImg1 final1">
                <motion.img 
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                src='/images/loadingImg4.jpeg' 
                  layoutId= 'main-image-1' />
            </div>
            <div className="transitionImg2 fina2l">
                <motion.img 
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                src='/images/loadingImg5.jpeg' 
                  layoutId= 'main-image-2' />
            </div>
            </>
          )}
           </> 
        )
        }
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
