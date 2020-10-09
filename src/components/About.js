import React from 'react';
import '../css/About.css';

function About() {
    fetch('https://api.spotify.com/v1/playlists/713QzX1WmyymT8UO28mjrc')
    .then(res => res.json())//response type
    // .then(data => console.log(data)); //log the data;

    // typing effect
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
      };

    return(
        <section id="about-section" className="filler">
            <div className="about-container">
                <div className="about-pic">
                    <img src="/images/photos/profile.jpg" alt="Revan Jafar"/>
                </div>
                <div className="about-desc">
                    <h1 className="home-title"><span>Hello</span><span>I'm Revan</span></h1>

                    <p>Now, you've probably stumbled across this page because you're a recruiter, a friend of mine, 
                      or one of my millions of adoring fans (AKA an internet bot). Either way, all are welcome to get to know me!
                    </p>

                    <p>Professionally, I am a software engineer with 3 years of experience in a variety of realms including 
                        frontend, backend, embedded, web, API, and open-source development. I am constantly looking
                        to learn new technologies and broaden my knowledge to become a well-rounded engineer. </p>

                    <p>On my free time, you can probably find me planning my next adventure, practicing my kickboxing combos, 
                        or scarfing down some Ben & Jerry's while ruining my friendships during game nights. <span role="img" aria-label="Emoji girl shrugging">🤷🏽‍♀️</span></p>

                    <p>If any of this interests you, scroll down to learn more!</p>
                    {/* <h1>I am <span className="txt-rotate" data-period="2000"
                        data-rotate='[ "nerdy.", "simple.", "pure JS.", "pretty.", "fun!" ]'></span>
                    </h1> */}

                </div>
            </div>
            {/* <iframe src="https://open.spotify.com/embed/playlist/6VZk0xUTsaigFJn2F4ckp1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" id="spotify-widget"></iframe> */}
        </section>
    );
}

export default About;