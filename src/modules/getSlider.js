const getSlider = () => {
  const slide1 = document.querySelector('.slider-1'),
        slide2 = document.querySelector('.slider-2'),
        slide3 = document.querySelector('.slider-3'),
        slider = document.querySelector('.slider'),
        range = document.getElementById('range');

  range.addEventListener('input', () => {
    if(range.value >= 90) {
      slide1.style.cssText = `transform: translate(0%, 0%);`;
      slide2.style.cssText = `transform: translate(-150%, -100%);`;
      slide3.style.cssText = `transform: translate(-200%, -200%);`;
    } else if(range.value >= 40 && range.value <= 60) {
      slide1.style.cssText = `transform: translate(150%, 0%);`;
      slide2.style.cssText = `transform: translate(0, -100%);`;
      slide3.style.cssText = `transform: translate(-100%, -200%);`;
    } else if(range.value <= 10) {
      slide1.style.cssText = `transform: translate(200%, 0%);`;
      slide2.style.cssText = `transform: translate(100%, -100%);`;
      slide3.style.cssText = `transform: translate(0, -200%);`;
    }
  });            
};
export default getSlider;