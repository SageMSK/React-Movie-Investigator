import React from 'react';

const ErrorPage = (props) => {
  return (
    <div className="container">
      <h1>404: Not Found</h1>
      <Link to="/" className="btn btn-primary">Back to Home Page</Link>
    </div>
  );
};

export default ErrorPage;