import bg2 from "../../images/dots.png";
import genArt from "../../images/genArt.png";
import pixi from "../../images/bg3.png";
import squares from "../../images/squares.png";
import sheep from "../../images/sheep.png";

export const cards = [
  {
    title: "Star field",
    type: "small",
    image: bg2,
    to: "/experiments/dots",
    description: "A class based canvas experiment creating randomly changing constellations.",
  },
  // {
  //   title: "Pixi",
  //   type: "small",
  //   image: pixi,
  //   to: "/experiments/pure",
  //   description: "My pixi playground",
  // },
  {
    title: "Batsim",
    type: "small",
    image: "https://www.clipartkey.com/mpngs/m/11-119060_cute-bat-clip-art.png",
    to: "/experiments/batsim",
    description: "A bat nesting habit simulator based on Elizas second python assignment",
  },
  {
    title: "Polygon",
    type: "small",
    image: genArt,
    to: "/experiments/polygons",
    description: "A basic colourful low poly background which will be built upon later",
  },
  {
    title: "Collisions",
    type: "small",
    image: genArt,
    to: "/experiments/pure",
    description: "Simple collision detection between moving bodies",
  },
  {
    title: "Sheep Sim",
    type: "small",
    image: sheep,
    to: "/experiments/sheepsim",
    description: "A sheed eating grass simulator based on Elizas first python assignment",
  },
  // {
  //   title: "Animated Genart",
  //   type: "small",
  //   image: genArt,
  //   to: "/experiments/genart",
  //   description: "A placeholder for my first lot of genart",
  // },
  {
    title: "Squares",
    type: "small",
    image: squares,
    to: "/experiments/squares",
    description: "A creative coding style image based around squares, inspired by a reddit post. Reload the page to generate a new pattern.",
  },
  {
    title: "Random Genart",
    type: "small",
    image: genArt,
    to: "/experiments/genart",
    description: "A Super simple static gen art example.",
  },
  // {
  //   title: "Mouse",
  //   type: "small",
  //   image:
  //     "https://cdn.branchcms.com/QOxXen0yEK-1009/images/blog/cute-mouse.jpg",
  //   to: "/experiments/mouse",
  //   description:
  //     "Currently a mess. An experiment using mouse move events with the canvas",
  // },

  // {
  //   title: "Breakout",
  //   type: "small",
  //   image: pixi,
  //   to: "/experiments/breakout",
  //   description:
  //     "My breakout game I made a few years ago. Soon to be ported to this new site.",
  // },
];
