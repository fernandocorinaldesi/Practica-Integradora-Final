import React from "react";
import "../css/MyFooter.css";

export default function MyFooter() {
  return (
    <div>
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center text-white py-3">
          © 2020 Fernando Corinaldesi 
          <a href="https://www.unpaz.edu.ar/" className="ml-1 text-white">
             www.unpaz.edu.ar
          </a>
        </div>
      </footer>
    </div>
  );
}
