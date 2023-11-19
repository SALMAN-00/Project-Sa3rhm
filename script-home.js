/*let API = "https://655273ad5c69a779032a0b90.mockapi.io/Restaurant";

fetch(API, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    restaurants: [
      {
        id: 1,
        name: "ماكدونالدز",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald's_Golden_Arches.svg/150px-McDonald's_Golden_Arches.svg.png",
        menu: {
          items: [
            {
              id: 1,
              name: "بيج تايستي (لحم)",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698991515810/assets/9661/products/10.png?",
              price: 23.0,
            },
            {
              id: 2,
              name: "بيج تايستي مشروم ساندويش",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698991515810/assets/9661/products/780.png?",
              price: 24.0,
            },
            {
              id: 3,
              name: "سبايسي ماك تشيكن (دجاج)",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698991515810/assets/9661/products/19.png?",
              price: 19.0,
            },
            {
              id: 4,
              name: "ماك تشيكن (دجاج)",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698332393616/assets/9661/products/9.png?",
              price: 18.0,
            },
            {
              id: 5,
              name: "جراند تشيكن سبيشال (دجاج)",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698991515810/assets/9661/products/37.png?",
              price: 25.0,
            },
            {
              id: 6,
              name: "تشيكن ماك (دجاج)",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698991515810/assets/9661/products/32.png?",
              price: 18.0,
            },
            {
              id: 7,
              name: "بيج ماك لحم",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698991515810/assets/9661/products/5.png?",
              price: 18.0,
            },
            {
              id: 8,
              name: "تشيز برجر(لحم)",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698991515810/assets/9661/products/3.png?",
              price: 7.0,
            },
            {
              id: 9,
              name: "تشيكن برجر (دجاج)",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698991515810/assets/9661/products/29.png?",
              price: 7.0,
            },
            {
              id: 10,
              name: "سبايسي جراند تشيكن سبيشال (دجاج)",
              image:
                "https://www.riyadh.mcdelivery.com.sa/sa/riy/static/1698991515810/assets/9661/products/42.png?",
              price: 24.0,
            },
          ],
        },
      },
    ],
    deliveryApps: [
      {
        id: 1,
        name: "ذا شيفز",
        image:
          "https://saudiretail.net/wp-content/uploads/2023/09/%D8%B0%D8%A7-%D8%B4%D9%81%D8%B2.png",
        deliveryPrice: 9.0,
      },
      {
        id: 2,
        name: "هنقرستيشن",
        image:
          "https://alpha-logistics.com.sa/storage/2023/03/%D9%87%D9%86%D9%82%D8%B1%D8%B3%D8%AA%D9%8A%D8%B4%D9%86.webp",
        deliveryPrice: 11.0,
      },
      {
        id: 3,
        name: "جاهز",
        image:
          "https://salogos.org/wp-content/uploads/2022/07/%D8%AC%D8%A7%D9%87%D9%88-300x95.png",
        deliveryPrice: 10,
      },
      {
        id: 4,
        name: "مرسول",
        image:
          "https://play-lh.googleusercontent.com/NM8BlVdsNI1TD5PG3hi1MErQm16aw0MrDnjGOcoQcTgtjXf6ZRSYDGbxSC8EX0Yko3A",
        deliveryPrice: 11,
      },
      {
        id: 5,
        name: "تويو",
        image:
          "https://www.almrsal.com/wp-content/uploads/2021/03/images-70.jpeg",
        deliveryPrice: 11,
      },
    ],
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

  .catch(error => console.error("Error:", error));
*/
const btnLogout = document.getElementById("btn-logout")
const restaurantsList = document.getElementById("restaurants-list");

const API = "https://655273ad5c69a779032a0b90.mockapi.io/Restaurant";

fetch(API)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.forEach(entry => {
      entry.restaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement("div");
        restaurantDiv.classList.add("restaurant");

        const restaurantName = document.createElement("h2");
        restaurantName.textContent = restaurant.name;

        const restaurantImage = document.createElement("img");
        restaurantImage.src = restaurant.image;

        const restaurantBtn = document.createElement("button");
        restaurantBtn.textContent = "عرض القائمة";
        restaurantBtn.addEventListener("click", () => {
          window.location.href = "order.html";
        });

        restaurantDiv.appendChild(restaurantImage);
        restaurantDiv.appendChild(restaurantName);
        restaurantDiv.appendChild(restaurantBtn);

        restaurantsList.appendChild(restaurantDiv);
      });
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
  btnLogout.addEventListener("click",()=>{
    localStorage.removeItem("User");
    window.location.href = "signUp.html";
  })