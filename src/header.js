import './style.css';

const headerLine = document.createElement("hr");
const menu = document.createElement("a")
menu.setAttribute("class", "nav")
menu.innerHTML = "MENU"

const contact = document.createElement("a")
contact.setAttribute("class", "nav")
contact.innerHTML = "CONTACT"

const navContainer = document.createElement("nav");
navContainer.setAttribute("class", "nav-container")

const veganRestaurant = document.createElement("a")
veganRestaurant.setAttribute("class", "vegan-restaurant")
veganRestaurant.innerHTML = "vegan<br>restaurant"

const spicy = document.createElement("a")
spicy.setAttribute("class", "spicy")
spicy.innerHTML = "Spicy"

const logoContainer = document.createElement("div");

const linksContainer = document.createElement("div");
linksContainer.setAttribute("class", "links-container")

const headerContainer = document.createElement("div");

const header = document.createElement("header");

const content = document.querySelector("#content")

function maker () {
    navContainer.append(menu, contact);

    logoContainer.append(spicy, veganRestaurant);
    
    linksContainer.append(logoContainer, navContainer)    

    headerContainer.append(linksContainer, headerLine);   

    header.append(headerContainer);    

    content.append(header)    
};

export {maker, spicy, menu, contact}

