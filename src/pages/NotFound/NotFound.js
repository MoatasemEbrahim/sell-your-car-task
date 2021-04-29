import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = props => {
  return (
    <div className={'text-center'}>
      <h1>Ooops!</h1>
      <h3>404 - Page not found</h3>
      <p>
        The page you are looking for might have been removed, had it's name
        changed or is temporarily unacilable
      </p>
      <span>
        <button>
          <Link to="/">
            Go to homepage
          </Link>
        </button>
      </span>
    </div>
  );
};

export default PageNotFound;