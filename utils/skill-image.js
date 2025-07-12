import css from "/public/svg/skills/css.svg";
import firebase from "/public/svg/skills/firebase.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import react from "/public/svg/skills/react.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import express from "/public/svg/skills/express.svg";
import nodeJs from "/public/svg/skills/Node.js.svg";
import php from "/public/svg/skills/phpbg.svg";
import laravel from "/public/svg/skills/Laravel.svg";
import nextJs from "/public/svg/skills/nextJS.svg";
import reactNative from "/public/svg/skills/native.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "next js":
      return nextJs;
    case "react native":
      return reactNative;
    case "css":
      return css;
    case "laravel":
      return laravel;
    case "bootstrap":
      return bootstrap;
    case "javascript":
      return javascript;
    case "express js":
      return express;
    case "react":
      return react;
    case "tailwind css":
      return tailwind;
    case "mongodb":
      return mongoDB;
    case "node js":
      return nodeJs;
    case "php":
      return php;
    case "firebase":
      return firebase;
    default:
      return null;
  }
};
