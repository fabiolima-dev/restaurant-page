import './style.css';

const body = document.querySelector("body")
const content = document.querySelector("#content");

const contact = document.createElement("div")

const addres = document.createElement("h1")
addres.setAttribute("id", "addres")
addres.innerHTML = "2909 Grandview Hwy, Vancouver, BC V5M 2E4, Canadá"

const hoursFormContainer = document.createElement("div")
hoursFormContainer.setAttribute("class", "hours-form-container")

const hoursContainer = document.createElement("div")
hoursContainer.setAttribute("class", "hours-container")

const hours = document.createElement("h1")
hours.setAttribute("class", "hours")
hours.innerHTML = "Opening Hours"

const weekdays = document.createElement("p")
weekdays.setAttribute("class", "hours-p")
weekdays.innerHTML = "Monday - Friday"

const weekdaysHours = document.createElement("p")
weekdaysHours.setAttribute("class", "hours-p")
weekdaysHours.innerHTML = "11h - 16h"

const weekend = document.createElement("p")
weekend.setAttribute("class", "hours-p")
weekend.innerHTML = "Saturday - Sumday"

const weekendHours = document.createElement("p")
weekendHours.setAttribute("class", "hours-p")
weekendHours.innerHTML = "11h - 23h"

const form = document.createElement("form")

const name = document.createElement("input")
name.setAttribute("type", "text")
name.setAttribute("class", "form-input")
name.setAttribute("placeholder", "Name")

const email = document.createElement("input")
email.setAttribute("type", "text")
email.setAttribute("class", "form-input")
email.setAttribute("placeholder", "Email")

const subject = document.createElement("input")
subject.setAttribute("type", "text")
subject.setAttribute("class", "form-input")
subject.setAttribute("placeholder", "Subject")

const yourMessage = document.createElement("textarea")
yourMessage.setAttribute("type", "text")
yourMessage.setAttribute("class", "form-input")
yourMessage.setAttribute("id", "your-message")
yourMessage.setAttribute("placeholder", "Your message")

const button = document.createElement("button")
button.setAttribute("type", "button")
button.innerHTML = "Send a message"

function maker () {
    body.style.backgroundColor = "#FFB5B5";
    body.style.color = "#49543E"
    contact.append(addres)
    hoursContainer.append(
        hours,
        weekdays,
        weekdaysHours,
        weekend,
        weekendHours
    )
    form.append(
        name,
        email,
        subject,
        yourMessage,
        button
    )
    hoursFormContainer.append(hoursContainer, form)
    contact.append(hoursFormContainer)
    content.append(contact)
}

function remover () {
    contact.innerHTML = "";
}

export {maker, remover}
