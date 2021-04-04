const activePagination = () => {
  const navbarItem = document.querySelectorAll('.navbar__item'),
        heroScroll = document.querySelector('.hero-scroll');

  const addActivePoint = (i) => {
    navbarItem.forEach((item, index) => {
      item.classList.remove('active__item');
      if(i === index) item.classList.add('active__item');
    });
  };

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 2) {
      heroScroll.style.opacity = 0;
    } else heroScroll.style.opacity = 1;

    if(window.pageYOffset <= 738){
      addActivePoint(0);
    }
    else if(window.pageYOffset >= 738 && window.pageYOffset <= 1400) {
      addActivePoint(1);
    }
    else addActivePoint(2);
  });
};
export default activePagination;