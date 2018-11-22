import nav from './nav';
// import * as GSAP from "gsap";
// const getGSAP = () => import('gsap');
// import { footer } from "./footer";
const getFooter = () => import('./footer');
// const getLodashUniq = () => import('lodash-es/uniq');
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import makeImage from './image';
import imageUrl from './webpack-logo.jpg';
import css from './footer.css';
import buttonStyles from './button.css';
const getButtonStyle = color => import(`./button-styles/${color}`);

const image = makeImage(imageUrl);
const button = makeButton('Yay! A Button!');

document.body.appendChild(button);

function randomIndex(number) {
  return Math.floor(Math.random() * Math.floor(number));
}
function randomColors(colors, prevIndex) {
  let currIndex = randomIndex(colors.length);
  console.log(currIndex, prevIndex);
  while (currIndex === prevIndex) {
    currIndex = randomIndex(colors.length);
  }
  return {
    selectColor: colors[currIndex],
    currIndex
  };
}

let prevIndex = null;
button.addEventListener('click', e => {
  const colors = ['red', 'blue', 'yellow', 'green'];
  const { selectColor, currIndex } = randomColors(colors, prevIndex);
  prevIndex = currIndex;

  getButtonStyle(selectColor).then(data => (button.style = data.default));

  //   getFooter().then(({ footer }) => {
  //     document.body.appendChild(footerModule.footer);
  //   });
  //   getGSAP().then(gsap => {
  //     console.log(gsap);
  //   });
});

document.body.appendChild(image);
