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

let cityTitle = document.querySelector("#cityTitle")



// old

// let text = document.querySelector('.text')
// let pagination = document.querySelectorAll('.ball');
// let carousel = document.getElementById('carousel');
// let cards = document.querySelectorAll('.card');
// let leftBtn = document.getElementById('leftArrow');
// let rightBtn = document.getElementById('rightArrow');
// let section = 0

// const updatePag = () => {
//   pagination.forEach((el) => el.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')
//   pagination[section].style.backgroundColor = 'white'
// }

// pagination.forEach((curItem, index) => {
//   curItem.addEventListener('click', () => {
//     section = index;
//     updatePag()
//     carousel.scrollLeft = (index * (window.innerWidth - 150)) + (index * 10)

//     text.innerText = titles[section].title
//   })
// })

// leftBtn.addEventListener('click', () => {
//   section == 0 ? section = 2 : section--;
//   carousel.scrollLeft = (section * (window.innerWidth - 150)) + (section * 10)
//   updatePag();
//   text.innerText = titles[section].title
// })


// rightBtn.addEventListener('click', () => {
//     section == 2 ? section = 0 : section++;
//     carousel.scrollLeft = (section * (window.innerWidth - 150)) + (section * 10)
//     updatePag();
//     text.innerText = titles[section].title
// })

// old





const updatePag = () => {
    pagination.forEach((el) => el.style.backgroundColor = 'rgba(255, 255, 255, 0.3)')
    underline.forEach((el) => el.style.border = '#131313');
    pagination[section].style.backgroundColor = 'white';
    underline[section].style.border = '1px solid #E3B873';
}