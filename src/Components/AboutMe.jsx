import React from 'react';

export default function AboutMe() {
    return (
        <div id='about-me' className='main-content'>
            <h2>About Me</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-12  col-lg-4 mt-5 text-center'>
                        <img src='./project-data/me.jpg' className='img-thumbnail p-0 rounded-circle' alt='This is me' />
                    </div>

                    <div className='col-12 col-lg-7 mt-5'>
                        <p>I am that one weirdo who likes learning random topics and complicated concepts. 
                        It had been at the back of my mind that I quite enjoyed programming even as I 
                        was taking an engineering programme in uni. It wasn't until a few weeks into
                        the pandemic that I'd begun to make a career out of it.</p>
                        <p>I've found my niche in web development. Very much enamoured I am with JavaScript.
                        If I could have it as a lover, I would. There's so much I can do with it and I just 
                        keep getting more surprises the longer I use it!</p>
                        <p>I'm currently working into mastering (or as close to it as possible; no human is 
                        omniscient) the MERN stack, as well as Redux, GSAP, and Bootstrap/Reactrap along 
                        the way. I've made React my turf. Have to love Hooks and how I can go wild mixing 
                        React and ES6+.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
