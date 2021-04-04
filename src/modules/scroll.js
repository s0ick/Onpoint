const scroll = () => {
  const link = document.querySelector('.hero__button');

  document.body.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if(target.closest('.hero__button')) {
      const blockID = link.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
};

export default scroll;