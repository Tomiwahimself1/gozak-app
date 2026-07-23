import React from "react";
import { BRAND } from "../lib/brand";

export function GlobalStyle() {
  return (
    <style>{`
      @keyframes floatY { 0%,100%{ transform:translateY(0px);} 50%{ transform:translateY(-14px);} }
      @keyframes floatSlow { 0%,100%{ transform:translateY(0px) rotate(0deg);} 50%{ transform:translateY(-10px) rotate(1.5deg);} }
      @keyframes pulseRing { 0%{ box-shadow:0 0 0 0 rgba(193,18,31,0.35);} 70%{ box-shadow:0 0 0 14px rgba(193,18,31,0);} 100%{ box-shadow:0 0 0 0 rgba(193,18,31,0);} }
      @keyframes fadeInUp { from{ opacity:0; transform:translateY(26px);} to{ opacity:1; transform:translateY(0);} }
      @keyframes fadeIn { from{ opacity:0;} to{ opacity:1;} }
      @keyframes blobMove { 0%,100%{ transform:translate(0,0) scale(1);} 33%{ transform:translate(30px,-20px) scale(1.05);} 66%{ transform:translate(-20px,15px) scale(0.96);} }
      @keyframes drift { 0%{ transform:translateX(0);} 100%{ transform:translateX(-33.33%);} }
      .anim-float{ animation:floatY 5s ease-in-out infinite; }
      .anim-float-slow{ animation:floatSlow 7s ease-in-out infinite; }
      .anim-pulsering{ animation:pulseRing 2.6s ease-in-out infinite; }
      .anim-blob{ animation:blobMove 14s ease-in-out infinite; }
      .marquee-track{ animation:drift 26s linear infinite; }
      .reveal{ opacity:0; transform:translateY(28px); transition:opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); }
      .reveal.in{ opacity:1; transform:translateY(0); }
      .reveal-scale{ opacity:0; transform:scale(0.92); transition:opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); }
      .reveal-scale.in{ opacity:1; transform:scale(1); }
      .underline-grow{ position:relative; }
      .underline-grow::after{ content:''; position:absolute; left:0; bottom:-3px; height:2px; width:0; background:${BRAND.gold}; transition:width .3s ease; }
      .underline-grow:hover::after{ width:100%; }
      @media (prefers-reduced-motion: reduce){
        .reveal,.reveal-scale{ opacity:1 !important; transform:none !important; transition:none !important; }
        .anim-float,.anim-float-slow,.anim-pulsering,.anim-blob,.marquee-track{ animation:none !important; }
      }
      html{ scroll-behavior:smooth; }
    `}</style>
  );
}
