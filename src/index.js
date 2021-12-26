import * as header from './header.js';
import * as home from './home.js';
import * as menu from './menu.js';

header.maker();
menu.maker();

header.spicy.addEventListener("click", () => {
    menu.remover()
    home.maker()
})

header.menu.addEventListener("click", () => {
    home.remover();
    menu.remover();
    menu.maker();
})

header.contact.addEventListener("click", () => {

})

