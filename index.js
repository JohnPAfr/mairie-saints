const toggle = document.querySelector('.toggle')
const navlist = document.querySelector('.navbar__list');


toggle.addEventListener('mouseover', () => {
  navlist.classList.add('active');
});

navlist.addEventListener('mouseleave', () => {
  navlist.classList.remove('active');
});
document.addEventListener('mouseout', () => {
  navlist.classList.remove('active');
});