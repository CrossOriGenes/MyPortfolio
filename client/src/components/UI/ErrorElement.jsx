import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <main className="error404">
      <h1>
        4
        <span>
          <i className="fas fa-ghost"></i>
        </span>
        4
      </h1>
      <h2>Error: 404 page not found</h2>
      <p>Sorry, the page you're looking for cannot be accessed!</p>
      <h5>
        Try reloading or go back to{" "}
        <Link to="../..">
          Home
        </Link>
      </h5>
    </main>
  );
};

export default ErrorElement;
