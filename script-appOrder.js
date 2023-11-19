
const cotainer = document.getElementById("container");

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

        const deliveryAppPrice = document.createElement("p");
        deliveryAppPrice.textContent = `سعر التوصيل: ${deliveryApp.deliveryPrice} ريال`;
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `سعر الوجبة:${30}`;

        const sum = document.createElement("p");
        const totalPrice =
          parseInt(deliveryApp.deliveryPrice) + parseInt(itemPrice);
        sum.textContent = `المجموع: ${totalPrice} ريال`;
        const btnToApp = document.createElement("button");
        btnToApp.textContent = "انقلني للتطبيق";
        const btnChange = document.createElement("button");
        btnChange.textContent = "بغير الطلب";
        
        deliveryAppDiv.appendChild(deliveryAppImage);
        deliveryAppDiv.appendChild(deliveryAppName);
        
        deliveryAppDiv.appendChild(deliveryAppPrice);
        deliveryAppDiv.appendChild(itemPrice);
        deliveryAppDiv.appendChild(sum);

        deliveryAppDiv.appendChild(btnChange);
        deliveryAppDiv.appendChild(btnToApp);
        appOrderList.appendChild(deliveryAppDiv);


      });
      const btnMoreApp = document.createElement("button")
      btnMoreApp.textContent ="المزيد من التطبيقات"
      cotainer.appendChild(btnMoreApp);
    });
  })
  
  .catch(error => {
    console.error("Error fetching data:", error);
  });
