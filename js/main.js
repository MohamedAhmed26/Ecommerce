let navLinks = document.querySelectorAll(".navv-links");
navLinks.forEach(item => {
    item.addEventListener("click", eo => {
        let oldActive = document.getElementsByClassName("active")[0];
        console.log(oldActive)
        oldActive.classList.remove("active");
        eo.target.classList.add("active")
    })
})