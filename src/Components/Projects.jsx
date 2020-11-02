import React from 'react';
import data from '../project-data.json';


export default function Projects() {
    return (
        <div id='projects' className='main-content'>
            <h2>Projects</h2>
            
            <div id='cp-projects' className='my-5'>
                <h3>CodePen</h3>
                <div class="projects">{data.codepen.map(item => {
                    return (
                    <a role='button' class='btn' href={item.url} target='_blank' rel='noreferrer'><figure>
                        <img src={item['img-url']} alt={item.name} />
                        <figcaption>{item.name}</figcaption>
                    </figure></a>
                    );
                })}</div>
            </div>
            
            <div id='heroku-projects' className='my-5'>
                <h3>Heroku</h3>
                <div class="projects">{data.heroku.map(item => {
                    return (
                    <figure>
                        <img src={item["img-url"]} alt={item.name} />
                        <figcaption class='col px-2'>
                            <a role='button' className='btn btn-dark btn-block mt-3' href={item['img-url']} target='_blank' rel='noreferrer'>{item.name}</a> 
                            <a role='button' className='btn btn-secondary btn-block btn-sm' href={item.repository} target='_blank' rel='noreferrer'>
                                GitHub <span className='fa fa-github fa-lg' />
                            </a>
                        </figcaption>
                        
                    </figure>)
                })}</div>
            </div>
        </div>
    );
}

