import menuimage1 from './menu-image1.jpg'
import menuimage2 from './menu-image2.jpg'
import menuimage3 from './menu-image3.jpg'

const body = document.querySelector("body")
const content = document.querySelector("#content");
const menu = document.createElement("div")
menu.setAttribute("class", "menu")

const starters = document.createElement("h2");
starters.innerHTML = "STARTERS";

const mainCourse = document.createElement("h2");
mainCourse.innerHTML = "MAIN COURSE";

const dessert = document.createElement("h2");
dessert.innerHTML = "DESSERT";

const image1 = document.createElement("img")
image1.setAttribute("src", menuimage1)
image1.setAttribute("id", "menu-image1")
image1.setAttribute("class", "menu-image")

const image2 = document.createElement("img")
image2.setAttribute("src", menuimage2)
image2.setAttribute("id", "menu-image2")
image2.setAttribute("class", "menu-image")

const image3 = document.createElement("img")
image3.setAttribute("src", menuimage3)
image3.setAttribute("id", "menu-image3")
image3.setAttribute("class", "menu-image")

function maker () {
    body.style.backgroundColor = "#4a553f";
    body.style.color = "#fdebe4"

    let depth = 0;

    function menuMaker (depth) {
        if (depth > 2) {
            return
        }
        const hr = document.createElement("hr");
        const div = document.createElement("div")
        div.setAttribute("class", "menudiv")
        const starter = document.createElement("h3")
        starter.innerHTML = "Food name"
        const price = document.createElement("p")
        price.innerHTML = "$24"
        const starterP = document.createElement("p")
        starterP.setAttribute("class", "menuP")
        starterP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com"
        
        div.append(starter, price)

        menu.append(
            hr,
            div,
            starterP
        )        
        depth++
        menuMaker(depth)
    }
    
    menu.append(starters)
    menuMaker(depth);

    menu.append(mainCourse)
    menuMaker(depth);

    menu.append(dessert)
    menuMaker(depth);

    menu.append(image1, image2, image3)

    content.append(menu)
}

function remover () {
    menu.innerHTML = "";
}

export {maker, remover}