import caroseulData from "./simulSliderSectionl.json";
//const caroseulData = require("./simulSliderSectionl.json")

const NUM_BANNER_ON_B2C = 2;
const sliderLenght = caroseulData.length - NUM_BANNER_ON_B2C;

function sliderData() {
  let sliderData = [];
  for (let index = 0; index < sliderLenght; index++) {
    const element = caroseulData[index];
    sliderData.push(element);
  }
  return sliderData;
}

function bannerData() {
  let bannerData = [];
  for (let index = sliderLenght - 1; index < caroseulData.length; index++) {
    const element = caroseulData[index];
    bannerData.push(element);
  }
  return bannerData;
}

export { bannerData, sliderData };
