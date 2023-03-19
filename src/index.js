import homePage from "./home-page";
import menuPage from "./menu";
import contactPage from "./Contact";
import "./styles.css";

homePage();

const page = document.querySelector("body");
const content = document.querySelector("#content");

const header = document.createElement("div");
header.classList.add("mainHeading");

const reserveNow = document.createElement("button");
reserveNow.classList.add("reserve");
reserveNow.textContent = "Reserve Now";
header.appendChild(reserveNow);

const tabs = document.createElement("div");
tabs.classList.add("tabs");

const restName = document.createElement("div");
restName.classList.add("restName");
restName.textContent = "The Mobarak's Cafe";
restName.addEventListener("click", () => {
  clearPage();
  homePage();
  clicked(home);
});
header.appendChild(restName);

export function clearPage() {
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
}

export function clicked(tab) {
  home.classList.remove("clicked");
  menu.classList.remove("clicked");
  contact.classList.remove("clicked");
  tab.classList.add("clicked");
}

const home = document.createElement("div");
home.textContent = "home";
home.addEventListener("click", () => {
  clearPage();
  homePage();
  clicked(home);
});

export const menu = document.createElement("div");
menu.textContent = "menu";
menu.style.borderLeft = "1px solid black";
menu.style.borderRight = "1px solid black";
menu.style.paddingLeft = "10px";
menu.style.paddingRight = "10px";

menu.addEventListener("click", () => {
  clearPage();
  menuPage();
  clicked(menu);
});

const contact = document.createElement("div");
contact.textContent = "contact";
contact.addEventListener("click", () => {
  clearPage();
  contactPage();
  clicked(contact);
});

tabs.appendChild(home);
tabs.appendChild(menu);
tabs.appendChild(contact);

header.appendChild(tabs);

page.appendChild(header);
