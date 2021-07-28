const imageArray = [
    "https://images.unsplash.com/photo-1626080308314-d7868286cce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1530565435120-7f79080ea623?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
    "https://images.unsplash.com/photo-1622190054616-115e3998d2e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1589720815038-4b8a386f85df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1623135802537-fcca5cdf43d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1626049789315-2d5f1b656454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=357&q=80",
    "https://images.unsplash.com/photo-1622730000579-e6bde344d6a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1622730000579-e6bde344d6a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1626638940365-d4c6d7ca9752?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80fg"
]

// const portfolioButton = document.querySelector(".portfolio_button")
const mainContainer = document.querySelector(".main-content")
const portfolioButton = document.querySelector(".portfolio_button")
const portfolioItems = document.querySelectorAll(".portfolio-item")
const portfolio = document.querySelector(".portfolio")

// console.log(mainContainer)

window.addEventListener("resize", changeButtonAlignment, false)
portfolioButton.addEventListener("click", shufflePictures, false)
portfolioItems.forEach((portfolioItem) => {
    portfolioItem.addEventListener("click", (event) => {
        portfolio.classList.toggle("zero-grid")
        portfolioItems.forEach((item) => {
            item.classList.toggle("portfolio_item_before");
            if (item !== event.target) {
                item.classList.toggle("zero-size");
            }
        })
        portfolioItem.classList.toggle("full-size")
    })
});
portfolioButton.addEventListener("click", shufflePictures, false)
function changeButtonAlignment() {
    if (window.innerWidth > window.innerHeight) {
        mainContainer.classList.add("main_container_horizontal")
        portfolioButton.classList.add("vertical_button")
    } else if (window.innerWidth < window.innerHeight) {
        mainContainer.classList.remove("main_container_horizontal")
        portfolioButton.classList.remove("vertical_button")
    }
}

function shufflePictures() {
    randomArray = randomUniqueArray(portfolioItems.length)
    // console.log(randomArray)
    for (let index = 0; index < randomArray.length; index++) {
        portfolioItems[index].style.backgroundImage = "url(" + imageArray[randomArray[index]] + ")"

    }
}

function randomUniqueArray(arrLength) {
    let x = [];
    let y;
    y = Math.floor(Math.random() * arrLength + 1)
    while (x.length != arrLength) {
        y = Math.floor(Math.random() * arrLength)
        if (x.indexOf(y) === -1) {
            x.push(y)
        }
    }
    return x;
}
shufflePictures();