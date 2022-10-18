// media query
const mobileSize = window.matchMedia("(max-width: 768px)");
const submitButton = document.querySelector("#submitApplication")
const changeText = (media) => media.matches ? submitButton.innerHTML = "application" : submitButton.innerHTML = "submit your application";

changeText(mobileSize);
mobileSize.addEventListener("change", () => {
    changeText(mobileSize);
});




// slider
const entities = [
    {
        cityTitle: "Rostov-on-Don LCD admiral",
        aptArea: "81 m2",
        repairTime: "3.5 months"
    },

    {
        cityTitle: "Sochi Thieves",
        aptArea: "105 m2",
        repairTime: "4 months" 
    },

    {
        cityTitle: "Rostov-on-Don Patriotic",
        aptArea: "93 m2",
        repairTime: "3 months"
    }
]






const updatePag = () => {
    pagination.forEach((el) => el.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')
    underline.forEach((el) => el.style.border = '#131313');
    pagination[section].style.backgroundColor = 'white';
    underline[section].style.border = '1px solid #E3B873';
  }