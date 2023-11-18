const orderList = document.getElementById("order-list");
const menuItems = document.createElement("ul");
menuItems.classList.add("menu-items");
orderList.appendChild(menuItems);

const myAPI = "https://655273ad5c69a779032a0b90.mockapi.io/Restaurant";

fetch(myAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.forEach(entry => {
      entry.restaurants.forEach(restaurant => {
        restaurant.menu.items.forEach(item => {
          const menuItem = document.createElement("li");
          menuItem.classList.add("menu-item");

          const itemImage = document.createElement("img");
          itemImage.src = item.image;

          const itemName = document.createElement("span");
          itemName.textContent = item.name;

          const itemPrice = document.createElement("span");
          itemPrice.textContent = `${item.price} ريال`;

          const orderBtn = document.createElement("button");
          orderBtn.textContent = "اطلب الان";
          orderBtn.addEventListener("click", () => {
            window.location.href = 'appOrder.html';
        });

          menuItem.appendChild(itemImage);
          menuItem.appendChild(itemName);
          menuItem.appendChild(itemPrice);
          menuItem.appendChild(orderBtn);

          menuItems.appendChild(menuItem);
        });
      });
    });
  });
