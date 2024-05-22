let navLinks = document.querySelectorAll(".navv-links");
navLinks.forEach(item => {
    item.addEventListener("click", eo => {
        let oldActive = document.getElementsByClassName("active")[0];
        console.log(oldActive)
        oldActive.classList.remove("active");
        eo.target.classList.add("active")
    })
})

// category
const btLeft = document.querySelector(".lft");
const btRight = document.querySelector(".rt");
const tabsScroll = document.querySelector(".container");

btRight.addEventListener("click", () => {
    tabsScroll.scrollLeft += 350;
})
btLeft.addEventListener("click", () => {
    tabsScroll.scrollLeft -= 350;
})
tabsScroll.addEventListener("click",manage)
