import {clicked, menu, clearPage} from "./index.js";
import menuPage from "./menu";

export default function homePage() {
  const body = document.querySelector('body');
  const content = document.querySelector("#content");
  const homePage = document.createElement("div");
  homePage.classList.add('homePage')


  const homeText = document.createElement("div");
  homeText.classList.add('homeText');
  const welcome = document.createElement("p");
  welcome.classList.add('homeDesc')
  welcome.textContent = "Welcome to Mobarak's Cafe!"

  const welcomeSubText = document.createElement('p');
  welcomeSubText.textContent = "Take a look at our delicious menu! Feel free to contact us if you have any questions!"
  welcomeSubText.classList.add('homeDesc');
  welcomeSubText.classList.add('subDesc');

  const orderNow = document.createElement('button');
  orderNow.classList.add('orderNow');
  orderNow.textContent = 'Order Now!'
  orderNow.addEventListener("click", () =>{
    clearPage();
    menuPage();
    clicked(menu);
  })

  
  homeText.appendChild(welcome);
  homeText.appendChild(welcomeSubText);
  

  homePage.appendChild(homeText);
  homePage.appendChild(orderNow);
  
  content.appendChild(homePage);
}