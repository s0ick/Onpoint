const rangeProgress = () => {
  const range = document.getElementById('range');
  let value;
  range.addEventListener('input', () => {
    value = range.value;
    range.style.cssText = `
      background-image: -webkit-linear-gradient(left, #d1eaff 0%, #d1eaff ${value}%, #435063 ${value}%, #435063 100%);
    `;
  });      
};
export default rangeProgress;