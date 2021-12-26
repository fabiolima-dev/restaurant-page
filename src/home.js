import './style.css';
import image from './home-image.jpg'

const body = document.querySelector("body")

const home = document.createElement("div")

const slogan = document.createElement("h1")
slogan.innerHTML = "Food that grows, not born."

const homeImage = document.createElement("img")
homeImage.setAttribute("src", image)
homeImage.setAttribute("class", "home-image")

const textContainer = document.createElement("div")
textContainer.setAttribute("class", "home-text-container")

const menu = document.createElement("h1")
menu.setAttribute("class", "home-menu")
menu.innerHTML = "Our Menu";

const homeText = document.createElement("p")
homeText.setAttribute("class", "home-text")
homeText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com";

const content = document.querySelector("#content");

const maker = function () {
    body.style.backgroundColor = "#fdebe4";
    body.style.color = "#4a553f"
    textContainer.append(menu)
    textContainer.append(homeText)
    home.append(slogan, homeImage, textContainer)
    content.append(home)
}

const remover = function () {
    home.innerHTML = "";
}

export {maker, remover};