const toggleBtn = document.querySelector('.toggle-btn')
const navbarLinks = document.querySelector('.navbar-links')
const header = document.querySelector('.header')
const mainHeading = document.querySelector('.main-heading')
const displayNoneSection = document.querySelector('.display-none')

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');  
  header.classList.toggle('active');
  mainHeading.classList.toggle('active');
  displayNoneSection.classList.toggle('active');
  toggleBtn.classList.toggle('active');
})