// Footer.js

import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
export default function Footer() {
  return (
    <footer>
        <Link className="Footer-brand" to="/">
          
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Madhan Kumar Jetti. All Rights Reserved.</p>
      </div>
      </Link>
    </footer>
  );
}
