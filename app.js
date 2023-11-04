const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 1500,
        colors: [
            {
                code: "black",
                img: "./img/air__1_-removebg-preview.png",
            },
            {
                code: "darkblue",
                img: "./img/nike-air-force-1-high-coastal-blue-1__1_-removebg-preview-removebg-preview.png",
            },
        ],
    },

    {
        id: 2,
        title: "Air Jordan",
        price: 2000,
        colors: [
            {
                code: "lightgray",
                img: "./img/air-jordan-1-mid-triple-grey-4__1_-removebg-preview.png",
            },
            {
                code: "green",
                img: "./img/AJgreen-removebg-preview.png",
            },
        ],
    },

    {
        id: 3,
        title: "Blazer",
        price: 2500,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer-removebg-preview-removebg-preview.png",
            },
            {
                code: "green",
                img: "./img/Blazergreen-removebg-preview.png",
            },
        ],
    },

    {
        id: 4,
        title: "Crater",
        price: 3000,
        colors: [
            {
                code: "black",
                img: "./img/nike-crater-remixa-women-black-removebg-preview.png",
            },
            {
                code: "lightgray",
                img: "./img/Nike-Crater-Impact-DB2477-020-Release-Date-removebg-preview.png",
            },
        ],
    },

    {
        id: 5,
        title: "Dunk Low",
        price: 3500,
        colors: [
            {
                code: "gray",
                img: "./img/nike-dunk-low-grey-removebg-preview.png",
            },
            {
                code: "black",
                img: "./img/nike-sb-dunk-low-pro-black-black-1__1_-removebg-preview (2).png",
            },
        ],
    },

];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "₱" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});
