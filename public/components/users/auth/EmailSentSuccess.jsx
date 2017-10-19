import React from 'react';
import { Link } from 'react-router-dom';

export default function EmailSentSuccess() {
  return (
    <div>
      <h1>Email Sent</h1>
      <div>
        <p>Email has been sent to your email with instructions to reset your password.</p>
        <p>
          If you have not receive your email.
          <Link to="/reset_password" href="/reset_password" className="link"> Send Again.</Link>
        </p>
      </div>
    </div>
  );
}
