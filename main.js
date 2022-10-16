// media query
const mobileSize = window.matchMedia("(max-width: 768px)");
const submitButton = document.querySelector("#submitApplication")
const changeText = (media) => media.matches ? submitButton.innerHTML = "application" : submitButton.innerHTML = "submit your application";

changeText(mobileSize);
mobileSize.addEventListener("change", () => {
    changeText(mobileSize);
});
