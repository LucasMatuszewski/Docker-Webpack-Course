// NEW ES6 Import
import './styles/main.css';
import { Peoples } from './components/Peoples';
import { forEach } from 'lodash';
import { createHeader } from './helpers/helpers';
import Visualize from 'webpack-visualizer-plugin';

declare const $VERSION: string; // we don't import, we declare that this const will exist
// webpack add it from webpack.DefinePlugin in webpack.config.js

console.log(Peoples);
console.log($VERSION);

// OLD JS Import
// const a = require("./components/Peoples")

// WE MOVED IT TO index.html in script tag:
// const body = document.querySelector('body');
// forEach(Peoples, name => {
//   const header = createHeader(name);
//   body.appendChild(header);
// });

export function init(element) {
  forEach(Peoples, name => {
    const header = createHeader(name);
    element.appendChild(header);
  });
}
