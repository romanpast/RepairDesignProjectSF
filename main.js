// media query
const mobileSize = window.matchMedia("(max-width: 768px)");
const submitButton = document.querySelector("#submitApplication")
const locationMap = document.querySelector(".map");
const changeText = (media) => media.matches ? submitButton.innerHTML = "application" : submitButton.innerHTML = "submit your application";
const changeImg = (media) => media.matches ? locationMap.src = "public/img/map-s.jpg" : locationMap.src = "public/img/map.jpg";

changeText(mobileSize);
changeImg(mobileSize);
mobileSize.addEventListener("change", () => {
    changeText(mobileSize);
    changeImg(mobileSize);
});

// checkbox
const checkbox = document.getElementById("checkmark");
const checkboxBefore = window.getComputedStyle(checkbox, "::before");
const checked = () => checkboxBefore.checked ? checkboxBefore.opasity = "1" : checkbox.opasity = 0;


// slider-top
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
const slider = document.querySelector('#slider-top');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const slideTitle = document.querySelectorAll('.slide-title');
const underline = document.querySelectorAll('.underline');
let index = 0;


const updatePag = () => {
    pagination.forEach((el) => el.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')
    slideTitle.forEach((el) => el.style.color = 'rgba(255, 255, 255, 0.3)')
    underline.forEach((el) => el.style.border = '#131313');
    pagination[index].style.backgroundColor = 'white';
    underline[index].style.border = '1px solid #E3B873';
    slideTitle[index].style.color = '#E3B873'
};

const updateInfo = () => {
    cityTitle.innerText = entities[index].city
    aptArea.innerText = entities[index].aptArea
    repairTime.innerText = entities[index].repairTime
}

const prevSlide = () => {
    index == 0 ? index = 2 : index--;
    slider.scrollLeft = (index * (slider.clientWidth)) + (index * 10)
    updatePag();
    updateInfo();
}

const nextSlide = () => {
    index == 2 ? index = 0 : index++;
    slider.scrollLeft = (index * (slider.clientWidth)) + (index * 10)
    updatePag();
    updateInfo();
}

pagination.forEach((el, ind) => {
    el.addEventListener('click', () => {
        index = ind;
        updatePag();
        updateInfo();
        slider.scrollLeft = (index * (slider.clientWidth)) + (index * 10)
    })
})

slideTitle.forEach((el, ind) => {
    el.addEventListener('click', () => {
        index = ind;
        updatePag();
        updateInfo();
        slider.scrollLeft = (index * (slider.clientWidth)) + (index * 10)
    })
})

prev.forEach((el) => {
    el.addEventListener('click', () => {
        prevSlide();
    })
})

next.forEach((el) => {
    el.addEventListener('click', () => {
      nextSlide();  
    })
})

// event on finger swipe/touch

let touchStartX = 0;
let touchEndX = 0;
    
const checkDirection = () => (touchEndX > touchStartX) ? prevSlide() : nextSlide();

slider.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX
})

slider.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX
  checkDirection();
})