// media query
const mobileSize = window.matchMedia("(max-width: 768px)");
const submitButton = document.querySelector("#submitApplication")
const changeText = (media) => media.matches ? submitButton.innerHTML = "application" : submitButton.innerHTML = "submit your application";

changeText(mobileSize);
mobileSize.addEventListener("change", () => {
    changeText(mobileSize);
});




// slider
const entities = [{
        city: "Rostov-on-Don LCD admiral",
        aptArea: "81 m2",
        repairTime: "3.5 months"
    },

    {
        city: "Sochi Thieves",
        aptArea: "105 m2",
        repairTime: "4 months"
    },

    {
        city: "Rostov-on-Don Patriotic",
        aptArea: "93 m2",
        repairTime: "3 months"
    }
]

const cityTitle = document.querySelector('#cityTitle');
const aptArea = document.querySelector('#aptArea');
const repairTime = document.querySelector('#repairTime');
const pagination = document.querySelectorAll('.ball');
const slider = document.querySelector('#slider');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const slideTitle = document.querySelectorAll('.slide-title');
const underline = document.querySelectorAll('.underline');
let section = 0;


const updatePag = () => {
    pagination.forEach((el) => el.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')
    slideTitle.forEach((el) => el.style.color = 'rgba(255, 255, 255, 0.3)')
    underline.forEach((el) => el.style.border = '#131313');
    pagination[section].style.backgroundColor = 'white';
    underline[section].style.border = '1px solid #E3B873';
    slideTitle[section].style.color = '#E3B873'
};

const updateInfo = () => {
    cityTitle.innerText = entities[section].city
    aptArea.innerText = entities[section].aptArea
    repairTime.innerText = entities[section].repairTime
}


pagination.forEach((curItem, index) => {
    curItem.addEventListener('click', () => {
        section = index;
        updatePag();
        updateInfo();
        slider.scrollLeft = (index * (slider.clientWidth)) + (index * 10)

    })
})


prev.forEach((el) => {
    el.addEventListener('click', () => {
        section == 0 ? section = 2 : section--;
        slider.scrollLeft = (section * (slider.clientWidth)) + (section * 10)
        updatePag();
        updateInfo();
    })
})

next.forEach((el) => {
    el.addEventListener('click', () => {
        section == 2 ? section = 0 : section++;
        slider.scrollLeft = (section * (slider.clientWidth)) + (section * 10)
        updatePag();
        updateInfo();
    })
})