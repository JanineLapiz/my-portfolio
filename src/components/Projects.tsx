import * as React from "react";
import { projects } from "../index";

export const Projects = (): JSX.Element => {
  return (
    <div id="projects" className="main-content">
      <h2>Projects</h2>

      <div id="cp-projects" className="my-5">
        <h3>CodePen</h3>
        <div className="projects px-5 py-3">
          {projects.codePen.map((project) => {
            return (
              <a
                role="button"
                className="btn mx-5"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                key={project.id}
              >
                <figure>
                  <img src={project.imgUrl} alt={project.name} />
                  <figcaption>{project.name}</figcaption>
                </figure>
              </a>
            );
          })}
        </div>
      </div>

      <div id="heroku-projects" className="my-5">
        <h3>Heroku</h3>
        <div className="projects px-5 py-3">
          {projects.heroku.map((project) => {
            return (
              <figure key={project.id} className="mx-5">
                <img src={project.imgUrl} alt={project.name} />
                <figcaption className="col px-2">
                  <a
                    role="button"
                    className="btn btn-dark btn-block mt-3"
                    href={project.imgUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                  <a
                    role="button"
                    className="btn btn-secondary btn-block btn-sm"
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span className="fa fa-github fa-lg" />
                  </a>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
};
