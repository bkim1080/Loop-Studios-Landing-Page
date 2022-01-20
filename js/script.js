const toggleBtn = document.querySelector('.toggle-btn')
const navbarLinks = document.querySelector('.navbar-links')
const headerContents = document.querySelector('.header-contents')
const mainHeading = document.querySelector('.main-heading')
const nonHeaderSection = document.querySelector('.non-header')
const headerImg = document.querySelector('.header-img')

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');  
  headerContents.classList.toggle('active');
  mainHeading.classList.toggle('active');
  nonHeaderSection.classList.toggle('active');
  toggleBtn.classList.toggle('active');
  headerImg.classList.toggle('active');
})