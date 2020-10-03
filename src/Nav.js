import React, { useState, useEffect } from "react";
import "./App.css";

function Nav() {
  const [show, handleShow] = useState(false);
  /*scroll listener*/
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/*if show is true add nav_black css*/}

      <img
        className="nav_logo"
        src="https://fontmeme.com/permalink/201003/54ecd8432dff48bd34fedc17e1a9a7d7.png"
        alt="Webflix logo"
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt="webflix avatar"
      />
    </div>
  );
}

export default Nav;
