import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <motion.div initial={{opacity: 0, y: -180}}  animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 1.4,
        }}>
        <div className="nav">
            <div className='logo'>
                <a href="">
                    <Link to='/'><img src="/images/artisan-logo.png" alt="logo" className='logo' /></Link>
                </a>
                {/* <a href="">Artisan</a> */}
            </div>
            <ul className="links">
                <Link to='/gallery' ><li className="link"><a href="">Gallery</a></li></Link>
                <Link to='upload'><li className='link'><a href="">Upload</a></li></Link>
                <Link to='/about'><li className="link"><a href="">About</a></li></Link>
                <Link to='/contact'><li className="link"><a href="">Contact</a></li></Link>
            </ul>
        </div>
        </motion.div>
    )
}

export default Nav
