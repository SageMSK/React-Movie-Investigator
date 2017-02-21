import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      <h1>404: Not Found</h1>
      <Link to="/" className="btn btn-primary">Back to Home Page</Link>
    </div>
  );
}

export default ErrorPage;