const sliderBoxes = [...document.querySelectorAll('.slider-box')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

sliderBoxes.forEach((item, i) => {
    let boxDimensions = item.getBoundingClientRect();
    let boxWidth = boxDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += boxWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= boxWidth;
    })
})