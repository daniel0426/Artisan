
import React from 'react'
const About = () => {
    return (
        <section className='about'>
           <ul className='banner-container'>
               <li className="banner">
                   <img src="/images/about-img1.jpeg" alt="aboutimg" />
                   <div className='banner-info'>
                       <h1 className='title'>Connect</h1>
                       <p className='desc'>
                           Connect people locally and globally by variety of art works.
                       </p>
                   </div>
               </li>
               <li className="banner">
                    <img src="/images/about-img2.jpeg" alt="aboutimg" />
                    <div className='banner-info'>
                        <h1 className='title'>Contribute</h1>
                       <p className='desc'>
                           We aim to harness the power and creativity of art to improve people's lives in many different ways.
                       </p>

                    </div>
               </li>
               <li className="banner">
                    <img src="/images/about-img3.jpeg" alt="aboutimg" />
                   <div className='banner-info'>
                        <h1 className='title'>Support</h1>
                        <p className='desc'>We support all kinds of new artists to express their originality and creativity.</p>
                   </div>
               </li>
           </ul>
        </section>
    )
}

export default About
