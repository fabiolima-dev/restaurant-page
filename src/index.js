import * as header from './header.js';
import * as home from './home.js';
import * as menu from './menu.js';
import * as contact from './contact.js'

header.maker();
contact.maker();

header.spicy.addEventListener("click", () => {
    contact.remover()
    menu.remover()
    home.maker()
})

header.menu.addEventListener("click", () => {
    contact.remover()
    home.remover();
    menu.remover();
    menu.maker();
})

header.contact.addEventListener("click", () => {
    home.remover();
    menu.remover();
    contact.maker();
})

