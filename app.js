const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/laptop", (req, res) => {
  const data = [
    {
      productName: "Dell Inspiron 5408",
      sku: "DI01",
      price: 33580,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/IS/ES/YJ/3630597/dell-inspiron-5408-500x500.jpg",
    },
    {
      productName: "Inspiron 15 Laptop",
      sku: "I1502",
      price: 35000,
      image: "https://www.hilaptop.com/userdata/public/gfx/28205.jpg",
    },
    {
      productName: "HP EliteBook 820",
      sku: "HPE03",
      price: 31999,
      image: "https://www.hilaptop.com/userdata/public/gfx/9325.jpg",
    },
    {
      productName: "MI Notebook 14",
      sku: "MON04",
      price: 20500,
      image:
        "https://www.hilaptop.com/userdata/public/gfx/0f43a2624acddcf6920bb14800bbf47f.jpg",
    },
    {
      productName: "ASUS VivoBook S14",
      sku: "AV05",
      price: 25750,
      image:
        "https://www.hilaptop.com/environment/cache/images/500_500_productGfx_3881.jpg",
    },
    {
      productName: "Lenovo V15",
      sku: "LV1506",
      price: 37999,
      image: "https://www.hilaptop.com/userdata/public/gfx/3919.jpg",
    },
    {
      productName: "Lenovo Ideapad Duet",
      sku: "LID07",
      price: "40000",
      image: "https://m.media-amazon.com/images/I/61yygX7-kaL._SX679_.jpg",
    },
    {
      productName: "Lenovo Legion Y540 ",
      sku: "LLY08",
      price: "51000",
      image: "https://m.media-amazon.com/images/I/41HjNEeVZEL.jpg",
    },

    {
      productName: "IdeaPad Gaming 3",
      sku: "IG309",
      price: "100000",
      image: "https://m.media-amazon.com/images/I/41HjNEeVZEL.jpg",
    },
    { productName: "Acer Aspire 3",
     sku: "AA310", 
     price: "61250",
      image: "https://m.media-amazon.com/images/I/71VB1UTcYkL._SX679_.jpg" },
    {
      productName: "DELL Latitude 7440 ",
      sku: "DL11",
      price: "34000",
      image: "https://m.media-amazon.com/images/I/41bufC9IzpL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      productName: "Apple MacBook Pro",
      sku: "AMP12",
      price: "35000",
      image: "https://m.media-amazon.com/images/I/41nTVX3ixmL._SX300_SY300_QL70_FMwebp_.jpg",
    },

    {
      productName: "Apple MacBook Air",
      sku: "AMA13",
      price: "43000",
      image: "https://m.media-amazon.com/images/I/41nTVX3ixmL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      productName: "AVITA LIBER V14",
      sku: "ALV1414",
      price: "26700",
      image: "https://m.media-amazon.com/images/I/81bu95bhbOL._SX679_.jpg",
    },
    { productName: "HP Pavilion 15s",
     sku: "HPP15",
      price: "28900", 
      image: "https://m.media-amazon.com/images/I/71GOHbZLUuL._SX679_.jpg" },
    
  ];
  res.json(data);
});
app.get("/buttonlist", (req, res) => {
  const data = [
"Dell",
"Acer",
"Macbook",
"Hp"

  ];
  res.json(data);
});


const server = app.listen(8080, () => {
  console.log("server is running up- port 8080");
});
