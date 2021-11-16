import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Link } from "react-router-dom";

const Home = ({ loading }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0, y: 280 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
            delay: 0.6,
          }}
          className="home"
        >
          <section className="home-section">
            <motion.div className="home-main">
              <h1 className="home-title">Raise  artists !</h1>
              <p className="home-p1 desc">
                <span>Artisan</span> provides art platform for all kind of
                artists, collectors and organizations to manage their artwork,
                career or collection.{" "}
              </p>
              <p className="home-p2 desc">
              <span>Artisan</span> support all artists to help keep going with thier art
                career for next young generation.
              </p>
              <Link to='/gallery'><button className="home-btn">View artworks </button></Link>
            </motion.div>
            {!loading && (
              <motion.div className="transitionImg final">
                <motion.img
                  src="/images/loadingImg3.jpeg"
                  layoutId="main-image-1"
                />
              </motion.div>
            )}
          </section>
        </motion.main>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Home;
