import React, { useState, useRef, useEffect } from "react";
import '../css/Header.css';
import $ from "jquery";

function Header() {
    // React hooks
    const [sidebarOpen, setSideBarOpen] = useState(true);

    $(document).ready(function() {
        $(window).scroll(function () { 
          if ($(window).scrollTop() > 761) {
            $('#nav-bar').addClass('navbar-fixed');
          }
          if ($(window).scrollTop() < 760) {
            $('#nav-bar').removeClass('navbar-fixed');
          }
        });
      });

    function handleNavClick() {
        setSideBarOpen(!sidebarOpen);
        $(document).ready(function() {
            if (sidebarOpen) {
                $('#links').addClass('sidebar');
            }
            else {
                $('#links').removeClass('sidebar');
            }
        });
    }

    return(
        <section>
            <div className="nav-container">
                <header id="nav-bar" className="header">
                    <nav className="navbar navbar-expand-lg navbar-light primary-color">
                        <div id="links" className="links-list">
                            <button onClick={handleNavClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse-nav"
                                aria-controls="collapse-nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            
                            <li id="collapse-nav" className="nav-items collapse navbar-collapse">
                                <ul className="link nav-item">
                                    <a className="nav-link" href="#about-section">ABOUT</a>
                                </ul>
                                <ul className="link nav-item">
                                    <a className="nav-link" href="#exp-section">EXPERIENCE</a>
                                </ul>
                                <ul className="link nav-item">
                                    <a className="nav-link" href="#projects-section">PROJECTS</a>
                                </ul>
                                <ul className="logo link nav-item">
                                    <a className="hidden-link nav-link" href="#art-section">
                                        <img src="images/logo.svg" alt=""/>
                                    </a>
                                </ul>
                                <ul className="link nav-item">
                                    <a className="nav-link" href="#skills-section">SKILLS</a>
                                </ul>
                                <ul className="link nav-item">
                                    <a className="nav-link" href="#contact-section">CONTACT</a>
                                </ul>
                                <ul className="link nav-item">
                                    <a className="nav-link" href="RevanJafarResume.pdf" target="_blank">RESUME</a>
                                </ul>
                            </li>
                        </div>
                    </nav>
                </header>
            </div>
        </section>
    );
}

export default Header;