import React from 'react'
import {motion} from 'framer-motion'

const Nav = () => {
    return (
        <motion.div initial={{opacity: 0, y: -180}}  animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1.6,
        }}>
        <div className="nav">
            <div className='logo'>
                <a href="">
                    <img src="/images/artisan-logo.png" alt="logo" className='logo' />
                </a>
                {/* <a href="">Artisan</a> */}
            </div>
            <ul className="links">
                <li className="link"><a href="">Gallery</a></li>
                <li className="link"><a href="">About</a></li>
                <li className="link"><a href="">Contact</a></li>
            </ul>
        </div>
        </motion.div>
    )
}

export default Nav
