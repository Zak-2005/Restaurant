export default function menuPage() {
  const content = document.querySelector("#content");
const menu = document.createElement("div");

  const header = document.createElement("div");
  header.textContent = "Menu";
  menu.appendChild(header);

  const food1 = createFood(
    "Chicken Shawarma",
    "Crispy, Juicy, Full of Flavor! The Chicken Shawarma is made with a tangy garlic sauce, crispy french fries, tomatoes, pickles, and the best chicken you've ever had!",
    "$12",
    "../Pictures/Chicken Shawarma.jpg"
  );
  menu.appendChild(food1);
  
  content.appendChild(menu);
}
const createFood = (name, desc, price, src) => {
    const food = document.createElement("div");
    const foodName = document.createElement("div");
    foodName.textContent = name;
    const foodDesc = document.createElement("div");
    foodDesc.textContent = desc;
    const foodPrice = document.createElement("div");
    foodPrice.textContent = price;
    const foodPic = document.createElement("img");
    foodPic.src = src;
  
    food.appendChild(foodName);
    food.appendChild(foodDesc);
    food.appendChild(foodPrice);
    food.appendChild(foodPic);

    return food;
  };