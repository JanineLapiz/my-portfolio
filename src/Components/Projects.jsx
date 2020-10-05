import React from 'react';
import data from './project-data.json';


export default function Projects() {
    return (
        <div id='projects' className='main-content'>
            <h2>Projects</h2>
            <h3>CodePen</h3>
            <div id='cp-projects'>{data.codepen.map(item => {
                return (
                <a href={item.url} target='_blank'><figure>
                    <img src={item["img-url"]} />
                    <figcaption>{item.name}</figcaption>
                </figure></a>
                );
            })}</div>
            <h3>GitHub</h3>
        </div>
    );
}

