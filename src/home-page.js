export default function homePage() {
  const content = document.querySelector("#content");
  const homePage = document.createElement("div");
  homePage.classList.add('homePage')

  const header = document.createElement("div");
  header.textContent = "The Mobarak's cafe";
  homePage.appendChild(header);

  const pic = document.createElement("img");
  pic.src = "../Pictures/mobarakCafe.jpg";
  homePage.appendChild(pic);

  const description = document.createElement("p");
  description.textContent =
    "Mobarak's Cafe is a Middle Eastern restaurant that offers a taste of traditional cuisine with a modern twist. Located in the heart of a bustling city, the restaurant is known for its warm and inviting atmosphere, where customers can enjoy delicious food and great company. From rich and flavorful hummus to savory shawarma, Mobarak's Cafe's menu features a wide range of authentic Middle Eastern dishes that are sure to delight any palate. Whether you're looking for a quick bite or a full meal, Mobarak's Cafe is the perfect place to experience the flavors of the Middle East."
  homePage.appendChild(description);
  
  content.appendChild(homePage);
}
