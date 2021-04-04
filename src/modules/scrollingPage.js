const scrollingPage = () => {
  const body = document.querySelector('body');
  let blockID, start = 0, end = 0;

  const scrolling = (id) => {
    blockID = id;
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  };

  body.addEventListener('touchstart',() => {
    start = event.changedTouches[0].pageY;
  });
  body.addEventListener('touchcancel',() => {}, false);
  body.addEventListener('touchmove',() => {}, false);
  body.addEventListener('touchend', (event) => {
    end = event.changedTouches[0].pageY;
    if (end <= 600) {
      scrolling('#main');
    } else if(end >= 748 && end <= 1496 && start < end) {
      scrolling('#hero');
    } else if(end >= 748 && end <= 1496 && start > end) {
      scrolling('#slider');
    } else if(end > 1496 && end < 2100) {
      scrolling('#main');
    }
  });
};
export default scrollingPage;