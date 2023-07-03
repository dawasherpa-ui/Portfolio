const menu = document.querySelector("#menu-btn");
const hireBtn = document.querySelector(".hire");

const menuList = document.querySelector(".navigation");
const computedStyle = window.getComputedStyle(menuList);

function menuBtn() {
    if (computedStyle.getPropertyValue('display') === 'none') {
        hireBtn.style.display = "none";
        menuList.style.display = "grid";


    } else if (computedStyle.getPropertyValue('display') === 'grid') {
        menuList.style.display = "none";
        hireBtn.style.display = "block";
    } else {
        console.log("error");
    }
};


menu.addEventListener("click", menuBtn);
