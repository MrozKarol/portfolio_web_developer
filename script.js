const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bar-wrapper');
const progressBarProcent = [96, 97, 90, 80, 50, 80, 85, 77, 99];
const btnWeb = document.querySelector('.btn-web');
const btnJs = document.querySelector('.btn-js');
const webProject = document.querySelectorAll('.project-web');
const jsProject = document.querySelectorAll('.project-js');

window.addEventListener('scroll', () => {
  // console.log(window.pageYOffset, navbar.offsetTop)
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    // console.log('sticky')
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
  sections.forEach((section, index) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      //usuwanie podswietlenia
      navbarLinks.forEach((navbarLinks) => {
        navbarLinks.classList.remove('change');
      });
      // dpdawanie podswietlenia
      navbarLinks[index].classList.add('change');
    }
  });
  // DYNANAMICZNE DODANIE PROCENTÓW
  // console.log(window.innerHeight)
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll('.progress-procent').forEach((element, index) => {
      element.style.width = `${progressBarProcent[index]}%`;
      element.previousElementSibling.firstElementChild.textContent =
        progressBarProcent[index];
    });
  }
};
mainFn();

window.addEventListener('resize', () => {
  window.location.reload();
});

btnWeb.addEventListener('click', () => {
  btnWeb.classList.toggle('active-btn');
  webProject.forEach((project) => {
    project.classList.toggle('deactivated');
  });
  setTimeout(() => {
    webProject.forEach((project) => {
      project.classList.toggle('ded');
    });
  }, 1200);
});

btnJs.addEventListener('click', () => {
  btnJs.classList.toggle('active-btn');
  jsProject.forEach((project) => {
    project.classList.toggle('deactivated');
  });
  setTimeout(() => {
    jsProject.forEach((project) => {
      project.classList.toggle('ded');
    });
  }, 1200);
});
