const { createElement, checkAndGenerate, outputTitle } = require("./util");

// const initApp = () => {
//   const newProductBtn = document.querySelector("#add-product");
//   newProductBtn.addEventListener("click", addProduct);
// };

// const addProduct = () => {
//   const productTitle = document.querySelector("#title");
//   const productPrice = document.querySelector("#price");
//   const products = document.querySelector(".products");

//   const titleValue = productTitle.value;
//   const priceValue = productPrice.value;

//   const output = checkAndGenerate(titleValue, priceValue);

//   if (!output) {
//     return;
//   }

//   const productEl = createElement("li", output, "product-list");

//   products.append(productEl);

// };

// initApp();

const btn = document.querySelector("button");
btn.addEventListener("click", outputTitle);
