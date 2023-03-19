export default function menuPage() {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.classList.add('menuPage');

  const body = document.querySelector('body');
  body.style.backgroundImage = "url(../Pictures/woodBackground.jpg)";

  const header = document.createElement("div");
  header.textContent = "Menu";
  header.classList.add("heading");
  menu.appendChild(header);

  const food1 = createFood(
    "Chicken Shawarma",
    "Crispy, Juicy, Full of Flavor! The Chicken Shawarma is made with a tangy garlic sauce, crispy french fries, tomatoes, pickles, and the best chicken you've ever had!",
    "$12",
    "../Pictures/ChickenShawarma.jpg"
  );
  menu.appendChild(food1);
  const food2 = createFood(
    "Tabouleh",
    "The salad is made with fresh parsley, bulgur wheat, diced tomatoes, chopped onions, and seasoned with olive oil, lemon juice, and salt.",
    "$9",
    "../Pictures/tabbouleh-salad.jpg"
  );
  menu.appendChild(food2);

  const food3 = createFood(
    "Kibbeh",
    "made of ground beef, mixed with bulgur wheat, onions, and spices, and shaped into small squares. The mixture is either fried or baked until it is golden brown and crispy on the outside, while still moist and tender on the inside.",
    "$13",
    "../Pictures/kibbeh.jpg"
  );
  menu.appendChild(food3);

  const food4 = createFood(
    "Hummus",
    "Made from chickpeas, tahini, olive oil, and a variety of spices, hummus is not only packed with protein and fiber, but it also has a deliciously creamy and savory taste that is perfect for any occasion.",
    "$8",
    "../Pictures/hummus.jpg"
  );
  menu.appendChild(food4);

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

  food.classList.add('food');

  food.appendChild(foodName);
  food.appendChild(foodDesc);
  food.appendChild(foodPrice);
  food.appendChild(foodPic);

  return food;
};
