import React, {useEffect} from 'react';
import { gsap } from 'gsap';

export default function Home(props) {
    const { setMenuClicked } = props;
    const tl = gsap.timeline();

    useEffect(() => {
        tl.from('h1', {duration: 1.5, opacity: 0, y: 200, ease: 'back.out'})
          .from('#intro', {duration: 2, opacity: 0})
          .to('#my-name', {animation: 'flash 1s forwards infinite', ease: 'power3.out'});
        setTimeout(() => setMenuClicked(false), 2500);
    }, []);

    return (
        <div id='home'>
            
            <h1>
                Salut et bienvenue!
            </h1>
            <p id='intro'>I am <span id='my-name'>Janine.</span></p> 
        </div>
    );
}

