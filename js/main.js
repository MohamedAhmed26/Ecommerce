// change hover from nav links a
let navLinks = document.querySelectorAll(".navv-links");
navLinks.forEach((item) => {
    item.addEventListener("click", (eo) => {
        let oldActive = document.getElementsByClassName("active")[0];
        console.log(oldActive);
        oldActive.classList.remove("active");
        eo.target.classList.add("active");
    });
});


// eye and heart on
let cards = document.querySelector(".cardss");
let card = document.querySelectorAll(".card");

card.forEach(item => {
    item.addEventListener("click", eo => {
        if (eo.target.classList.contains("heartt")) {
            cards.prepend(eo.target.parentElement.parentElement);
            eo.target.classList.add("fa-solid");
            eo.target.classList.add("soliddd");
            eo.target.classList.remove("heartt");
            eo.target.style.color = "red"
            eo.target.nextElementSibling.parentElement.parentElement.classList.remove("opaacity")
            eo.target.nextElementSibling.classList.remove("fa-eye");
            eo.target.nextElementSibling.classList.add("fa-eye-slash");
            eo.target.nextElementSibling.classList.add("eyeee");
        }  else if (eo.target.classList.contains("soliddd")) {
                cards.append(eo.target.parentElement.parentElement);
                eo.target.classList.add("heartt");
                eo.target.classList.remove("fa-solid");
                eo.target.style.color = "#212529"
            }
            
            if (eo.target.classList.contains("eyeee")) {
                eo.target.parentElement.parentElement.classList.add("opaacity")
                eo.target.classList.add("fa-eye");
                eo.target.classList.remove("fa-eye-slash");
                eo.target.classList.remove("eyeee");
        } else if (eo.target.classList.contains("fa-eye")) {
            eo.target.parentElement.parentElement.classList.remove("opaacity")
            eo.target.classList.remove("fa-eye");
            eo.target.classList.add("fa-eye-slash");
            eo.target.classList.add("eyeee");
        }
    })
})


// trash product

let containerrr = document.querySelectorAll(".wrapper");
containerrr.forEach(item => {
    item.addEventListener("click", eo => {
        if (eo.target.classList.contains("del-btn")) {
            eo.target.parentElement.parentElement.getElementsByClassName("cardss")[0].remove();
            eo.target.setAttribute("disabled", "")
        } else if (eo.target.classList.contains("trashh")) {
            eo.target.parentElement.parentElement.remove();
        }
    })
})



// Scroll arrow btn right, left in category section
let category = document.getElementsByClassName("category")[0];
category.addEventListener("click", function () {
    let cards = document.querySelectorAll(".cardss")[1];
    let scrollLength = cards.scrollWidth - cards.clientWidth;
    let leftButton = document.querySelectorAll(".left")[1];
    let rightButton = document.querySelectorAll(".right")[1];

    function checkScroll() {
        let currentScroll = cards.scrollLeft;
        if (currentScroll === 0) {
            leftButton.setAttribute("disabled", "");
            rightButton.removeAttribute("disabled");
        } else if (currentScroll === scrollLength) {
            rightButton.setAttribute("disabled", "");
            leftButton.removeAttribute("disabled");
        } else {
            leftButton.removeAttribute("disabled");
            rightButton.removeAttribute("disabled");
        }
    }

    cards.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();

    function leftScroll() {
        cards.scrollBy({
            left: -200,
            behavior: "smooth",
        });
    }
    function rightScroll() {
        cards.scrollBy({
            left: 200,
            behavior: "smooth",
        });
    }

    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);
});
