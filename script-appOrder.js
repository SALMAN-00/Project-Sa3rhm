const appOrderList = document.getElementById("appOrder-list");
const myAPI = "https://655273ad5c69a779032a0b90.mockapi.io/Restaurant";

fetch(myAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.forEach(entry => {
      entry.deliveryApps.forEach(deliveryApp => {
        const deliveryAppDiv = document.createElement("div");
        deliveryAppDiv.classList.add("delivery-app");

        const deliveryAppName = document.createElement("h2");
        deliveryAppName.textContent = deliveryApp.name;

        const deliveryAppImage = document.createElement("img");
        deliveryAppImage.src = deliveryApp.image;
        deliveryAppImage.alt = deliveryApp.name;

        const deliveryAppPrice = document.createElement("span");
        deliveryAppPrice.textContent = `Delivery Price: ${deliveryApp.deliveryPrice} ريال`;

        deliveryAppDiv.appendChild(deliveryAppName);
        deliveryAppDiv.appendChild(deliveryAppImage);
        deliveryAppDiv.appendChild(deliveryAppPrice);

        appOrderList.appendChild(deliveryAppDiv);
      });
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
