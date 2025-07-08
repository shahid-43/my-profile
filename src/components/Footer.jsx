import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <a href="#" className="footer-logo">Shahid Shareef Mohammad</a>
        <small>© {new Date().getFullYear()} Shahid S.M. All rights reserved.</small>
    </footer>
  );
};

export default Footer;