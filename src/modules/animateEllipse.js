const getAnimateEllipse = () => {
  const ellipses = document.querySelectorAll('.hero__ellipse');

  ellipses.forEach((item) => {
    for(let i = 0; i < 3; i++) {
      const div = document.createElement('div'),
            parentHeight = item.parentElement.clientHeight;

      div.classList.add('hero__animate');
      div.style.cssText = ` 
        width: ${parentHeight}px;
        height: ${parentHeight}px;`;
      item.appendChild(div);
    }

    const animateBlock = item.querySelectorAll('.hero__animate');
    animateBlock.forEach((item, index) => {
    const parentHeight = item.parentElement.clientHeight;
    let count = 0,
        interval; 

    item.style.cssText = ` 
      width: ${parentHeight}px;
      height: ${parentHeight}px;`;       

    const animate = () => {
      interval = requestAnimationFrame(animate);
      count++;

      const timer = (delay) => {
        if(count / delay <= parentHeight) {
          item.style.cssText = ` 
            width: ${count / delay}px;
            height: ${count / delay}px;`;
        } else {
          count = 0;
        }
      };
      if(parentHeight === 50) timer(3);
      else if(parentHeight === 25) timer(5);
      else if(parentHeight === 20) timer(7);
    };

    setTimeout(() => {
      interval = requestAnimationFrame(animate);
    }, 100 * (index * 10));
  });
  });
};

export default getAnimateEllipse;