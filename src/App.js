import React from 'react';
import './App.css';
import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import $ from 'jquery';
import * as ScrollMagic from "scrollmagic"; 
import { TweenMax, TimelineMax, Linear } from "gsap";
import About from './components/About'
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
 
// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

var app = {
  controller: null,

  init: function() {
    this.initParallaxScene();
  },

  initParallaxScene: function() {

    this.controller = new ScrollMagic.Controller();
    var tween = new TimelineMax ().add([
      TweenMax.fromTo("#art-0", 0.5, {y:0, ease: Linear.easeNone}, {y: -20, ease: Linear.easeNone}), //black
      TweenMax.fromTo("#art-1", 0.5, {y:0, ease: Linear.easeNone}, {y: -20, ease: Linear.easeNone}), //base
      TweenMax.fromTo("#art-2", 0.5, {y:0, ease: Linear.easeNone}, {y: 50, ease: Linear.easeNone}), //ocean
      TweenMax.fromTo("#art-3", 0.5, {y:0, ease: Linear.easeNone}, {y: 300, ease: Linear.easeNone}), //sky
      TweenMax.fromTo("#art-4", 0.5, {y:0, ease: Linear.easeNone}, {y: 300, ease: Linear.easeNone}), //atmosphere
      TweenMax.fromTo("#art-5", 0.5, {y:0, ease: Linear.easeNone}, {y: 0, ease: Linear.easeNone}), //sun
      TweenMax.fromTo("#art-6", 0.5, {y:0, ease: Linear.easeNone}, {y: 300, ease: Linear.easeNone}), //galaxy
      TweenMax.fromTo("#art-7", 0.5, {y:0, ease: Linear.easeNone}, {y: -800, ease: Linear.easeNone}), //lightgrass
      TweenMax.fromTo("#art-8", 0.5, {y:0, ease: Linear.easeNone}, {y: -900, ease: Linear.easeNone}), //darkgrass
      TweenMax.fromTo("#art-9", 0.5, {y:0, ease: Linear.easeNone}, {y: -1008, ease: Linear.easeNone}), //silhouette
      TweenMax.fromTo("#art-logo", 0.1, {opacity:1.0, ease: Linear.easeNone}, {opacity: 0, ease: Linear.easeNone}),
    ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#art", duration: 1000, offset: 450})
    .setTween(tween)
    .setPin("#art")
    .triggerHook(0.5)
    .offset(10)
    .addTo(this.controller);
  },
}

$(document).ready(function() {
  app.init();
})

function App() {
  
  return (
    <div className="content">
      <main>
        <section id="art-section">
          <div className="art">
            <div id="art-0" className="art--layer" style={{backgroundImage: 'url("images/art/black.svg")', zIndex: '0'}}></div>
            <div id="art-1" className="art--layer" style={{backgroundImage: 'url("images/art/base.svg")', zIndex: '1'}}></div>
            <div id="art-2" className="art--layer" style={{backgroundImage: 'url("images/art/ocean.svg")', zIndex: '2'}}></div>
            <div id="art-3" className="art--layer" style={{backgroundImage: 'url("images/art/sky.svg")', zIndex: '3'}}></div>
            <div id="art-4" className="art--layer" style={{backgroundImage: 'url("images/art/atmosphere.svg")', zIndex: '4'}}></div>
            <div id="art-5" className="art--layer" style={{backgroundImage: 'url("images/art/sun.svg")', zIndex: '5'}}></div>
            <div id="art-6" className="art--layer" style={{backgroundImage: 'url("images/art/galaxy.svg")', zIndex: '6'}}></div>
            <div id="art-7" className="art--layer" style={{backgroundImage: 'url("images/art/light-grass.svg")', zIndex: '7'}}></div>
            <div id="art-8" className="art--layer" style={{backgroundImage: 'url("images/art/dark-grass.svg")', zIndex: '8'}}></div>
            <div id="art-9" className="art--layer" style={{backgroundImage: 'url("images/art/silhouette.svg")', zIndex: '9'}}></div>

            <div className="art--layer project-slide__logo" id="art-logo">
              <span>Welcome</span>
            </div>
          </div>
        </section>
        <About />
      </main>
    </div>
  );
}

export default App;
