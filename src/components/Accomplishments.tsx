import * as React from "react";
import { accomplishments } from "../index";

export const Accomplishments = (): JSX.Element => {
  return (
    <div id="accomp" className="main-content">
      <h2>Accomplishments</h2>

      <div className="container">
        {accomplishments.map((item) => (
          <div className="my-5" key={item.id}>
            <div className="card">
              <div className="card-header">
                <div className="card-title">{item.title}</div>
              </div>
              <div className="card-body">
                <div className="card-text text-muted">
                  <p>{item.issuedBy}</p>
                  <p>
                    <strong>Issued:</strong> {item.issued}
                  </p>
                  <p>
                    <strong>Expires:</strong> {item.expires}
                  </p>
                  {item.credentialId && (
                    <p>
                      <strong>Credential ID:</strong> {item.credentialId}
                    </p>
                  )}
                  {item.credentialUrl && (
                    <a
                      className="btn btn-outline-dark btn-sm"
                      target="_blank"
                      rel="noreferrer"
                      href={item.credentialUrl}
                    >
                      See Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
