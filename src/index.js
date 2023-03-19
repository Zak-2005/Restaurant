import homePage from "./home-page";
import menuPage from "./menu";
import contactPage from "./Contact";
import './styles.css';

homePage();

const page = document.querySelector("body");
const content = document.querySelector("#content");

const tabs = document.createElement("div");
tabs.classList.add('tabs');

function clearPage() {
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
}

const home = document.createElement("div");
home.textContent = "home";
home.addEventListener("click", () => {
    clearPage();
    homePage();
});

const menu = document.createElement("div");
menu.textContent = "menu";
menu.addEventListener("click", () => {
    clearPage();
    menuPage();
});

const contact = document.createElement("div");
contact.textContent = "contact";
contact.addEventListener("click", () => {
    clearPage();
    contactPage();
});

tabs.appendChild(home);
tabs.appendChild(menu);
tabs.appendChild(contact);

page.appendChild(tabs);