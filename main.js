// media query
const mobileSize = window.matchMedia("(max-width: 768px)");
const submitButton = document.querySelector("#submitApplication")
const changeText = (media) => media.matches ? submitButton.innerHTML = "application" : submitButton.innerHTML = "submit your application";

changeText(mobileSize);
mobileSize.addEventListener("change", () => {
    changeText(mobileSize);
});




// slider





const updatePag = () => {
    pagination.forEach((el) => el.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')
    underline.forEach((el) => el.style.border = '#131313');
    pagination[section].style.backgroundColor = 'white';
    underline[section].style.border = '1px solid #E3B873';
  }