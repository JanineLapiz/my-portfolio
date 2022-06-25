import * as React from "react";
import { Profile, ProfileProvider } from "../index";
import { SiGmail } from "react-icons/si";
import { getProfilesList } from "../index";

export const Contact = (): JSX.Element => {
  return (
    <div id="contact" className="jumbotron main-content p-5">
      <h3>Contact and Profiles</h3>
      <div className="container">
        <div className="row">
          {getProfilesList(30).map((profile) => getProfileCard(profile))}
          {getEmailCard(28)}
        </div>
      </div>
    </div>
  );
};

const getEmailCard = (iconSize: number | string) => {
  const [showEmail, setShowEmail] = React.useState(false);

  return (
    <div className="col-12 col-sm-4 col-lg-3 text-center my-5">
      <div className="card">
        <div className="card-header">
          <SiGmail size={iconSize} />
        </div>
        <div className="card-body">
          <button
            className="btn btn-dark btn-sm"
            onClick={() => setShowEmail(!showEmail)}
          >
            Gmail
          </button>
          {showEmail && <p className="mt-2">jglapiz@up.edu.ph</p>}
        </div>
      </div>
    </div>
  );
};

const getProfileCard = (profile: Profile): JSX.Element => {
  const { icon, profileProvider, profileUrl } = profile;

  return (
    <div className="col-12 col-sm-4 col-lg-3 text-center my-5">
      <div className="card">
        <div className="card-header">{icon}</div>
        <div className="card-body">
          <a
            role="button"
            className="btn btn-dark btn-sm"
            href={profileUrl}
            target="_blank"
          >
            {profileProvider}
          </a>
        </div>
      </div>
    </div>
  );
};
